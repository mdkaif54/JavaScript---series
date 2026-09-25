const name = "Rage"
const repoCnt = 67

// console.log(name + " has total of " + repoCnt + " repositories.");

// template string or string literal (string interpolation)
// console.log(`${name} has total of ${repoCnt} repositories.`)

const budsName = new String('GoBoult')
console.log(budsName.length)

// console.log(budsName.charAt(5))
// console.log(budsName.toUpperCase())
// console.log(budsName.toLowerCase())
// console.log(budsName.indexOf('l'));

const stringPart = budsName.substring(1, 5)     // if a > b , it will be swapped & 
// console.log(stringPart)                         // if either of 'em is -ve or NaN, will be treated as 0

const stringSlice = budsName.slice(-5,)        // if a > b -> returns ""
console.log(stringSlice);                       //If start is negative: sets char from the end of string, exactly like substr().
