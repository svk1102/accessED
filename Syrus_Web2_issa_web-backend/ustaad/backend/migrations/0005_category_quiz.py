# Generated by Django 4.1.7 on 2023-03-10 10:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_courses_thumbnail_alter_courses_videofile'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(choices=[('general', 'general'), ('maths', 'maths'), ('science', 'science'), ('english', 'english')], default='general', max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.TextField()),
                ('option_one', models.CharField(max_length=30)),
                ('option_two', models.CharField(max_length=30)),
                ('option_three', models.CharField(max_length=30)),
                ('option_four', models.CharField(max_length=30)),
                ('one_iscorrect', models.BooleanField(default=False)),
                ('two_iscorrect', models.BooleanField(default=False)),
                ('three_iscorrect', models.BooleanField(default=False)),
                ('four_iscorrect', models.BooleanField(default=False)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.category')),
            ],
        ),
    ]