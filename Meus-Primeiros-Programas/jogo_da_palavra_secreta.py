palavra_secreta = 'felicidade'
letras_acertadas = ''
palavra_final = ''
tentativas = 0

while True:
    letra_do_usuario = input('Digite uma letra: ').lower()
    tentativas += 1

    if len(letra_do_usuario) > 1:
        print('Digite somente uma letra!')
        continue

    if letra_do_usuario in palavra_secreta:
        letras_acertadas += letra_do_usuario

    for letra in palavra_secreta:
        if letra in letras_acertadas:
            palavra_final += letra
        else:
            palavra_final += '*'

    if palavra_final == palavra_secreta:
        print('PARABÉNS VOCÊ ACERTOU!!!')
        print(f'A palavra era "{palavra_secreta}"')
        letras_acertadas = ''
        tentativas = 0
        palavra_final = ''
        break

    print(palavra_final)
    print(f'Você tentou {tentativas}x')
    palavra_final = ''
