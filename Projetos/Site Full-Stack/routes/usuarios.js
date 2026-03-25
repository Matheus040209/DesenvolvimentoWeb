const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosController");

router.get("/", usuariosController.listarUsuarios);

router.get("/total", usuariosController.contarUsuarios);

router.get("/id/:id", usuariosController.buscarUsuarioId);

router.get("/idade/:idade", usuariosController.buscarUsuarioIdade);

router.get("/nomesOrdenados", usuariosController.ordenarNomes);

router.get("/estatisticas", usuariosController.estatisticas);

router.post("/", usuariosController.criarUsuario);

router.put("/id/:id", usuariosController.atualizarUsuario);

router.delete("/id/:id", usuariosController.deletarUsuario);


module.exports = router;