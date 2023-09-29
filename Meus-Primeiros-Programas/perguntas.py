
perguntas = [
    {
        'pergunta': 'quanto é 1 x 0?',
        'opções': ['1', '2', '0', '3'],
        'resposta': '0'
    },
    {
        'pergunta': 'quanto é -2 + 4?',
        'opções': ['2', '5', '3', '4'],
        'resposta': '2'
    },
]
vezes_acertadas = 0
for pergunta in perguntas:
    print('Pergunta:', pergunta['pergunta'])
    print()

    for i, opçao in enumerate(pergunta['opções']):
        print(f'{i})', opçao)
    print()

    opçoes = pergunta['opções']
    acertou = None
    escolha = None

    escolha = input('Escolha um índice: ')

    if escolha.isdigit():
        escolha_int = int(escolha)

    if escolha is not None:
        if opçoes[escolha_int] == pergunta['resposta']:
            acertou = True
    if acertou:
        print('Acertou👍')

        vezes_acertadas += 1
    else:
        print('Errou❌')

    print(f'Acertou {vezes_acertadas}x')
    print(f'de {len(perguntas)} perguntas!')
