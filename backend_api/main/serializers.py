from rest_framework import serializers
from . import models

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['user', 'address']

    def __init__(self, *args,**kwargs):
        super(VendorSerializer, self).__init__( *args,**kwargs)
        # self.Meta.depth = 1    

class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['id','user','address']  

    def __init__(self, *args,**kwargs):
        super(VendorDetailSerializer, self).__init__( *args,**kwargs)
        # self.Meta.depth = 1           


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = ['id','category','vendor','title','detail','price']

    def __init__(self, *args,**kwargs):
        super(ProductListSerializer, self).__init__( *args,**kwargs)
        # self.Meta.depth = 1    

class ProductDetailSerializer(serializers.ModelSerializer):
    product_ratings = serializers.StringRelatedField(many=True, read_only = True)
    class Meta:
        model = models.Product
        fields = ['id','category','vendor','title','detail','price', 'product_ratings']


    def __init__(self, *args,**kwargs):
        super(ProductDetailSerializer, self).__init__( *args,**kwargs)
        # self.Meta.depth = 1           


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id','user', 'mobile']

    def __init__(self, *args,**kwargs):
        super(CustomerSerializer, self).__init__( *args,**kwargs)
        # self.Meta.depth = 1    


# class LoginSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.Login
#         fields = '__all__'

#     def __init__(self, *args,**kwargs):
#         super(LoginSerializer, self).__init__( *args,**kwargs)
#         # self.Meta.depth = 1        

class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = ['id','user','mobile']  

    def __init__(self, *args,**kwargs):
        super(CustomerDetailSerializer, self).__init__( *args,**kwargs)
        # self.Meta.depth = 1           


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ['id','customer']

    def __init__(self, *args,**kwargs):
        super(OrderSerializer, self).__init__( *args,**kwargs)
        # self.Meta.depth = 1    

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = ['id','order', 'product']

    def __init__(self, *args,**kwargs):
        super(OrderDetailSerializer, self).__init__( *args,**kwargs)
        # self.Meta.depth = 1    

class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomerAddress
        fields = ['id', 'customer', 'address']

    def __init__(self, *args,**kwargs):
        super(CustomerAddressSerializer, self).__init__( *args,**kwargs)
        # self.Meta.depth = 1
        # 

class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRatings
        fields = '__all__'

    def __init__(self, *args,**kwargs):
        super(ProductRatingSerializer, self).__init__( *args,**kwargs)
        self.Meta.depth = 1      


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['title', 'detail']

    def __init__(self, *args,**kwargs):
        super(CategorySerializer, self).__init__( *args,**kwargs)
        # self.Meta.depth = 1    

class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = ['id','title', 'detail']  

    def __init__(self, *args,**kwargs):
        super(CategoryDetailSerializer, self).__init__( *args,**kwargs)
        # self.Meta.depth = 1           