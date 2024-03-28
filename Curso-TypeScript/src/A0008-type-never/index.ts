/* O never é quando a função lança um erro e não retorna nada ou
quando trava aplicação com um loop infinito sem nenhum retorno */
function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
