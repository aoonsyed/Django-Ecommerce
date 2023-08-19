from . import serializers
from rest_framework import generics,viewsets
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password
import json
import stripe
from django.conf  import settings

class VendorList(generics.ListCreateAPIView):
    queryset = Vendor.objects.all()
    serializer_class = serializers.VendorSerializer

class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vendor.objects.all()
    serializer_class = serializers.VendorSerializer

class ProductList(generics.ListCreateAPIView):
    # print('in product list')
    queryset = Product.objects.all()
    # print('queryset', queryset)
    serializer_class = serializers.ProductListSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = serializers.ProductDetailSerializer


class CustomerList(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = serializers.CustomerSerializer


class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = serializers.CustomerSerializer


class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = serializers.OrderSerializer


class OrderDetail(generics.ListCreateAPIView):
    # queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderDetailSerializer

    def get_queryset(self):
       order_id = self.kwargs['pk']
       order = Order.objects.get(id= order_id)
       order_items = Order.objects.filter(order=order)
       return order_items
    
class CustomerAddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CustomerAddressSerializer
    queryset = CustomerAddress.objects.all()

class ProductRatingViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProductRatingSerializer
    queryset = ProductRatings.objects.all()


class CategoryList(generics.ListCreateAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = serializers.CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = serializers.CategorySerializer


class LoginApi(APIView):
    def post(self, request):
        try:
            email = request.data.get('email')
            password = request.data.get('password')
            if user_obj := User.objects.filter(username=email).first():
                print('in user object', user_obj)
                if password:
                    if check_password(password, user_obj.password):
                        # token, created = Token.objects.get_or_create(user=user_obj)
                        # profile_qs = Profile.objects.filter(user=user_obj).first()
                        context = {
                            'username': user_obj.username,
                            'user_id': user_obj.id
                           
                        }
                        return Response({'success': True, 'message': 'Login Success', 'data': context})
                    return Response({'success': False, 'message': "Incorrect password. Try different or forgot password.", 'data': None})
            return Response({'success': False, 'message': "User email not found. Try Signup", 'data': None})
        except Exception as e:
            return Response({'success': False, 'message': 'Something went wrong', 'data': None})
        

class RegisterApi(APIView):
    def post(self, request):
        try:
            username = request.data.get('username')    
            email = request.data.get('email')    
            password = request.data.get('password')

            new_user = User(username=username, email=email, password=password)
            new_user.save()  # Save the user instance to the database
            
            context = {
                            "username": new_user.username,
                            "user_id": new_user.id,
                            "email": new_user.email,
                            "password": new_user.password
                    }
            print('after context')
            context = json.dumps(context)
            return Response({'success': True, 'message': 'Register Success', 'data': context})
        except Exception as e:
            return Response({'success': False, 'message': 'Something went wrong', 'data': None})
        


stripe.api_key = settings.STRIPE_SECRET_KEY


class StripeCheckOut(APIView):
    def post(self ,request):
        try:
            checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    'price': '{{PRICE_ID}}',
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '?success=true',
            cancel_url=YOUR_DOMAIN + '?canceled=true',
        )
        except Exception as e:
            return str(e)

    
