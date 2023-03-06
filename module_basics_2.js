let names = require('./module_basics_3')
let fun1 = require('./module_basics_1')
// console.log(names)

let keys = Object.keys(names)

for(let i=0;i<keys.length;i++){
    fun1(keys[i])
}