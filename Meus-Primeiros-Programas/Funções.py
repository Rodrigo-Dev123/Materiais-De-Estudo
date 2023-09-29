# Função para multplicar números:


def multiplicador(*args):
    total = 1
    for numero in args:
        total *= numero
    return total


resultado = multiplicador(1, 2, 3)
print(resultado)

# Função para verificar se o número é ímpar ou par:


def par_impar(numero):
    if numero % 2 == 0:
        return f'{numero} é Par'

    return f'{numero} é Ípar'


par_ou_impar = par_impar(17)
print(par_ou_impar)
