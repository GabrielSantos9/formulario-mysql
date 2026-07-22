const express = require("express"); //cria um servidor back-end
const mysql = require("mysql2"); //conecta o node ao mysql
const cors = require("cors"); //permite que o front-end acesse o back-end, mesmo que estejam em portas diferentes

//*CONFIGURAÇÃO DO EXPRESS
const app = express();
app.use(cors()); //permite React (front-end) acessar o Express (back-end)
app.use(express.json()); //permite receber dados em formato JSON do front-end

// Configuração da conexão com o banco de dados MySQL
const db = require("./database"); // Importa a configuração do banco de dados definida no arquivo "database.js"

const {
  validarCamposObrigatorios,
  validarNome,
  validarEmail,
  validarTelefone,
} = require("../src/components/Formulario/validacoes"); // Importa as funções de validação definidas no arquivo "validacoes.js"

app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

//*FUNÇÃO PARA CADASTRAR USUÁRIOS NO BANCO DE DADOS.
app.post("/cadastrar", (req, res) => {
  // Define uma rota POST para o caminho "/cadastrar", que será responsável por receber os dados do formulário enviados pelo front-end e realizar o cadastro no banco de dados. A função de callback recebe os objetos "req" (requisição) e "res" (resposta) como parâmetros, permitindo acessar os dados enviados pelo front-end e enviar uma resposta de volta.

  const {
    nomeCompleto,
    email,
    telefone,
    genero,
    data_nascimento,
    cidade,
    estado,
    pais,
  } = req.body; // Desestrutura os dados recebidos no corpo da requisição (req.body) e os armazena em variáveis correspondentes, facilitando o acesso aos valores enviados pelo front-end.

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

  const resultadoNome = validarNome(nomeCompleto); // A função 'validarNome' recebe o valor do campo 'nomeCompleto' e retorna um objeto com a propriedade 'valido' (true ou false) e a propriedade 'erro' (uma string indicando o tipo de erro, se houver). O resultado da validação é armazenado na constante 'resultadoNome'.
  if (!resultadoNome.valido) {
    resultadoNome.erro === "MINIMO_CARACTERES" &&
      res.status(400).json({
        erro: "CAMPOS_OBRIGATORIOS",
        mensagem: "O nome deve ter no mínimo 5 caracteres.",
      });
    resultadoNome.erro === "MAXIMO_CARACTERES" &&
      res.status(400).json({
        erro: "CAMPOS_OBRIGATORIOS",
        mensagem: "O nome deve ter no máximo 80 caracteres.",
      });
    resultadoNome.erro === "CARACTERES_INVALIDOS" &&
      res.status(400).json({
        erro: "NOME_INVALIDO",
        mensagem: "O nome deve conter apenas letras e espaços.",
      });
    return;
  }

  if (!validarCamposObrigatorios(dadosFormulario)) {
    return res.status(400).json({
      erro: "CAMPOS_OBRIGATORIOS",
      mensagem: "Todos os campos são obrigatórios.",
    });
  }

  const emailNormalizado = email.trim().toLowerCase();
  const resultadoEmail = validarEmail(emailNormalizado);
  if (!resultadoEmail.valido) {
    resultadoEmail.erro === "MINIMO_CARACTERES" &&
      res.status(400).json({
        erro: "CAMPOS_OBRIGATORIOS",
        mensagem: "O e-mail deve ter no mínimo 5 caracteres.",
      });
    resultadoEmail.erro === "MAXIMO_CARACTERES" &&
      res.status(400).json({
        erro: "CAMPOS_OBRIGATORIOS",
        mensagem: "O e-mail deve ter no máximo 254 caracteres.",
      });
    resultadoEmail.erro === "EMAIL_INVALIDO" &&
      res.status(400).json({
        erro: "EMAIL_INVALIDO",
        mensagem: "O e-mail fornecido não é válido.",
      });
    return;
  }

  if (!validarTelefone(telefone)) {
    return res.status(400).json({
      erro: "TELEFONE_INVALIDO",
      mensagem: "O telefone deve conter exatamente 11 números.",
    });
  }

  const verificarEmail = "SELECT * FROM usuarios WHERE email = ?";

  db.query(verificarEmail, [emailNormalizado], (erroEmail, resultadoEmail) => {
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
        emailNormalizado,
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
