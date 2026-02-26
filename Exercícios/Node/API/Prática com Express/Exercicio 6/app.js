const express = require("express")
const app = express();

app.use(express.json());

const PORT = 3000;

const produtos = [];
let contadorId = 1;

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

  const novoProduto = {
    id: contadorId++,
    ...req.body
  };

  produtos.push(novoProduto);

  res.status(201).json(novoProduto);
});

app.get('/produtos/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).send("Produto não encontrado");
  }

  
  res.json(produto);
});

app.put('/produtos/:id', (req, res) => {

    const id = parseInt(req.params.id);
  
    const index = produtos.findIndex(p => p.id === id);
  
    if (index === -1) {
      return res.status(404).send("Produto não encontrado");
    }
  
    produtos[index] = {
      id: produtos[index].id,
      ...req.body
    };
  
    res.json(produtos[index]);
  });

  app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
  
    const index = produtos.findIndex(p => p.id === id);
  
    if (index === -1) {
      return res.status(404).send("Produto não encontrado");
    }
  
    // Remove o produto do array
    const produtoRemovido = produtos.splice(index, 1)[0];
  
    res.json({
      mensagem: "Produto deletado com sucesso",
      produto: produtoRemovido
    });
  });