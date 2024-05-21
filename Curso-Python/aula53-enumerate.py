lista = ['Maria', 'Helena', 'Rodrigo']
lista.append('João')

""" lista_enumerada = list(enumerate(lista))

print(lista_enumerada) """

""" for item in enumerate(lista):
    indice, nome = item
    print(indice, nome) """

for indice, nome in enumerate(lista):
    print(indice, nome)