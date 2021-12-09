from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import serializers
from . import models


class CircleList(APIView):
    def get(self, request, format=None):
        queryset = models.Circle.objects.all()
        serializer = serializers.CircleSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = serializers.CircleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CircleDetail(APIView):
    def delete(self, request, pk, format=None):
        obj = models.Circle.objects.get(pk=pk)
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

