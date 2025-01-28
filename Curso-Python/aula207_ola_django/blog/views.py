
from django.shortcuts import render
from blog.data import posts
from typing import Any
from django.http import HttpResponse, Http404

def blog(request):
    
    print('blog')

    context = {
        'text': 'Estamos no Blog',
        'posts': posts
    }
    return render(
        request,
        'blog/index.html',
        context
    )

def post(request: HttpResponse, post_id: int):
    found_post: dict[str, Any] | None = None
    for post in posts:
        if post['id'] == post_id:
            found_post = post
            break

    if found_post is None:
        raise Http404('Post não encontrado')

    context = {
        'post': found_post,
        "title": found_post['title']
    }
    return render(
        request,
        'blog/post.html',
        context
    )

def exemplo(request):
    print('exemplo')

    context = {
        'text': 'Estamos no Exemplo'
    }
    return render(
        request,
        'blog/exemplo.html',
        context
    )
