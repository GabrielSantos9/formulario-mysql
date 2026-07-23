const express = require("express"); //cria um servidor back-end
const mysql = require("mysql2"); //conecta o node ao mysql
const cors = require("cors"); //permite que o front-end acesse o back-end, mesmo que estejam em portas diferentes
const { cadastrarUsuario } = require("./controladores/controleUsuarios");

//*CONFIGURAÇÃO DO EXPRESS
const app = express();
app.use(cors()); //permite React (front-end) acessar o Express (back-end)
app.use(express.json()); //permite receber dados em formato JSON do front-end

// Configuração da conexão com o banco de dados MySQL
const db = require("./database"); // Importa a configuração do banco de dados definida no arquivo "database.js"

app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

//*FUNÇÃO PARA CADASTRAR USUÁRIOS NO BANCO DE DADOS.
app.post("/cadastrar", cadastrarUsuario);

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});

app.get("/usuarios", (req, res) => {
  const sql = `
    SELECT
      u.idusuarios,
      u.nomeCompleto,
      u.email,
      u.telefone,
      u.genero,
      u.data_nascimento,
      c.nome AS cidade,
      e.nome AS estado,
      u.pais
    FROM usuarios u
    LEFT JOIN cidades c
      ON u.cidade = c.id
    LEFT JOIN estados e
      ON u.estado = e.id
  `;

  //c.nome AS cidade e e.nome AS estado, Pega c.nome e renomeia para cidade / Pega e.nome e Renomeia para estado

  //ON u.cidade = c.id e ON u.estado = e.id ao invés de informar o número do id, informar o nome armazenado no id, tanto o nome da cidade, quanto o nome do estado?

  //FROM usuarios u: Define a tabela principal da busca e atribui a ela a letra u como apelido (alias). Isso evita ter que digitar usuarios.nomeCompleto toda vez.
  // LEFT JOIN cidades c: Junta a tabela de cidades à busca, dando a ela o apelido c.
  // LEFT JOIN estados e: Junta a tabela de estados à busca, dando a ela o apelido e.

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao buscar usuários");
    } else {
      res.send(result);
    }
  });
});

const estadosRoutes = require("./roteador/estados"); // Importa o roteador de estados definido no arquivo "estados.js" localizado na pasta "routes"
const cidadesRoutes = require("./roteador/cidades"); // Importa o roteador de cidades definido no arquivo "cidades.js" localizado na pasta "routes"

app.use("/estados", estadosRoutes); // Define que todas as requisições para o caminho "/estados" serão tratadas pelo roteador de estados, permitindo que as rotas definidas em "estados.js" sejam acessadas através desse caminho
app.use("/cidades", cidadesRoutes); // Define que todas as requisições para o caminho "/cidades" serão tratadas pelo roteador de cidades, permitindo que as rotas definidas em "cidades.js" sejam acessadas através desse caminho
