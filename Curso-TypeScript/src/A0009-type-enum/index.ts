enum Cores {
  VERMELHO = 10, // 10
}

enum Cores {
  AZUL = 100, // 100
  AMARELO = 200, // 200
  ROXO = 'ROXO',
}

// console.log(Cores);
// console.log(Cores[2]);
// console.log(Cores.ROXO);

function escolhaAcor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaAcor(1234567);
