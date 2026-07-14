const express = require("express"); // Importa o módulo Express para criar rotas e lidar com requisições HTTP
const router = express.Router(); // Cria um roteador do Express para definir rotas específicas para o recurso "cidades"
const db = require("../database"); // Importa a configuração do banco de dados definida no arquivo "database.js" localizado na pasta "roteador"


//* Rota GET para buscar todas as cidades de um estado específico
router.get("/:estadoId", (req, res) => { // Define uma rota GET para o caminho "/:estadoId". O ":estadoId" é um parâmetro de rota que representa o ID do estado para o qual queremos buscar as cidades. Quando essa rota é acessada, a função de callback é executada, buscando as cidades no banco de dados e retornando-as como resposta em formato JSON.
  const { estadoId } = req.params; // Extrai o valor do parâmetro "estadoId" da URL usando a desestruturação de objetos. O valor de "estadoId" será usado na consulta SQL para filtrar as cidades pertencentes a esse estado específico.

  const sql = `
    SELECT id, nome
    FROM cidades
    WHERE estado_id = ?
    ORDER BY nome
  `; // Define a consulta SQL para selecionar os campos "id" e "nome" da tabela "cidades", filtrando os resultados pelo "estado_id" fornecido na URL, e ordenando os resultados pelo nome da cidade.

  db.query(sql, [estadoId], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Erro ao buscar cidades");
    }

    res.json(result);
  });
});

module.exports = router; // Exporta o roteador para que ele possa ser usado em outros arquivos, como o arquivo principal do servidor (server.js)