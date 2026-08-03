//*CONTROLE: recebe a requisição, aplica as regras de negócio e devolve a resposta.

const {
  validarCamposObrigatorios,
  validarNome,
  validarEmail,
  validarTelefone,
} = require("../../src/components/Formulario/validacoes"); // Importa as funções de validação definidas no arquivo "validacoes.js"

const usuarioModel = require("../modelos/usuarioModel");

const cadastrarUsuario = (req, res) => {
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
          "O nome deve conter apenas letras, espaços, hífens (-) e apóstrofos (').",
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

  usuarioModel.buscarUsuarioPorEmail(
    emailNormalizado,
    (erroEmail, resultadoEmail) => {
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

      usuarioModel.cadastrarUsuario(dadosFormulario, (err) => {
        if (err) {
          console.log(err);

          return res.status(500).json({
            erro: "ERRO_INTERNO",
            mensagem: "Ocorreu um erro ao cadastrar usuário.",
          });
        }

        return res.status(201).json({
          mensagem: "Usuário cadastrado com sucesso.",
        });
      });
    },
  );
};

const listarUsuarios = (req, res) => {
  usuarioModel.listarUsuarios((err, resultado) => {
    //Recebe o resultado do banco e decide qual resposta enviar ao cliente.
    if (err) {
      console.log(err);

      return res.status(500).json({
        erro: "ERRO_INTERNO",
        mensagem: "Ocorreu um erro ao buscar usuários.",
      });
    }

    return res.status(200).json(resultado);
  });
};

const buscarUsuarioPorId = (req, res) => {
  const { id } = req.params; //Pega o id do usuario selecionado e busca no banco de dados, retornando as informações desse id.

  //Procura o usuário no banco de dados pelo ID selecionado na lista de registros.
  usuarioModel.buscarUsuarioPorId(id, (err, resultado) => {
    if (err) {
      console.log(err);

      return res.status(500).json({ // Se ocorrer algum erro interno durante a busca do usuário selecionado, retornará esse erro.
        erro: "ERRO_INTERNO",
        mensagem: "Erro ao buscar usuário.",
      });
    }

    if (resultado.length === 0) { //Se o resultado da busca for vazio (não encontrou o usuário), retorna esse erro, de usuário não encontrado.
      return res.status(404).json({
        erro: "USUARIO_NAO_ENCONTRADO",
        mensagem: "Usuário não encontrado.",
      });
    }

    return res.status(200).json(resultado[0]); //Retorna o usuário encontrado no banco de dados, retorna em forma de JSON. o "[0]" é usado por conta que estamos buscando apenas um usuário, então como será retornado apenas um usuário, a indice dele é 0.
  });
};

module.exports = {
  cadastrarUsuario,
  listarUsuarios,
  buscarUsuarioPorId,
};
