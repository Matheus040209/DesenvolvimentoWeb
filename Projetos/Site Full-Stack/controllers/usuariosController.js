const usuariosService = require("../services/usuariosService");

async function listarUsuarios(req, res) {

    const usuarios = await usuariosService.listarUsuarios();


    res.json(usuarios);

}

async function buscarUsuarioId(req, res) {

    const id = Number(req.params.id);

    const usuario = await usuariosService.buscarUsuarioPorId(id);

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    res.json(usuario);

}

async function buscarUsuarioIdade(req, res) {

    const idade = Number(req.params.idade);

    const usuario = await usuariosService.buscarUsuarioPorIdade(idade);

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    res.json(usuario);

}

async function ordenarNomes(req, res) {

    const nome = Number(req.params.nome);

    const usuario = await usuariosService.ordenarNomes(nome);

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    res.json(usuario);

}


async function criarUsuario(req, res) {

    try {

        const { nome, idade, email } = req.body;

        const usuario = await usuariosService.criarUsuario(nome, idade, email);

        res.status(201).json({
            mensagem: "Usuário criado com sucesso",
            usuario
        });

    } catch (erro) {

        res.status(400).json({
            erro: erro.message
        });

    }

}

async function atualizarUsuario(req, res) {

    const id = Number(req.params.id);
    const { nome, idade, email } = req.body;

    const usuario = await usuariosService.atualizarUsuario(id, nome, idade, email);

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    res.json(usuario);

}

async function deletarUsuario(req, res) {

    const id = Number(req.params.id);

    const removido = await usuariosService.deletarUsuario(id);

    if (!removido) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    res.status(204).send();

}

async function contarUsuarios(req, res) {

    const total = await usuariosService.contarUsuarios();

    res.json({ total });

}


async function estatisticas(req, res) {

    const estatisticas = await usuariosService.estatisticas();

    res.json(estatisticas);

}

module.exports = {
    listarUsuarios,
    buscarUsuarioId,
    buscarUsuarioIdade,
    ordenarNomes,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario,
    contarUsuarios,
    estatisticas
};
