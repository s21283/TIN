const http = require('http');
//var lib = require("./string_lib.js");
const server = http.createServer(function (req, response) {
  console.log("server is running");
  if (req.url === "/home") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    lib.string_1();
  } else if (req.url === "run") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    lib.string_2();
  } else {
    response.writeHead(200, { "Content-Type": "text/plain" });
    lib.string_randomizer();
  }
});

server.listen(8080, "127.0.0.1");
console.log("server is running");
