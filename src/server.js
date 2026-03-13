const express = require('express');
require('dotenv').config();
const pool = require('./config/db'); // Importando a conexão

const app = express();

// Middleware essencial para a API entender JSON
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Testando a conexão com o banco logo ao iniciar
pool.connect()
    .then(() => console.log('Conectado ao PostgreSQL com sucesso! 🐘'))
    .catch(err => console.error('Erro ao conectar no banco de dados:', err.stack));

// Rota de teste simples (depois vamos tirar)
app.get('/', (req, res) => {
    res.send('API Gerenciador de Empreendimentos SC rodando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} 🚀`);
});