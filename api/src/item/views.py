from .serializer import ItemSerializer
from .models import Item
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class ItemListCreateAPIView(ListCreateAPIView):

    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    def post(self, request, *args, **kwargs):

        data = request.data

        item = Item.objects.create(
            name=data['name'],
            description=data['description'],
            price=data['price'],
            size=data['size'],
            image=request.FILES['image']
        )
        serializer = ItemSerializer(data=item)
        if serializer.is_valid():
            serializer.save()
        return Response(data=serializer.data, status=status.HTTP_200_OK)

class ItemRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):

    queryset = Item.objects.all()
    serializer_class = ItemSerializer
