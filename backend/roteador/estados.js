const express = require("express"); // Importa o módulo Express para criar rotas e lidar com requisições HTTP
const router = express.Router(); // Cria um roteador do Express para definir rotas específicas para o recurso "estados"

const db = require("../database"); // Importa a configuração do banco de dados definida no arquivo "database.js" localizado na pasta "roteador"

router.get("/", (req, res) => { // Define uma rota GET para o caminho "/". Quando essa rota é acessada, a função de callback é executada, buscando os estados no banco de dados e retornando-os como resposta em formato JSON.
  const sql = `
    SELECT id, nome
    FROM estados
    ORDER BY nome
  `; // Define a consulta SQL para selecionar os campos "id" e "nome" da tabela "estados", ordenando os resultados pelo nome dos estados.

  db.query(sql, (err, result) => { // Executa a consulta SQL definida acima usando o método "query" do objeto "db" (que representa a conexão com o banco de dados). A função de callback recebe dois parâmetros: "err" (que contém informações sobre qualquer erro que possa ter ocorrido durante a execução da consulta) e "result" (que contém os resultados da consulta, ou seja, os estados encontrados no banco de dados).
    if (err) {
      console.log(err);
      return res.status(500).send("Erro ao buscar estados");
    }

    res.json(result);
  });
});

module.exports = router; // Exporta o roteador para que ele possa ser usado em outros arquivos, como o arquivo principal do servidor (server.js)