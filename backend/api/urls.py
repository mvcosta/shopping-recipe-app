from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path("", views.RecipeList.as_view(), name="recipes"),
    path("auth/", obtain_auth_token),
]