const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {

    if(req.url === "/") {

        fs.readFile('index.html', (erro, dados) => {
            res.end(dados);
        });

    }

    else if(req.url === "/sobre") {

        fs.readFile('sobre.html', (erro, dados) => {
            res.end(dados);
        });

    }

    else if(req.url === "/contato") {

        fs.readFile('contato.html', (erro, dados) => {
            res.end(dados);
        });

    }

});

servidor.listen(3000);