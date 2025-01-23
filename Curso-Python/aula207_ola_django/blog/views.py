
from django.shortcuts import render
from blog.data import posts

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

def post(request, post_id):
    found_post = None
    for post in posts:
        if post['id'] == post_id:
            found_post = post
            break

    print('post')

    context = {
        'text': 'Estamos no Blog',
        'posts': [found_post]
    }
    return render(
        request,
        'blog/index.html',
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
