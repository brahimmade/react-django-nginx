from django.urls import path

from .views import *

urlpatterns = [
    path('', CircleList.as_view()),
    path('<pk>', CircleDetail.as_view()),
]
