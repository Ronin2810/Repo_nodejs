os = require('os')

// info about user
const user = os.userInfo()
console.log(user);

// returning system uptime in seconds
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS);