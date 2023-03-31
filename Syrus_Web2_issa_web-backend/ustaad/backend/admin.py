from django.contrib import admin

# Register your models here.

from .models import Courses, Quiz, StudyMaterial
admin.site.register(Courses)
admin.site.register(Quiz)
# admin.site.register(Category)
admin.site.register(StudyMaterial)