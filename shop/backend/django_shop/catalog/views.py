from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template import loader
from .models import Item
from .models import Categories
import json


# всі категорії
def categories(request):
    categories = Categories.objects.all()
    all_categories =[]
    for item in categories:
        alist={
            "name": item.name,
            "id": item.id
        }
        all_categories.append(alist)
    return JsonResponse(all_categories, safe=False)

# кожна окрема категорія 
def category(request, categ_id):
    item = Categories.objects.filter(id=categ_id)
    elem = item[0]
    alist={
        "name": elem.name,
        "id": elem.id}
    return JsonResponse(alist, safe=False)

# продукти по категорії
def product_by_category(request, category_id):
    start_count = 10
    try:
        cid = int(category_id)
        category = Categories.objects.get( id = cid )
        items = Item.objects.filter(category=category)[:start_count]
    except:
        items = []
    if category_id == 'all':
        items = Item.objects.all()[:start_count]
    items_in_category=[]
    for item in items:
        alist={
            'category': item.category.name,
            'id': item.id,
            'new_price': item.new_price,
            'src': item.photo_main.url,
            'sale': item.sale,
            "new_in": item.new_in,
            "price": item.price,
            "name": item.name}
        items_in_category.append(alist)
    return JsonResponse(items_in_category, safe=False)

 

# всі продукти 
def products(request):
    items = Item.objects.all()
    all_products=[]
    for item in items:
        alist={
            'category': item.category.name,
            'id': item.id,
            'new_price': item.new_price,
            'src': item.photo_main.url,
            'sale': item.sale,
            "new_in": item.new_in,
            "price": item.price,
            "name": item.name,
            "url_item": item.url_item}
        all_products.append(alist)
    return JsonResponse(all_products[:9], safe=False)




# підгрузити більше продуктів
def products_more(request, from_number, count):
    load_products = Item.objects.order_by('id')
    more_products=[]
    for item in load_products:
        alist={
            'category': item.category.name,
            'id': item.id,
            'new_price': item.new_price,
            'src': item.photo_main.url,
            'sale': item.sale,
            "new_in": item.new_in,
            "price": item.price,
            "name": item.name,
            "url_item": item.url_item}
        more_products.append(alist)
    return JsonResponse(more_products[10:20], safe=False)


# кожен окремий продукт
def product(request, prod_id):
    item = Item.objects.filter(id=prod_id)
    elem = item[0]
    variants=[
        {'variantId':1, 'variantImage': elem.photo_main.url,'variantImageSmall':elem.photo_main.url}, 
        {'variantId':2, 'variantImage': elem.photo1.url, 'variantImageSmall':elem.photo1.url}, 
        {'variantId':3, 'variantImage': elem.photo2.url, 'variantImageSmall':elem.photo2.url}, 
        {'variantId':4, 'variantImage': elem.photo3.url, 'variantImageSmall':elem.photo3.url}, 
    ]
    alist={
        'category': elem.category.name,
        'id': elem.id,
        'new_price': elem.new_price,
        "photo_main": elem.photo_main.url,
        'variants': variants,
        'sale': elem.sale,
        "new_in": elem.new_in,
        "price": elem.price,
        "name": elem.name,
        "url_item": elem.url_item,
        "not_available": elem.not_available,
        "category": elem.category.name,
        "description": elem.description,
        "ingridients": elem.ingridients,
        "size": elem.size,
        "production": elem.production,
        # "same_product_url": elem.same_product_url,
        # "src": elem.same_product_photo.url}
    }
    return JsonResponse(alist, safe=False)

