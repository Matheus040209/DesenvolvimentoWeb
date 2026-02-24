const http = require('http');

const servidor = http.createServer((req, res) => {

    console.log("URL:", req.url);
    console.log("Metodo:", req.method);

    res.end("Verifique o terminal");

});

servidor.listen(3000);