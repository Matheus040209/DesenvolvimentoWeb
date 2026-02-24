const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {

    if(req.url === "/") {
        fs.readFile('index.html', (erro, dados) => {

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(dados);
    
        });
    }else{
        res.end("<h1>Pagina nao encontrada</h1>");
    }
    

});

servidor.listen(3000);