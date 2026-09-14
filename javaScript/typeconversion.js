let score = false
// console.log(typeof(score)) // string
// console.log(score);


let markInNumbers = Number(score)
// console.log(typeof(markInNumbers)) // number

// console.log(markInNumbers) // Not a Number - NaN


// valueinstring          ->  "21" : 21            dt: number
// valueinAlphanumeric    ->  "21abc" : NaN        dt: number
// valueinBoolean         ->   true: 1/ false: 0   dt: number
// value(null)            ->   null: NaN           dt: number
// value(undefined)       ->  undefined: NaN       dt: number

let value = 1

let valueInBoolean = Boolean(value)   // 1: true; 0: false

// console.log(valueInBoolean)           // - true
// console.log(typeof(valueInBoolean)); // - boolean

let numbers = 99

let stringNumber = String(numbers)

console.log(stringNumber)
console.log(typeof stringNumber)



let stringValue = ""

let stringToBoolean = Boolean(stringValue)

console.log(stringToBoolean)

console.log(typeof stringToBoolean)


// empty string "" : false
// string vale "cofee" : true