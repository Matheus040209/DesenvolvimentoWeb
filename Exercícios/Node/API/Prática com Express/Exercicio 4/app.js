const express = require("express")
const app = express();

app.use(express.json());

const PORT = 3000;

const produtos = [];
let contadorId = 1; // controla o id automaticamente

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Nome do sistema: Sistema foda<br>Criador: Matheus Spilmam');
});

// LISTAR TODOS
app.get('/produtos', (req, res) => {
  res.json(produtos);
});

// CRIAR PRODUTO
app.post('/produtos', (req, res) => {

  const novoProduto = {
    id: contadorId++,   // gera id automático
    ...req.body
  };

  produtos.push(novoProduto);

  res.status(201).json(novoProduto);
});

// BUSCAR PRODUTO POR ID
app.get('/produtos/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).send("Produto não encontrado");
  }

  res.json(produto);
});