# Create your models here.
from django.db import models
from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone
import os
# Create your models here.
class Courses(models.Model):
    # user = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    number = models.CharField(null=True, blank =True, max_length=10)
    description = models.TextField()
    videofile= models.FileField(upload_to='coursevideos/', null=False)
    created_at = models.DateTimeField(default=timezone.now)
    thumbnail = models.ImageField(null=True,blank=True,upload_to = 'coursethumbnail/')
    
    def _str_(self):
        return self.title



# class Category(models.Model):
#     category = [
#         ('maths', 'maths'),
#         ('science', 'science'),
#     ]
#     category = models.CharField(max_length=10, choices = category, default = 'general')

    
#     def _str_(self):
#         return self.category


class Quiz(models.Model):
    question = models.TextField()
    option_one = models.CharField(max_length=30)
    option_two = models.CharField(max_length=30)
    option_three = models.CharField(max_length=30)
    option_four = models.CharField(max_length=30)
    one_iscorrect = models.BooleanField(default=False)
    two_iscorrect = models.BooleanField(default=False)
    three_iscorrect = models.BooleanField(default=False)
    four_iscorrect = models.BooleanField(default=False)
    category = models.CharField(max_length=10, default = 'general')

        
    def _str_(self):
        return self.category
    

class StudyMaterial(models.Model):
    file = models.FileField(upload_to ='uploads/')

    def _str_(self):
        return os.path.basename(self.file.name)