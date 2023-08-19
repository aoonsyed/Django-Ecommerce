# from typing import Any
from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField(null=True)

    def __str__(self):
        return self.user.username

class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)

    def __str__(self):
        return self.title
    
class Product(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True)
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    price = models.FloatField()

    def __str__(self):
        return self.title

class Customer(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    seller = models.BooleanField

    def __str__(self):
        return self.username
    
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)

class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Customer, on_delete=models.CASCADE)

    def __str__(self):
        return self.product.title
    
class CustomerAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    address = models.TextField()

    def __str__(self):
        return self.address
    
class ProductRatings(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    review = models.TextField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE,related_name='product_ratings')
    rating = models.IntegerField()
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.rating} - {self.review}'
    


    