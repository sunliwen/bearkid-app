import time, json, hmac, base64, logging, hashlib, os
from datetime import datetime, tzinfo, timedelta

from django.http import HttpResponse
from django.template.response import TemplateResponse
from django.views.generic import View

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from weibo import APIError, APIClient
from weiboapp.settings import APP_KEY, APP_SECRET, APP_URL, WEIBO_ID

from django.utils import simplejson as json


class JSONResponseMixin(object):
    def render_to_response(self, context):
        "Returns a JSON response containing 'context' as payload"
        return self.get_json_response(self.convert_context_to_json(context))

    def get_json_response(self, content, **httpresponse_kwargs):
        "Construct an `HttpResponse` object."
        return HttpResponse(content,
                                 content_type='application/json',
                                 **httpresponse_kwargs)

    def convert_context_to_json(self, context):
        "Convert the context dictionary into a JSON object"
        # Note: This is *EXTREMELY* naive; in reality, you'll need
        # to do much more complex handling to ensure that arbitrary
        # objects -- such as Django model instances or querysets
        # -- can be serialized as JSON.
        return json.dumps(context)


class AuthView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super(AuthView, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):
        return TemplateResponse(request,
            template="auth.html",
            context=dict(
                APP_KEY=APP_KEY,
                APP_URL=APP_URL
            )
        )

    def post(self, request, *args, **kwargs):
        print request.POST

        client = _create_client()
        signed_request = request.POST['signed_request']
        data = client.parse_signed_request(signed_request)
        print data

        user_id = data.get('uid', '')
        auth_token = data.get('oauth_token', '')

        if not user_id or not auth_token:
            return TemplateResponse(
                request,
                template="auth.html",
                context=dict(
                    APP_KEY=APP_KEY,
                    APP_URL=APP_URL
                )
            )

        return TemplateResponse(
                request,
                template="index.html",
                context=dict(
                    APP_KEY=APP_KEY,
                    APP_URL=APP_URL,
                    SIGNED_REQUEST=signed_request,
                )
            )


class WeiboView(View, JSONResponseMixin):

    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super(WeiboView, self).dispatch(*args, **kwargs)

    def post(self, request, *args, **kwargs):
        print request.POST

        client = _create_client()
        signed_request = request.POST['signed_request']
        follow = request.POST['follow'][0] == u't'

        #print type(follow)
        #print follow
        data = client.parse_signed_request(signed_request)

        user_id = data.get('uid', '')
        auth_token = data.get('oauth_token', '')

        if not user_id or not auth_token:
            return JSONResponseMixin.render_to_response(self, dict(error='bad_signature'))

        expires = data.expires
        client.set_access_token(auth_token, expires)

        # TODO, switch to update_url_text api later
        #pic_path = os.path.normpath(os.path.join(os.path.dirname(__file__), 'static/images/index_small.jpg'))
        #print pic_path
        #f = open(pic_path, 'rb')
        #r = client.statuses.upload.post(status=request.POST['text'], pic=f)
        #f.close()

        if follow:
            print "try to follow"
            try:
                r = client.friendships.create.post(uid=WEIBO_ID)
                if 'error' in r:
                    return JSONResponseMixin.render_to_response(self, r)
                return JSONResponseMixin.render_to_response(self, dict(error='success'))
            except:
                return JSONResponseMixin.render_to_response(self, dict(error='fail'))


def _create_client(oauth_token=None, expires=None):
    client = APIClient(APP_KEY, APP_SECRET, APP_URL)
    if oauth_token and expires:
        client.set_access_token(oauth_token, expires)
    return client
