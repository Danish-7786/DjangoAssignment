from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view
from .serializers import SignupSerializer, LoginSerializer
from .utils import send_mail_to_client
from django.conf import settings
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator

# Profile view

class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        data = {
            'username': user.username,
            'email': user.email,
            'date_joined': user.date_joined,
            'last_login': user.last_login
        }
        return Response(data)
    

# Signup View

class SignupView(APIView):
    def post(self, request):
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Login View
class LoginView(APIView):
    def post(self, request):
        username_or_email = request.data.get('username')  # Can be username or email
        password = request.data.get('password')

        # Use the custom backend to authenticate with either username or email
        user = authenticate(request, username=username_or_email, password=password)

        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': LoginSerializer(user).data
            })
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# Logout View
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data.get('refresh')
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({'message': 'Logged out successfully'}, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
# views.py



@api_view(['POST'])
def ForgetPassword(request):
    email = request.data.get("email")
    print("email:", email)
    
    if User.objects.filter(email=email).exists():
        print("User Exists")
        user = User.objects.get(email=email)
        
        # Generate a unique token and encode the user's ID
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = default_token_generator.make_token(user)

        # Create the reset link
        reset_link = f"http://127.0.0.1:8000/auth/reset-password/{uid}/{token}/"
        
        # Create the email message
        message = f"Hi {user.username},\n\nTo reset your password, click the link below:\n{reset_link}\n\nThank you!"
        
        send_mail_to_client("Reset Your Password", message, settings.EMAIL_HOST_USER, [email])
        
        return Response({'message': 'Password reset link sent to your email.'}, status=status.HTTP_205_RESET_CONTENT)
    
    return Response({'message': 'User does not exist.'}, status=status.HTTP_404_NOT_FOUND)


# def NewPasswordPage(request):

