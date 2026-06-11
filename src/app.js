// src/app.js
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const clienteRoutes = require("./routes/clienteRoutes");
const prisma = require("./config/prisma");
const { PrismaClient } = require("@prisma/client");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota raiz
app.get("/", (req, res) => {
  res.json({
    mensagem: "API de Clientes",
    versao: "1.0.0",
    endpoints: {
      listarTodos: "GET /clientes",
      buscarPorId: "GET /clientes/:id",
      adicionarCliente: "POST /clientes",
      atualizarCliente: "POST /clientes/:id",
    },
  });
});

// Rotas
app.use("/clientes", clienteRoutes);

// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({
    sucesso: false,
    mensagem: "Rota não encontrada.",
  });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor rodando em http://localhost:${PORT}`);
});

//Teardown de conexão:
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log("Conexão com o banco encerrada.");
  process.exit(0);
});

module.exports = app;
