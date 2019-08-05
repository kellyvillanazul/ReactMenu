from .models import Item
from rest_framework.serializers import ModelSerializer

class ItemSerializer(ModelSerializer):
    class Meta:
        model = Item
        fields = (
            'id',
            'name',
            'description',
            'price',
            'size',
            'image'
        )
