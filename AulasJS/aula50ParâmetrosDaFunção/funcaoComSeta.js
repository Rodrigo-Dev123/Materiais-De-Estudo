const numeros = (...args) => {
//  console.log(arguments); Este tipo de funcao não tem (arguments).
    console.log(args);
}
numeros(1, 2, 3, 4, 5, 6, 7);