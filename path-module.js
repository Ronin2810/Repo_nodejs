let path = require('path')

// return platform specific separator ,here '\'
console.log(path.sep)

filepath = path.join('/content','subfolder','file.txt')
console.log(filepath);

basename = path.basename(filepath)
console.log(basename);

absolute = path.resolve(__dirname,'content','subfolder','file.txt')
console.log(absolute)