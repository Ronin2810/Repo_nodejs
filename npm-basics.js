// NPM (Node Package Manager)
// gives us modules/packages/dependencies which are nothing but sharable pieces of code

// npm -global 
// npm --version

// npm local dependency - use it only in this particular project    
// npm i <packageName>


// npm global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName>

// package.json - manifest file (sores important info about project/package) 
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


// After this try :
// $ npm i loadash
// $ npm i bootstrap 
// and check the changes in package.json and the file system

const lodash_pkg = require('lodash')
items = [1,[2,[3]]]
new_items = lodash_pkg.flattenDeep(items)
console.log(new_items);