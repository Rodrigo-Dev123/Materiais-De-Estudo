"""
Faça uma lista de comprar com listas
O usuário deve ter a possibilidade de
inserir, apagar e listar valores da sua lista
Não permita que o programa quebre com 
erros de índices inexistentes na lista.
"""
import os

lista = []

while True:
    print('Selecione uma opção:')
    reposta_do_usuario = input('[i]nserir [a]pagar [l]istar e [s] para sair: ')

    if reposta_do_usuario.startswith('i'):
        os.system('cls')
        inseridor = input('Escreva o ítem que deseja inserir: ')
        lista.append(inseridor)

    elif reposta_do_usuario.startswith('a'):
        os.system('cls')
        try:
            indice_deletador = int(
                input('Digite o índice que deseja apagar: '))
            del lista[indice_deletador]
        except IndexError:
            print('Este índice não corresponde à nenhum ítem da lista!')
        except ValueError:
            print('Digite um número válido!')

    elif reposta_do_usuario.startswith('l'):
        os.system('cls')
        for indice in enumerate(lista):
            print(indice)
        if len(lista) == 0:
            print('A lista está vazia!')

    elif reposta_do_usuario.startswith('s'):
        break
