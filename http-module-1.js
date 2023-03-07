const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("You are at the homepage");
  } else if (req.url === "/about") {
    res.end("You are at the about page");
  } else {
    res.end(`
        <h1>OOPS! There was some error</h1>
        <a href='/'>Go back to home</a>
        `);
  }
});

server.listen(5000);

