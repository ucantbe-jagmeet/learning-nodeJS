const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("content-Type", "text/html");
  res.end("<h1>This is NodeJs Tutorial</h1> ");
});

server.listen(port, () => {
  console.log(` Server is Listening on ${port}`);
});
