from django.urls import path
from . import views

urlpatterns = [
    #path('', views.index, name='index'),
    #path('home/', views.home, name='home')
    path('home/', views.pTranslate, name='Translate'),
    path('home/book/', views.bookTranslate, name='bookTranslate'),
    path('home/login/', views.login, name='login'),
    path('home/logout/', views.logout, name='logout'),
    path('home/signup/', views.signup, name='signup'),
    path('home/profile.html', views.profile, name='profile')
]
