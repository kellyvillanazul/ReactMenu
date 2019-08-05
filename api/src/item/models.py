import os
from django.db import models

# Create your models here.

def content_path(instance, filename):
    return os.path.join('', filename)

class Item(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    price = models.IntegerField()
    size = models.CharField(max_length=5)
    image = models.ImageField(upload_to=content_path, null=True)
