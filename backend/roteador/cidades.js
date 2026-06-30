const express = require("express"); // Importa o módulo Express para criar rotas e lidar com requisições HTTP
const router = express.Router(); // Cria um roteador do Express para definir rotas específicas para o recurso "cidades"
const connection = require("../database"); // Importa a conexão com o banco de dados MySQL definida no arquivo database.js

router.get("/:estadoId", async (req, res) => { 
  const { estadoId } = req.params;

  const [cidades] = await connection.query(
    `
    SELECT id, nome
    FROM cidades
    WHERE estado_id = ?
    ORDER BY nome
    `,
    [estadoId]
  ); // Executa uma consulta SQL para selecionar os campos "id" e "nome" da tabela "cidades", filtrando os resultados pelo "estado_id" fornecido na URL, e ordenando os resultados pelo nome da cidade

  res.json(cidades); // Retorna as cidades encontradas como uma resposta JSON para o cliente que fez a requisição
});

module.exports = router; // Exporta o roteador para que ele possa ser usado em outros arquivos, como o arquivo principal do servidor (server.js)