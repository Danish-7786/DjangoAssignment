from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User

class EmailOrUsernameModelBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            # Check if the username is an email
            user = User.objects.get(email=username)
        except User.DoesNotExist:
            # If not an email, try using it as a username
            try:
                user = User.objects.get(username=username)
            except User.DoesNotExist:
                return None
        
        # Check password and return user if valid
        if user.check_password(password):
            return user
        return None
