const express = require("express")
const app = express();

app.use(express.json());

const PORT = 3000;

const produtos = [];

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
  
app.get('/', (req, res) => {
    res.send('Nome do sistema: Sistema foda<br>Criador: Matheus Spilmam');
  });

  app.get('/produtos', (req, res) => {
    res.json(produtos);
  });

  app.post('/produtos', (req, res) => {

    const produto = req.body;
  
    produtos.push(produto);
  
    res.status(201).json(produtos);
  
  });