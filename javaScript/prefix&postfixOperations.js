// ppostfix - first old value is returned then increment...
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`); // "x:4, y:3"

// prefix - first increment then new value is returned
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`); //"a:4, b:4"

