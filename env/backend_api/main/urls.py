from django.urls import path
from rest_framework import routers
from . import views
router = routers.DefaultRouter()
router.register('address',views.CustomerAddressViewSet)
router.register('rating',views.ProductRatingViewSet)
urlpatterns = [
        path('vendors/', views.VendorList.as_view()),
        path('vendor/<int:pk>/', views.VendorDetail.as_view()),
        path('products/', views.ProductList.as_view()),
        path('product/<int:pk>/', views.ProductDetail.as_view()),
        path('categories/', views.CategoryList.as_view()),
        path('login/', views.LoginApi.as_view()),
        path('register/', views.RegisterApi.as_view()),
        path('category/<int:pk>/', views.CategoryDetail.as_view()),

        path('customers/', views.CustomerList.as_view()),
        path('customer/<int:pk>/', views.CustomerDetail.as_view()),
        path('orders/', views.OrderList.as_view()),
        path('order/<int:pk>/', views.OrderList.as_view()),

]
urlpatterns += router.urls
