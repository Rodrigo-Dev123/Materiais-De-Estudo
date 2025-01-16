
from django.shortcuts import render


def blog(request):
    print('blog')

    context = {
        'text': 'Estamos no Blog',
        'title': 'Esta é uma página de exemplo'
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
