const express = require("express");
const router = express.Router();
const ClienteController = require("../controllers/ClienteeController");

router.get("/", ClienteController.ListarClientes);
router.get("/:id", ClienteController.BuscarClientePorId);

module.exports = router;