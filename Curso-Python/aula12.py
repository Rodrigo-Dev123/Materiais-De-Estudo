nome = 'Rodrigo'
altura = 1.84
peso = 70
imc = ...

def calculate_imc(altura, peso, nome):
    imc = peso // altura ** 2
    return f"{nome} tem o IMC: {imc}"

imc = calculate_imc(altura, peso, nome)

print(imc)