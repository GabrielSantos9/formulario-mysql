//*CONTROLE: recebe a requisição, aplica as regras de negócio e devolve a resposta.

const {
  validarCamposObrigatorios,
  validarNome,
  validarEmail,
  validarTelefone,
  validarData,
} = require("../../src/components/Formulario/validacoes"); // Importa as funções de validação definidas no arquivo "validacoes.js"

const {
  cadastrarUsuario,
  listarUsuarios,
  buscarUsuarioPorEmail,
  buscarUsuarioPorId,
  atualizarUsuario,
  deletarUsuarioPorID,
} = require("../modelos/usuarioModel");

const cadastrarUsuarioController = (req, res) => {
  const {
    nomeCompleto,
    email,
    telefone,
    genero,
    dataNascimento,
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
    dataNascimento,
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

  const resultadoData = validarData(dataNascimento);
  if (!resultadoData.valido) {
    if (resultadoData.erro === "DATA_INVALIDA") {
      return res.status(400).json({
        erro: "DATA_NASCIMENTO_INVALIDA",
        mensagem: "Digite uma data válida no formato Dia/Mês/Ano.",
      });
    }
    if (resultadoData.erro === "ANO_INVALIDO") {
      return res.status(400).json({
        erro: "DATA_NASCIMENTO_INVALIDA",
        mensagem: "É permitido apenas anos entre 1900 adiante!",
      });
    }
    if (resultadoData.erro === "DATA_INEXISTENTE") {
      return res.status(400).json({
        erro: "DATA_NASCIMENTO_INVALIDA",
        mensagem:
          "Data de nascimento inexistente. Por gentileza, informe uma data válida.",
      });
    }
    if (resultadoData.erro === "DATA_FUTURA") {
      return res.status(400).json({
        erro: "DATA_NASCIMENTO_INVALIDA",
        mensagem: "Data de nascimento não pode ser futura.",
      });
    }
  }

  buscarUsuarioPorEmail(emailNormalizado, (erroEmail, resultadoEmail) => {
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

    cadastrarUsuario(dadosFormulario, (err) => {
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
  });
};

const listarUsuariosController = (req, res) => {
  listarUsuarios((err, resultado) => {
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

const buscarUsuarioPorIdController = (req, res) => {
  const { id } = req.params; //Pega o id do usuario selecionado e busca no banco de dados, retornando as informações desse id.

  //Procura o usuário no banco de dados pelo ID selecionado na lista de registros.
  buscarUsuarioPorId(id, (err, resultado) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        // Se ocorrer algum erro interno durante a busca do usuário selecionado, retornará esse erro.
        erro: "ERRO_INTERNO",
        mensagem: "Erro ao buscar usuário.",
      });
    }

    if (resultado.length === 0) {
      //Se o resultado da busca for vazio (não encontrou o usuário), retorna esse erro, de usuário não encontrado.
      return res.status(404).json({
        erro: "USUARIO_NAO_ENCONTRADO",
        mensagem: "Usuário não encontrado.",
      });
    }

    return res.status(200).json(resultado[0]); //Retorna o usuário encontrado no banco de dados, retorna em forma de JSON. o "[0]" é usado por conta que estamos buscando apenas um usuário, então como será retornado apenas um usuário, a indice dele é 0.
  });
};

const atualizarUsuarioController = (req, res) => {
  const { id } = req.params; //Pega o id do usuário selecionado para edição, que é passado como parâmetro na url da requisição.

  const {
    nomeCompleto,
    email,
    telefone,
    genero,
    dataNascimento,
    cidade,
    estado,
    pais,
  } = req.body; //Desestrutura os dados recebidos no corpo da requisição (req.body) e os armazena em variáveis correspondentes, facilitando o acesso aos valores enviados pelo front-end.

  const nomeNormalizado = nomeCompleto.trim().replace(/\s+/g, " ");
  const emailNormalizado = email.trim().toLowerCase();

  const dadosFormulario = {
    nomeCompleto: nomeNormalizado,
    email: emailNormalizado,
    telefone,
    genero,
    dataNascimento,
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

  const resultadoData = validarData(dataNascimento);
  if (!resultadoData.valido) {
    if (resultadoData.erro === "DATA_INVALIDA") {
      return res.status(400).json({
        erro: "DATA_NASCIMENTO_INVALIDA",
        mensagem: "Digite uma data válida no formato Dia/Mês/Ano.",
      });
    }
    if (resultadoData.erro === "ANO_INVALIDO") {
      return res.status(400).json({
        erro: "DATA_NASCIMENTO_INVALIDA",
        mensagem: "É permitido apenas anos entre 1900 adiante!",
      });
    }
    if (resultadoData.erro === "DATA_INEXISTENTE") {
      return res.status(400).json({
        erro: "DATA_NASCIMENTO_INVALIDA",
        mensagem:
          "Data de nascimento inexistente. Por gentileza, informe uma data válida.",
      });
    }
    if (resultadoData.erro === "DATA_FUTURA") {
      return res.status(400).json({
        erro: "DATA_NASCIMENTO_INVALIDA",
        mensagem: "Data de nascimento não pode ser futura.",
      });
    }
  }

  atualizarUsuario(id, dadosFormulario, (erro, resultado) => {
    if (erro) {
      console.error(erro);
      return res.status(500).json({
        erro: "ERRO_AO_ATUALIZAR_USUARIO",
      });
    }

    res.status(200).json({
      mensagem: "Usuário atualizado com sucesso.",
    });
  });
};

const deletarUsuarioPorIDController = (req, res) => {
  const id = req.params.id;
  deletarUsuarioPorID(id, (err, resultado) => {
    if (err) {
      console.error("Erro ao excluir usuário:", err);
      res.status(500).json({ error: "Erro ao excluir usuário" });
    } else {
      res.status(200).json({ message: "Usuário excluído com sucessoss" });
    }
  });
};

module.exports = {
  cadastrarUsuarioController,
  listarUsuariosController,
  buscarUsuarioPorIdController,
  atualizarUsuarioController,
  deletarUsuarioPorIDController,
};
