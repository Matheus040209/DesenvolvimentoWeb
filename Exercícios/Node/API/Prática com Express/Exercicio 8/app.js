const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

const livros = [];
let contadorId = 1;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Nome do sistema: Sistema foda<br>Criador: Matheus Spilmam');
});

// LISTAR TODOS OS LIVROS
app.get('/livros', (req, res) => {
  res.json(livros);
});

// CRIAR NOVO LIVRO
app.post('/livros', (req, res) => {
  const novoLivro = {
    id: contadorId++,
    ...req.body
  };

  livros.push(novoLivro);

  res.status(201).json(novoLivro);
});

// BUSCAR LIVRO POR ID
app.get('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const livro = livros.find(l => l.id === id);

  if (!livro) {
    return res.status(404).send("Livro não encontrado");
  }

  res.json(livro);
});

// ATUALIZAR LIVRO
app.put('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = livros.findIndex(l => l.id === id);

  if (index === -1) {
    return res.status(404).send("Livro não encontrado");
  }

  livros[index] = {
    id: livros[index].id,
    ...req.body
  };

  res.json(livros[index]);
});

// DELETAR LIVRO
app.delete('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = livros.findIndex(l => l.id === id);

  if (index === -1) {
    return res.status(404).send("Livro não encontrado");
  }

  const livroRemovido = livros.splice(index, 1)[0];

  res.json({
    mensagem: "Livro deletado com sucesso",
    livro: livroRemovido
  });
});