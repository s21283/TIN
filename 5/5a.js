const http = require('http');
const server = http.createServer(function (req, res) {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome home! ");
  } else if (req.url === "run") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Faster! ");
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("You are at: url=" + req.url);
  }
});

server.listen(8080);
console.log("server is running");
