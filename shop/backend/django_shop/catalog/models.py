from django.db import models

class Categories(models.Model):
    name = models.CharField(max_length=200, default='')
    category_url = models.TextField(default='', blank=True)
    def __str__(self):
        return self.name


class Item(models.Model):
    photo_main = models.ImageField(upload_to='itemphotos', blank=True)
    photo1 = models.ImageField(upload_to='itemphotos', blank=True)
    photo2 = models.ImageField(upload_to='itemphotos', blank=True)
    photo3 = models.ImageField(upload_to='itemphotos', blank=True)
    sale = models.BooleanField(default=False)
    new_in = models.BooleanField(default=False)
    not_available = models.BooleanField(default=False)
    category =models.ForeignKey(Categories, on_delete =models.CASCADE)
    name = models.CharField(max_length=200, default='', blank=True)
    inventory = models.IntegerField(default=0, blank=True)
    price = models.CharField(max_length=200, default='', blank=True)
    new_price = models.CharField(max_length=200, default='', blank=True)
    description = models.TextField(default='', blank=True)
    ingridients = models.TextField(default='', blank=True)
    size = models.CharField(max_length=200, default='', blank=True)
    production = models.CharField(max_length=200, default='', blank=True)
    same_product_url = models.TextField(default='', blank=True)
    url_item = models.TextField(default='', blank=True)
    same_product_photo = models.ImageField(upload_to='itemphotos', blank=True)
    def __str__(self):
        return '[' + str(self.category)+ ']' +self.name
