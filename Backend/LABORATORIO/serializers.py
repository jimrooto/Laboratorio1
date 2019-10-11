from rest_framework import serializers

from LABORATORIO.models import Doctor, Paciente, Examen, Categoria


from django.contrib.auth.models import User


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ('id',  'nombreDoc','rutDoc', 'direccionDoc','telefonoDoc')


class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = ('id',  'nombrePac','rutPac', 'direccionPac','telefonoPac')

class ExamenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Examen
        fields = ('id', 'nombreExa','descripcionExa')

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('id',  'nombreCat')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id','username', 'password','email')

  