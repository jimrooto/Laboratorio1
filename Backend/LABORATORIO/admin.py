from django.contrib import admin

# Register your models here.
from LABORATORIO.models import Doctor, Paciente, Examen, Categoria


admin.site.register(Doctor)
admin.site.register(Paciente)
admin.site.register(Examen)
admin.site.register(Categoria)
