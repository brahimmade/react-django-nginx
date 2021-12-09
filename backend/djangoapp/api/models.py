from django.db import models


class Circle(models.Model):
    x = models.IntegerField(default=0)
    y = models.IntegerField(default=0)
    diameter = models.IntegerField(default=50)
    color = models.CharField(max_length=7, default='#000000')
    
    def __str__(self):
        return str(self.diameter)

# Create your models here.
