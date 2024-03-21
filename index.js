/* let i = 0;

while (i < 1000000000) {
    i ++;
}

/* for (let i = 0; i < 1000000000; i++ ) {
    console.log(i)
}

console.log(i); */

let i = 0
let start = Date.now()

while (i < 10000000000) {
  i += 2
  console.log(i)
}
let end = Date.now()
let delta = end - start

console.log(`delta: ${delta} ms`);