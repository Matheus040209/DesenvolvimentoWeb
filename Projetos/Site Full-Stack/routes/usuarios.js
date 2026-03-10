const express = require("express");
const router = express.Router();

let usuarios = [];
let proximoId = 1;

router.get('/', (req, res) => {
    res.json(usuarios);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    res.json(usuario);
});

router.post('/', (req, res) => {
    const { nome, idade, email } = req.body;

    if (!nome || nome.trim() === "") {
        return res.status(400).json({ erro: "Nome não pode ser vazio" });
    }

    if (!email || email.trim() === "") {
        return res.status(400).json({ erro: "Nome não pode ser vazio" });
    }

    if (!email.includes("@")){
        return res.status(400).json({ erro: "Email inválido" });

    }
    
    if (nome.trim().length < 3){
        return res.status(400).json({ erro: "Nome deve conter no minimo 3 caracteres" });
    }

    if(idade<0){
        return res.status(400).json({ erro: "Idade deve ser maior que 0" });
    }

    if (idade>120){
        return res.status(400).json({ erro: "Idade deve ser menor que 120" });
    }

    

    const novoUsuario = {
        id: proximoId++,
        nome,
        email,
        idade
    };

    usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
});

router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const { nome, idade, email } = req.body;

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    usuario.nome = nome ?? usuario.nome;
    usuario.idade = idade ?? usuario.idade;
    usuario.idade = email ?? usuario.email;


    res.json(usuario);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = usuarios.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    usuarios.splice(index, 1);

    res.status(204).send();
});

module.exports = router;