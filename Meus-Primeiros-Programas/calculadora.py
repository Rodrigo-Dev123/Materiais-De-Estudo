while True:
    numero1 = input('Digite o primreiro número: ')
    operador = input('Digite o operador: ')
    numero2 = input('Digite o segundo número: ')

    numeros_validos = None
    operadores_validos = '/+-*'

    try:
        f_numero1 = float(numero1)
        f_numero2 = float(numero2)
        numeros_validos = True
    except:
        numeros_validos = None
        print('Este não é um número válido!')
        if numeros_validos is None:
            continue
    if operador not in operadores_validos:
        print('Este não é um operador válido ')
        continue

    if operador == '/':
        print(f'O resultado é', f_numero1 / f_numero2)

    elif operador == '+':
        print(f'O resultado é', f_numero1 + f_numero2)

    elif operador == '-':
        print(f'O resultado é', f_numero1 - f_numero2)

    elif operador == '*':
        print(f'O resultado é', f_numero1 * f_numero2)

    sair = input('Quer sair? [s]im: ').lower().startswith('s')
    if sair:
        break
