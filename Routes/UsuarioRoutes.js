const express = require("express");

const router = express.Router();

const usuarioController = 
    require("../controller/usuarioController"
);

router.get(
  "/usuario",
  usuario controller.consultar Usuarios
);

routes.post(
  "/login",
  usuariocontroller.loginUsuario
);

module.exports = router;
