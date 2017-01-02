from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User

def index(request):
    return JsonResponse({'success':True})
