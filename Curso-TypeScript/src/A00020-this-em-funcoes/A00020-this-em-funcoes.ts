// Maneira de tipar o THIS
export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

// O primeiro argumento é o this e o restante são os argumentos da função
funcao.call(new Date(), 'Rodrigo', 22);
funcao.apply(new Date(), ['Rodrigo', 30]);
