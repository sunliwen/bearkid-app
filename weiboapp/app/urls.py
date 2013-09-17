from django.conf.urls import patterns, url
from .views import AuthView, WeiboView

urlpatterns = patterns('', 
    url(r'^$', AuthView.as_view(), name='auth'),
    url(r'^weibo$', WeiboView.as_view(), name='weibo'),
)
