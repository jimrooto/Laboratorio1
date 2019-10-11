from django.db import models


class Doctor(models.Model):
  
    nombreDoc = models.CharField(max_length=30)
    apellidoDoc = models.CharField(max_length=30,null=True)
    rutDoc =   models.CharField(max_length=12,unique=True)
    direccionDoc = models.CharField(max_length=30,null=True)
    telefonoDoc = models.CharField(max_length=13, null=True)
    release_date = models.DateField(auto_now=True)
 
class Paciente(models.Model):
   
    nombrePac = models.CharField(max_length=30)
    apellidoPac = models.CharField(max_length=30,null=True)
    rutPac =   models.CharField(max_length=12, unique=True)
    direccionPac = models.CharField(max_length=30, null=True)
    telefonoPac = models.CharField(max_length=13, null=True)
    release_date = models.DateField(auto_now=True)

class Examen(models.Model):
    
    nombreExa = models.CharField(max_length=30)
    descripcionExa = models.CharField(max_length=30, null=True)
    nombrePac = models.CharField(max_length=30,null=True)
    apellidoPac = models.CharField(max_length=30,null=True)
    rutPac =   models.CharField(max_length=12,null=True)
    apellidoDoc = models.CharField(max_length=30, null=True)
    nombreDoc = models.CharField(max_length=30, null=True)
    release_date = models.DateField(auto_now=True)
    categoriaExa = models.CharField(max_length=30, null=True)
    fechaExa = models.DateField(null=True)

class Categoria(models.Model):
  
    nombreCat = models.CharField(max_length=30)
    detalleCat = models.CharField(max_length=25, null=True)
    release_date = models.DateField(auto_now=True)
   
def publish(self):
        self.fechaExa = timezone.now()
        self.save()

