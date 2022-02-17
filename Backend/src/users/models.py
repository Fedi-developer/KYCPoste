from django.db import models

from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Document(models.Model):

    passport = models.ImageField(null=True, blank=True, upload_to='src/users/documents/%y/%m/%d/')
    licence = models.ImageField(null=True, blank=True, upload_to='src/users/documents/%y/%m/%d/')
    card_face = models.ImageField(null=True, blank=True, upload_to='src/users/documents/%y/%m/%d/')
    card_back = models.ImageField(null=True, blank=True, upload_to='src/users/documents/%y/%m/%d/')


class Profile(models.Model):
    user = models.OneToOneField(User, null=False, primary_key=True, on_delete=models.CASCADE)
    phone = models.CharField(max_length=8, unique=True, null=False)
    date_of_Birth = models.DateField(null=False)
    address = models.CharField(max_length=50, null=False)
    city = models.CharField(max_length=30, null=False)
    state = models.CharField(max_length=30, null=False)
    postal_code = models.CharField(max_length=4, null=False)
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    document = models.OneToOneField(Document, related_name="profile", on_delete=models.CASCADE)

