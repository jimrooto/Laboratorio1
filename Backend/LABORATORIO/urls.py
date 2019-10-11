from django.urls import path

from django.conf.urls import url
from . import views
from django.contrib.auth.models import User

from rest_framework import routers, serializers, viewsets

from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    url(r'^doctor$', views.DoctorList.as_view()),
    url(r'^doctor(?P<pk>[0-9]+)$', views.DoctorDetail.as_view()),
    url(r'^paciente$', views.PacienteList.as_view()),
    url(r'^paciente(?P<pk>[0-9]+)$', views.PacienteDetail.as_view()),
    url(r'^categoria$', views.CategoriaList.as_view()),
    url(r'^categoria(?P<pk>[0-9]+)$', views.CategoriaDetail.as_view()),
    url(r'^examen$', views.ExamenList.as_view()),
    url(r'^examen(?P<pk>[0-9]+)$', views.ExamenDetail.as_view()),

    path('auth/login/', obtain_jwt_token),
    path('auth/refresh-token/', refresh_jwt_token),
  
]
