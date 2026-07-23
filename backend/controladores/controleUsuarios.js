const {
  validarCamposObrigatorios,
  validarNome,
  validarEmail,
  validarTelefone,
} = require("../../src/components/Formulario/validacoes"); // Importa as funções de validação definidas no arquivo "validacoes.js"

const cadastrarUsuario = (req, res) => {
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

  const nomeNormalizado = nomeCompleto.trim().replace(/\s+/g, " ");
  const emailNormalizado = email.trim().toLowerCase();
  const dadosFormulario = {
    nomeCompleto: nomeNormalizado,
    email: emailNormalizado,
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

  const resultadoNome = validarNome(nomeNormalizado); // A função 'validarNome' recebe o valor do campo 'nomeCompleto' e retorna um objeto com a propriedade 'valido' (true ou false) e a propriedade 'erro' (uma string indicando o tipo de erro, se houver). O resultado da validação é armazenado na constante 'resultadoNome'.
  if (!resultadoNome.valido) {
    if (resultadoNome.erro === "MINIMO_CARACTERES") {
      return res.status(400).json({
        erro: "NOME_INVALIDO",
        mensagem: "O nome deve ter no mínimo 5 caracteres.",
      });
    }
    if (resultadoNome.erro === "MAXIMO_CARACTERES") {
      return res.status(400).json({
        erro: "NOME_INVALIDO",
        mensagem: "O nome deve ter no máximo 80 caracteres.",
      });
    }
    if (resultadoNome.erro === "CARACTERES_INVALIDOS") {
      return res.status(400).json({
        erro: "NOME_INVALIDO",
        mensagem:
          "O nome deve conter apenas letras, espaços, hífens (-) e apóstrofos (')."
      });
    }
  }

  const resultadoEmail = validarEmail(emailNormalizado);
  if (!resultadoEmail.valido) {
    if (resultadoEmail.erro === "MINIMO_CARACTERES") {
      return res.status(400).json({
        erro: "EMAIL_INVALIDO",
        mensagem: "O e-mail deve ter no mínimo 5 caracteres.",
      });
    }
    if (resultadoEmail.erro === "MAXIMO_CARACTERES") {
      return res.status(400).json({
        erro: "EMAIL_INVALIDO",
        mensagem: "O e-mail deve ter no máximo 254 caracteres.",
      });
    }
    if (resultadoEmail.erro === "EMAIL_INVALIDO") {
      return res.status(400).json({
        erro: "EMAIL_INVALIDO",
        mensagem:
          "Informe um e-mail válido. Utilize apenas letras, números, ponto (.), hífen (-) ou underline (_) antes do @ e um domínio válido após o @ (ex.: joao.silva@email.com).",
      });
    }
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

      return res.status(500).json({
        erro: "ERRO_INTERNO",
        mensagem: "Ocorreu um erro ao verificar o e-mail.",
      });
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
        nomeNormalizado,
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
          res.status(201).json({
            mensagem: "Usuário cadastrado com sucesso.",
          });
        }
      },
    );
  });
};

module.exports = {
  cadastrarUsuario,
};