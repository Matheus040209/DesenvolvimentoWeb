const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

const usuarios = [];

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('API funcionando!');
  });

  app.get('/usuarios', (req, res) => {
    res.json(usuarios);
  });

  app.post('/usuarios', (req, res) => {

    const usuario = req.body;
  
    usuarios.push(usuario);
  
    res.status(201).json(usuario);
  
  });