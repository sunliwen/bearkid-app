from django.conf.urls import patterns, url
from .views import AuthView

urlpatterns = patterns('', 
    url(r'^$', AuthView.as_view(), name='auth'),
)
