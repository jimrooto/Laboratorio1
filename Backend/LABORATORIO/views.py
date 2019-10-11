from django.shortcuts import render

from rest_framework import generics

from django.contrib.auth.models import User
from rest_framework import generics, viewsets
from rest_framework import viewsets

from LABORATORIO.models import Doctor, Paciente, Examen, Categoria
from LABORATORIO.serializers import UserSerializer, DoctorSerializer, PacienteSerializer, ExamenSerializer, CategoriaSerializer

class DoctorList(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class DoctorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class PacienteList(generics.ListCreateAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer

class PacienteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer

class ExamenList(generics.ListCreateAPIView):
    queryset = Examen.objects.all()
    serializer_class = ExamenSerializer

class ExamenDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Examen.objects.all()
    serializer_class = ExamenSerializer

class CategoriaList(generics.ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class CategoriaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer