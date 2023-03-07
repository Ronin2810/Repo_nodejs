// There is no actual window in server side programming 
// Global variables
// __dirname : path to current directory
// __filename: file name 
// require : function to use modules
// module: info about current module
// process: info about the environmentwhere the program is being executed

// two ways to run node: 
// REPL (read eval print loop) on terminal(node js shell)
// CLI (Command line interfaces) runing .js files on terminal

console.log("Directory Name: "+__dirname);
console.log("File Name: "+__filename);
function sayHI(name) {
    console.log(`Hello ${name}`)
}
sayHI('from tut1 file')
module.exports = sayHI