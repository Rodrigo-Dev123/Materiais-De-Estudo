import re

"""
Calculo do primeiro dígito do CPF
CPF: 746.824.890-70
Colete a soma dos 9 primeiros dígitos do CPF
multiplicando cada um dos valores por uma
contagem regressiva começando de 10

Ex.:  746.824.890-70 (746824890)
   10  9  8  7  6  5  4  3  2
*  7   4  6  8  2  4  8  9  0
   70  36 48 56 12 20 32 27 0

Somar todos os resultados: 
70+36+48+56+12+20+32+27+0 = 301
Multiplicar o resultado anterior por 10
301 * 10 = 3010
Obter o resto da divisão da conta anterior por 11
3010 % 11 = 7
Se o resultado anterior for maior que 9:
    resultado é 0
contrário disso:
    resultado é o valor da conta

O primeiro dígito do CPF é 7
"""

hard_cpf = '746.824.890-70'
cpf = ''.join(re.findall(r'\d', hard_cpf))
print(cpf)

contagem_regressiva = 10
numeros_somados = 0
for index in range(9):
    numeros_somados += int(cpf[index]) * contagem_regressiva
    contagem_regressiva -= 1
    print(numeros_somados)

numeros_somados *= 10


primeiro_digito =  0 if (numeros_somados % 11 == 7) > 9 else numeros_somados % 11

print(primeiro_digito)