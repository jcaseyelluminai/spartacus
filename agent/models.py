from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Message(models.Model):
    user = models.ForeignKey(User, related_name='messages', on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    is_bot_reply = models.BooleanField(null=False, default=False)

    def __str__(self):
        return self.content

    def last_10_messages():
        return Message.objects.order_by('-timestamp').all()[:10]