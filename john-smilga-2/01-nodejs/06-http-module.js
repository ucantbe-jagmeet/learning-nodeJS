const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to our home page! hurray");
  }
  if (req.url === "/about") {
    return res.end("Here is our short story");
  }

  return res.end(`
    <h1>OOps!</h1>
    <p>We cant find page</p>
    <a href='/'>back home</a>
    `);
});

server.listen(5000);
