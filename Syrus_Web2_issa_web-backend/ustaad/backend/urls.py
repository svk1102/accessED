
from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('viewcourses/',views.viewCourse),
    path('viewquiz/',views.viewQuiz),
    path('createquiz/',views.createQuiz),
    path('createcourses/',views.createCourse),
    path('viewcoursesinfo/',views.viewCourseInfo),
    path('isl/',views.isl),
    path('uploadmaterials/',views.uploadMaterials),
    path('getmaterials/',views.getMaterials),

    # path('questcompletion/<str:pk>/',views.questCompletion),
]