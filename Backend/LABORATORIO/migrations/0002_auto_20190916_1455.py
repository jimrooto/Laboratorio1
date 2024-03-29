# Generated by Django 2.2.5 on 2019-09-16 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LABORATORIO', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigoCat', models.IntegerField()),
                ('nombreCat', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigoDoc', models.IntegerField()),
                ('nombreDoc', models.CharField(max_length=30)),
                ('rutDoc', models.CharField(max_length=12)),
                ('direccionDoc', models.CharField(max_length=30)),
                ('telefonoDoc', models.CharField(max_length=13)),
            ],
        ),
        migrations.CreateModel(
            name='Examen',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigoExa', models.IntegerField()),
                ('nombreExa', models.CharField(max_length=30)),
                ('descripcionExa', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Paciente',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigoPac', models.IntegerField()),
                ('nombrePac', models.CharField(max_length=30)),
                ('rutPac', models.CharField(max_length=12)),
                ('direccionPac', models.CharField(max_length=30)),
                ('telefonoPac', models.CharField(max_length=13)),
            ],
        ),
        migrations.DeleteModel(
            name='Articulo',
        ),
        migrations.DeleteModel(
            name='Deposito',
        ),
    ]
