const http = require("http");

http.createServer((req,res) => {
    res.end("Servidor activo")
}).listen(3000,() => console.log("Servidor activo http://localhost:3000"))