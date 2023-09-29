import random

for _ in range(100):
    nove_digitos = ''
    contagem_regressiva = 10

    # calculo do primeiro dígito do CPF:
    for i in range(9):
        nove_digitos += str(random.randint(0, 9))

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
    # calculo do segundo do CPF:
    dez_digitos = nove_digitos + str(resultado)
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
