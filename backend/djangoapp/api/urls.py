from django.urls import path

from .views import *

urlpatterns = [
    path('circles', CircleList.as_view()),
    path('circles/<pk>', CircleDetail.as_view()),
]
