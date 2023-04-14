from django.urls import path, include
from pages import views

app_name = 'pages'

urlpatterns = [
    path('blog/', include('blog.urls', namespace='blog'), name='blog'),
    path('about/', views.AboutPageTemplateView.as_view(), name='about'),
    path('', views.HomePageTemplateView.as_view(), name='home'),
]
