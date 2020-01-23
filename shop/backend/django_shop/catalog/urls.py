from django.urls import path 

from . import views

urlpatterns = [
    path('categories/', views.categories, name='categories'),
    path('categories/<int:categ_id>', views.category, name= 'category'),
    path('category/products/<int:category_id>', views.product_by_category, name ='product_by_category'), 
    path('products/', views.products, name= 'products'),
    path('products/<from_number>/<count>', views.products_more, name='products_more'),
    path('products/<int:prod_id>', views.product, name='product')]

