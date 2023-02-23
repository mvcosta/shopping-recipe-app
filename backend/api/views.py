from rest_framework.views import APIView
from .serializers import RecipeSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import Recipe, Ingredient
# Create your views here.

class RecipeList(APIView):
    def get(self, request):
        queryset = Recipe.objects.all()
        serializer = RecipeSerializer(queryset, many=True)
        return Response(serializer.data)

    def put(self, request):
        Recipe.objects.all().delete()
        Ingredient.objects.all().delete()
        
        serializer = RecipeSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

