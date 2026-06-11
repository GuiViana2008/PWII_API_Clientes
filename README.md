# API de Clientes — Express MVC

API REST simples para gerenciamento de clientes, construída com **Node.js** e **Express** seguindo o padrão **MVC**.

---

## 📁 Estrutura do Projeto

```
api-clientes/
├── data/
│   └── clientes.js          # Dados mockados (simula o banco de dados)
├── src/
│   ├── models/
│   │   └── Cliente.js       # Model da entidade Cliente
│   ├── controllers/
│   │   └── clienteController.js  # Lógica dos endpoints
│   ├── routes/
│   │   └── clienteRoutes.js # Definição das rotas
│   └── app.js               # Entrada da aplicação
├── package.json
└── README.md
```

---

## ▶️ Como Executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar em produção
```bash
npm start
```

### 3. Rodar em modo desenvolvimento (hot reload)
```bash
npm run dev
```

---

## 🔗 Endpoints

### `GET /clientes`
Retorna a lista completa de clientes.

**Resposta:**
```json
{
  "sucesso": true,
  "total": 5,
  "dados": [
    {
      "id": 1,
      "nome": "Ana Paula Souza",
      "telefone": "(11) 91234-5678",
      "endereco": "Rua das Flores, 123 - São Paulo/SP"
    }
  ]
}
```

---

### `GET /clientes/:id`
Retorna um cliente específico pelo ID.

**Exemplo:** `GET /clientes/1`

**Resposta (sucesso):**
```json
{
  "sucesso": true,
  "dados": {
    "id": 1,
    "nome": "Ana Paula Souza",
    "telefone": "(11) 91234-5678",
    "endereco": "Rua das Flores, 123 - São Paulo/SP"
  }
}
```

**Resposta (não encontrado):**
```json
{
  "sucesso": false,
  "mensagem": "Cliente com ID 99 não encontrado."
}
```
