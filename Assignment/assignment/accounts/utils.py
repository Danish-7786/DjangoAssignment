from django.core.mail import send_mail
from django.conf import settings

def send_mail_to_client(subject,message,from_email,recipient_list):
    # subject = subject
    # message = "rest message"
    # from_email = settings.EMAIL_HOST_USER
    # recipient_list = ['danishkpathan.7786@gmail.com']
    
    send_mail(subject,message,from_email,recipient_list)