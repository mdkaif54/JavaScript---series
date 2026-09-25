const score = 60
// console.log(score);

const amount = new Number(861)
// console.log(amount);

// console.log(typeof score)
// console.log(typeof amount);

// console.log(amount.toString()) // typeConversion to String Now String prototypes can be applied on it
// console.log(amount.toFixed(2)) // adds no. of SignificantDigits


const num = 863.7513
// console.log(num.toPrecision(2)) // 8.6e+2
// console.log(num.toPrecision(3)) // 864
// console.log(num.toPrecision(4)) // 863.8
// console.log(typeof num.toPrecision(5)) // 863.75
// toPrecision returns a String containing a number


const balance = 1000000
console.log(balance.toLocaleString('en-US'))

// const other = Intl.DateTimeFormat().resolvedOptions().locale // to check the runtime's internationalization API configuration
// console.log(other)

// console.log(Math.abs(-30))
// console.log(Math.round(75.13))

// console.log(Math.floor(87.9))
// console.log(Math.ceil(98.1))

// console.log(Math.min(34, 45, 3254,  6, 2))
// console.log(Math.max(34, 45, 3254,  6, 2))

// console.log(Math.random()) // returns between 0 and 1

// console.log((Math.random()*10 + 1))  // add 1 to avoide zero CASE

//better  readability

const max = 100
const min = 1

console.log(Math.floor(((Math.random()) * (max - min + 1)) + (min)))