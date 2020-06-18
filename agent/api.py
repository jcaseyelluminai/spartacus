from .models import Message
from django.contrib.auth import get_user_model
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import MessageSerializer
from knox.auth import TokenAuthentication
import requests
import json


# Message Viewset


class MessageViewSet(viewsets.ModelViewSet):

    authentication_classes = (TokenAuthentication,)

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = MessageSerializer

    def get_queryset(self):
        return self.request.user.messages.all()

    def create(self, request):

        user = get_user_model().objects.get(pk=request.data['user'])

        messages = request.data['content']

        r = requests.post('https://sparticusdemo.herokuapp.com/webhooks/rest/webhook', data=json.dumps({
            "sender": user.username,
            "message": messages
        }))

        print(r.text)

        response_data = json.loads(r.text)

        print(response_data)

        if response_data:
            reply = response_data[0]['text']
            # reply = response
        else:
            reply = 'I did not understand that'

        messages = [
            request.data,
            {
                'user': request.data['user'],
                'content': reply,
                'is_bot_reply': True
            }

        ]
        serializer = MessageSerializer(data=messages, many=True)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)
