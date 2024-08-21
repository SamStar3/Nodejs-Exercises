console.log("Hello World")

const os = require('os')
const path = require('path')
const {add, sub, mul, div} = require('./math')
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.parse(__filename)) 

console.log(add(3,4))
console.log(sub(3,4))
console.log(mul(3,4))
console.log(div(3,4))