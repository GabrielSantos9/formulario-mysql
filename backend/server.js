const express = require("express"); //cria um servidor back-end
const mysql = require("mysql2"); //conecta o node ao mysql
const cors = require("cors"); //permite que o front-end acesse o back-end, mesmo que estejam em portas diferentes

const app = express();
app.use(cors()); //permite React (front-end) acessar o Express (back-end)
app.use(express.json()); //permite receber dados em formato JSON do front-end

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: "localhost", //servidor do banco
  user: "root", //usuário do MySQL
  password: "", //senha do MySQL
  database: "formulario_mysql", //banco que vamos usar
});

app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

app.post("/cadastrar", (req, res) => {

  console.log(req.body);

  const {
    nomeCompleto,
    email,
    telefone,
    genero,
    data_nascimento,
    cidade,
    estado,
    pais,
  } = req.body;

  const sql = `
 INSERT INTO usuarios 
 (nomeCompleto, email, telefone, genero, data_nascimento, cidade, estado, pais)
 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
 `;

  db.query(
    sql,
    [
      nomeCompleto,
      email,
      telefone,
      genero,
      data_nascimento,
      cidade,
      estado,
      pais,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erro ao cadastrar");
      } else {
        res.send("Usuário cadastrado!");
      }
    },
  );
  //Em resumo, o código acima define uma rota POST "/cadastrar" que recebe os dados do formulário, insere esses dados na tabela "usuarios" do banco de dados MySQL e retorna uma resposta indicando se o cadastro foi bem-sucedido ou se ocorreu um erro. O React envvia dados, Node recebe, Node envia para o MySQL, MySQL salva no banco de dados.
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});

app.get("/usuarios", (req, res) => {
  const sql = "SELECT * FROM usuarios";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao buscar usuários");
    } else {
      res.send(result);
    }
  });
});
