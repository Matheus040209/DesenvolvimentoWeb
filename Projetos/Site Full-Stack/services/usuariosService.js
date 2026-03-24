const pool = require("../database/db");

let proximoId = 1;

async function listarUsuarios() {

    const resultado = await pool.query(
        "SELECT * FROM usuarios ORDER BY id"
    );

    return resultado.rows;
}

async function buscarUsuarioPorId(id) {

    const resultado = await pool.query(
        "SELECT * FROM usuarios WHERE id = $1",
        [id]
    );

    return resultado.rows[0];

}

async function buscarUsuarioPorIdade(idade) {

    const resultado = await pool.query(
        "SELECT * FROM usuarios WHERE idade = $1",
        [idade]
    );

    return resultado.rows[0];

}
async function ordenarNomes() {

    const resultado = await pool.query(
        "SELECT id, idade, nome FROM usuarios ORDER BY nome ASC;",
    );

    return resultado.rows;

}

async function criarUsuario(nome, idade, email) {

    if (!nome || nome.trim() === "") {
        throw new Error("Nome é obrigatório");
    }

    const resultado = await pool.query(
        `
        INSERT INTO usuarios (nome, idade, email)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
        [nome, idade, email]
    );

    return resultado.rows[0];

}
async function atualizarUsuario(id, nome, idade, email) {

    const resultado = await pool.query(
        `
        UPDATE usuarios
        SET nome = COALESCE($1, nome),
            idade = COALESCE($2, idade),
            email = COALESCE($3, email)
        WHERE id = $4
        RETURNING *
        `,
        [nome, idade, id, email]
    );

    return resultado.rows[0];

}

async function deletarUsuario(id) {

    const resultado = await pool.query(
        "DELETE FROM usuarios WHERE id = $1",
        [id]
    );

    return resultado.rowCount > 0;

}

async function contarUsuarios() {
    const resultado = await pool.query(
        "SELECT COUNT(*) AS total FROM usuarios"
    );

    return parseInt(resultado.rows[0].total, 10);
}


module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    buscarUsuarioPorIdade,
    ordenarNomes,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario,
    contarUsuarios
};