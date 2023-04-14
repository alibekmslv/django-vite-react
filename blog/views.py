from django.shortcuts import render
from django.views import generic
from blog.models import Post


class BlogListView(generic.ListView):
    model = Post
