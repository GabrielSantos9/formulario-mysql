const express = require("express"); // Importa o módulo Express para criar rotas e lidar com requisições HTTP
const router = express.Router(); // Cria um roteador do Express para definir rotas específicas para o recurso "estados"
const connection = require("../database"); // Importa a conexão com o banco de dados MySQL definida no arquivo database.js

router.get("/", async (req, res) => { // Define uma rota GET para o caminho "/" que será usada para buscar todos os estados do banco de dados
  const [estados] = await connection.query(`
    SELECT id, nome
    FROM estados
    ORDER BY nome
  `); // Executa uma consulta SQL para selecionar os campos "id" e "nome" da tabela "estados", ordenando os resultados pelo nome do estado

  res.json(estados); // Retorna os estados encontrados como uma resposta JSON para o cliente que fez a requisição
});

module.exports = router; // Exporta o roteador para que ele possa ser usado em outros arquivos, como o arquivo principal do servidor (server.js)