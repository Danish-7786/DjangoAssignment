from django.urls import path
from .views import SignupView, LoginView, LogoutView, ProfileView # Import correct views
from .views import ForgetPassword
urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),  # Use class-based view with .as_view()
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('forget-password/', ForgetPassword, name='forgetPassword'),
     path('profile/', ProfileView.as_view(), name='profile'), 
   


    
]
