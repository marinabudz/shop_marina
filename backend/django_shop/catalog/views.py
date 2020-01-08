from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse('Каталог')
def categories(request):
    return HttpResponse('Категорії')
def product(request, prod_id):
    return HttpResponse('Категорії '+ prod_id)