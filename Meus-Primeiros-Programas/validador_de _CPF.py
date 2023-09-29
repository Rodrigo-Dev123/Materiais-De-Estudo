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
# calculo do primeiro dígito do CPF:
cpf = input('Digite o CPF sem o ponto e o traço: ')
contagem_regressiva = 10
nove_digitos = cpf[:9]
somador = 0

for digito in nove_digitos:
    multiplicador = int(digito) * contagem_regressiva
    somador += multiplicador
    contagem_regressiva -= 1
calculo = (somador * 10) % 11

if calculo > 9:
    resultado = 0
else:
    resultado = calculo

"""
Calculo do segundo dígito do CPF
CPF: 746.824.890-70
Colete a soma dos 9 primeiros dígitos do CPF,
MAIS O PRIMEIRO DIGITO,
multiplicando cada um dos valores por uma
contagem regressiva começando de 11
Ex.:  746.824.890-70 (7468248907)
   11 10  9  8  7  6  5  4  3  2
*  7   4  6  8  2  4  8  9  0  7 <-- PRIMEIRO DIGITO
   77 40 54 64 14 24 40 36  0 14
Somar todos os resultados:
77+40+54+64+14+24+40+36+0+14 = 363
Multiplicar o resultado anterior por 10
363 * 10 = 3630
Obter o resto da divisão da conta anterior por 11
3630 % 11 = 0
Se o resultado anterior for maior que 9:
    resultado é 0
contrário disso:
    resultado é o valor da conta
O segundo dígito do CPF é 0
"""
# calculo do segundo do CPF:
dez_digitos = cpf[:10]
contagem_regressiva_2 = 11
somador_2 = 0

for digito_2 in dez_digitos:
    multiplicador_2 = int(digito_2) * contagem_regressiva_2
    somador_2 += multiplicador_2
    calculo_2 = (somador_2 * 10) % 11
    contagem_regressiva_2 -= 1
if calculo_2 > 9:
    resultado_2 = 0
else:
    resultado_2 = calculo_2

cpf_calculado = f'{nove_digitos}{resultado}{resultado_2}'
print(cpf_calculado)

if cpf_calculado == cpf:
    print(f'O CPF {cpf} é válido.')
else:
    print('CPF inválido!')
