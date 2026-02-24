const http = require('http');
const fs = require('fs');
const path = require('path');

const servidor = http.createServer((req, res) => {

    console.log(`Requisição recebida: ${req.method} ${req.url}`);

    // Página inicial
    if (req.url === "/" && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Página inicial");
    } 
    
    // Página de usuários
    else if (req.url === "/usuarios") {

        if (req.method === 'GET') {
            // Caminho absoluto para o arquivo HTML
            const arquivoHTML = path.join(__dirname, 'lista-usuarios.html');

            fs.readFile(arquivoHTML, (erro, dados) => {
                if (erro) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Erro ao carregar o arquivo de usuários');
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(dados);
            });
        } 
        
        else if (req.method === 'POST') {
            // Aqui você poderia processar dados do POST
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Usuário criado");
        }

        else {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Método não permitido');
        }
    }

    // Qualquer outra rota
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }

});

const PORTA = 3000;
servidor.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});