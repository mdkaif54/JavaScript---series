// console.log(2 > 2)
// console.log(2 < 2)
// console.log(2 >= 2)
// console.log(2 <= 2)
// console.log(2 == 2)
// console.log(2 === 2)

// console.log("2" > 2)
// console.log("2" < 2)
// console.log("2" >= 2)
// console.log("2" <= 2)
// console.log("2" == 2)
// console.log("2" === 2)


// console.log(null == 3)
// console.log(null >= 3)       == & ">= <= < >" works differently - It converts null into numbers
// console.log(null <= 3)


// console.log(undefined == 3)
// console.log(undefined >= 3)
// console.log(undefined <= 3)


//  Primitive types: Number String Boolean BigInt Symbol undefined null
const numberValue = 34
const stringValue = "Thirty four"
const boolValue = true
const symbolValue0 = Symbol('thirty')
const symbolValue1 = Symbol('thirty')
const nullValue = null
const undefinedValue = undefined

//  console.log(typeof (numberValue))
//  console.log(typeof (stringValue)) 
//  console.log(typeof (boolValue))
//  console.log(typeof (symbolValue0))
//  console.log(typeof (symbolValue1))
//  console.log(typeof (nullValue))
//  console.log(typeof (undefinedValue))


//  Non-Primitive types: Array, Object, Function

const pokedex = ['pikachu', 'charlizard', 'snorlax']

let someObject = {
    name: "Raichu",
    height: 3,
    master: "Ash"
}

let user = function() {
    console.log(isLoggedIn = true)
}


console.log(typeof(pokedex))
console.log(typeof(someObject))
console.log(typeof(user))