from django.urls import path
from .views import RegisterView, LoginView, UserView, LogoutView, DocView, ProfileView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('doc', DocView.as_view()),
    path('profile', ProfileView.as_view()),
]
