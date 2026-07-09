const express = require("express"); //cria um servidor back-end
const mysql = require("mysql2"); //conecta o node ao mysql
const cors = require("cors"); //permite que o front-end acesse o back-end, mesmo que estejam em portas diferentes

const app = express();
app.use(cors()); //permite React (front-end) acessar o Express (back-end)
app.use(express.json()); //permite receber dados em formato JSON do front-end

// Configuração da conexão com o banco de dados MySQL
const db = require("./database"); // Importa a configuração do banco de dados definida no arquivo "database.js"

const validarCamposObrigatorios = (dados) => {
  return Object.values(dados).every((valor) => {
    if (valor === null || valor === undefined) {
      return false;
    }

    if (typeof valor === "string" && valor.trim() === "") {
      return false;
    }

    return true;
  });
};

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

  const dadosFormulario = {
    nomeCompleto,
    email,
    telefone,
    genero,
    data_nascimento,
    cidade,
    estado,
    pais,
  };

  if (!validarCamposObrigatorios(dadosFormulario)) {
    return res.status(400).json({
      erro: "CAMPOS_OBRIGATORIOS",
      mensagem: "Todos os campos são obrigatórios.",
    });
  }

  const verificarEmail = "SELECT * FROM usuarios WHERE email = ?";

  db.query(verificarEmail, [email], (erroEmail, resultadoEmail) => {
    if (erroEmail) {
      console.log(erroEmail);

      return res.status(500).send("Erro ao verificar e-mail");
    }
    if (resultadoEmail.length > 0) {
      return res.status(400).json({
        erro: "EMAIL_DUPLICADO",
        mensagem: "E-mail já cadastrado",
      });
    }

    const sql = `
      INSERT INTO usuarios
      (
        nomeCompleto,
        email,
        telefone,
        genero,
        data_nascimento,
        cidade,
        estado,
        pais
      )
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
  });
});

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
