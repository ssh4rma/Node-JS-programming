const http = require("http");
const hostname = "127.0.0.1";
const port = 8000;

//create HTTP server
const server = http.createServer(function (req, res) {
  res.writeHead(2000, {"Content-Type": "text/plain"});
  res.end("Hello World this is shubham\n"); 
});

//print when server starts listening
server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 