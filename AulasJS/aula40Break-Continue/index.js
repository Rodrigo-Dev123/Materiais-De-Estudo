const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// Continua para a próxima iteração
// Break sai do laço

let i = 0;
do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('pulei o número');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i++;
        break;
    }

    i++;
} while (i < numeros.length)










/* for (numero of numeros) {
    
    if (numero === 3) {
        console.log('Pulei o número 3');
        continue
    }
    
    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }   
    
    console.log(numero);
} */