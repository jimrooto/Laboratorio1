# Generated by Django 2.2.5 on 2019-09-23 15:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('LABORATORIO', '0005_auto_20190923_1218'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='examen',
            name='due_back',
        ),
    ]