from django.db import models

# Create your models here.


class Ingredient(models.Model):
    name = models.CharField(max_length=200)
    amount = models.SmallIntegerField()

    def __str__(self) -> str:
        return self.name


class Recipe(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=400)
    imagePath = models.CharField(max_length=1000)
    ingredients = models.ManyToManyField(Ingredient)

    def __str__(self) -> str:
        return self.name
