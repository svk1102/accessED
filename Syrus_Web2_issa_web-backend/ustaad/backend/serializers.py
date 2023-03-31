from unicodedata import category
from django.contrib.auth.models import User
from django.db.models import fields
from rest_framework import serializers
from .models import Courses, Quiz, StudyMaterial

class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields ='__all__'


class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyMaterial
        fields ='__all__'

# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields =['category']

class QuizSerializer(serializers.ModelSerializer):
    # category = CategorySerializer(read_only = True, many=True)
    class Meta:
        model = Quiz
        fields =['question','option_one','option_two','option_three','option_four','one_iscorrect','two_iscorrect','three_iscorrect','four_iscorrect','category']