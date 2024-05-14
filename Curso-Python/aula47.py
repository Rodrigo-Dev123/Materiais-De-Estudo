palavra_secreta = 'perfume'
letras_acertadas = ''

while True:
    letras_digitada = input('Digite uma letra: ')

    if len(letras_digitada) > 1:
        print('Digite apenas uma letra.')
        continue

    if letras_digitada in palavra_secreta:
        letras_acertadas += letras_digitada

    for letra_secreta in palavra_secreta:
        if letra_secreta in letras_acertadas:
            print(letra_secreta)
        else:
            print('*')

    if letras_acertadas == palavra_secreta:
        print('Você acertou!!!')
        break
    print(letras_acertadas)