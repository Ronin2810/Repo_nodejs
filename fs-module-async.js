const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result\n${first},${second}`,
      (err,result)=>{
          if (err) {
            console.log(err);
            return;
          }
          console.log(result)
      }
    );
  });
  console.log(result);
});


// Synchronous operations are blocking, which means that the code execution is paused until the operation is completed. For example, if you use the fs.readFileSync() method to read a file synchronously, the code will wait until the file is read before moving on to the next line of code. Synchronous operations are easier to write and understand but can cause performance issues when dealing with large files or when many operations are performed.

// Asynchronous operations, on the other hand, are non-blocking, which means that the code execution is not paused while the operation is in progress. Instead, a callback function is used to handle the result of the operation once it's completed. For example, if you use the fs.readFile() method to read a file asynchronously, the code will continue executing while the file is being read, and the callback function will be called once the file is read. Asynchronous operations are better for performance and scalability, especially when dealing with large files or multiple operations.