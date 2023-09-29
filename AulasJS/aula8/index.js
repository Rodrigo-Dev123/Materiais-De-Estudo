const nome = 'Rodrigo Ramos';
const sobrenome = 'Oliveira';
const idade = 20;
const peso = 74;
const altura = 1.84;
const anoAtual = 2023
let imc = peso / (altura * altura);
let anoNascimento = anoAtual - idade;

/*console.log(nome, 'tem', idade, 'anos,', 'pesa', peso, 'kg', 'tem', altura, 'de altura', 'e seu imc é de', imc, nome, 'nasceu em', anoNascimento);*/
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura, e seu imc é de ${imc}. ${nome} nasceu em ${anoNascimento}.`);