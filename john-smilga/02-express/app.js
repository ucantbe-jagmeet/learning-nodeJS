const http = require("http");

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h2>Home Page</h2>`);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h2>About Page</h2>`);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h2>Resource Not Found</h2>`);
    res.end();
  }
});

server.listen(5000);
// port is a communication end point
