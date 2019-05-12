// write your code here
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World");
    res.end();
}).listen(8080);

console.log("Server is listening at http://localhost:8080/");