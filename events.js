const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}
const myEmiter = new MyEmitter();

myEmiter.on('event',()=>{
    console.log("an event occured");
    setTimeout(() => {
        console.log("timeout function");
    }, 3000);
})
myEmiter.emit('event')
// console.log("script ended");