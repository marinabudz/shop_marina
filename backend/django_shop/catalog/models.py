from django.db import models

class Categories(models.Model):
    name = models.CharField(max_length=200, default='')
    url_id = models.CharField(max_length=200, default='')
class Item(models.Model):
    name = models.CharField(max_length=200, default='')
    inventory = models.IntegerField(default=0)
    price = models.CharField(max_length=200, default='')
    description = models.TextField(default='')
    ingridients = models.TextField(default='')
    size = models.CharField(max_length=200, default='')
    production = models.CharField(max_length=200, default='')
