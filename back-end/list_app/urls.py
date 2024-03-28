from django.urls import path,include
from .views import All_lists, A_list

urlpatterns = [
    path('', All_lists.as_view()),
    path("<int:list_id>/", A_list.as_view()),
    path("<int:list_id>/tasks/", include("task_app.urls")),
]