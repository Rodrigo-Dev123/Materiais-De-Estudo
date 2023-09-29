const pessoas = [
    { id: 3, nome: 'Luíz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'},

];


/* 
const novasPessoas = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa};
} 
*/

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id,  { ...pessoa});
} 

novasPessoas.delete(2);
console.log(novasPessoas);




// console.log(novasPessoas.get(1));

/* 
for(const pessoas of novasPessoas.values()) {
    console.log(pessoas);
} 
*/