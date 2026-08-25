export const validarCamposObrigatorios = (dados) => {
  if (!dados) {
    return {
      valido: false,
      erro: "DADOS_AUSENTES",
    };
  }

  const valores = Object.values(dados);

  for (const valor of valores) {
    if (valor === null || valor === undefined) {
      return {
        valido: false,
        erro: "CAMPO_AUSENTE",
      };
    }

    if (typeof valor === "string" && valor.trim() === "") {
      return {
        valido: false,
        erro: "CAMPO_VAZIO",
      };
    }
  }

  return {
    valido: true, // Se todas as validações forem bem-sucedidas, a função retorna um objeto indicando que a data é válida.
  };
};

export const validarNome = (nome) => {
  const nomeNormalizado = nome.trim().replace(/\s+/g, " ");
  if (nomeNormalizado.length < 5) {
    return {
      valido: false,
      erro: "MINIMO_CARACTERES",
    };
  }

  if (nomeNormalizado.length > 80) {
    return {
      valido: false,
      erro: "MAXIMO_CARACTERES",
    };
  }

  const regex = /^[A-Za-zÀ-ÿ]+(?:[ '-][A-Za-zÀ-ÿ]+)*$/;
  if (!regex.test(nomeNormalizado)) {
    return {
      valido: false,
      erro: "CARACTERES_INVALIDOS",
    };
  }

  return {
    valido: true, // Se todas as validações forem bem-sucedidas, a função retorna um objeto indicando que a data é válida.
  };
};

export const validarEmail = (email) => {
  const emailNormalizado = email;
  if (emailNormalizado.length < 5) {
    return {
      valido: false,
      erro: "MINIMO_CARACTERES",
    };
  }

  if (emailNormalizado.length > 254) {
    return {
      valido: false,
      erro: "MAXIMO_CARACTERES",
    };
  }

  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!regex.test(emailNormalizado)) {
    return {
      valido: false,
      erro: "EMAIL_INVALIDO",
    };
  }

  return {
    valido: true, // Se todas as validações forem bem-sucedidas, a função retorna um objeto indicando que a data é válida.
  };
};

export const validarTelefone = (telefone) => {
  const regex = /^\d{11}$/;
  return regex.test(telefone); // A função 'validarTelefone' recebe um parâmetro 'telefone' e verifica se ele contém exatamente 11 dígitos numéricos.
};

export const validarData = (dataNascimento) => {
  //Verifica o formato AAAA-MM-DD
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dataNascimento)) {
    return {
      valido: false,
      erro: "DATA_INVALIDA",
    };
  }

  //Separa ano, mês e dia
  const [ano, mes, dia] = dataNascimento.split("-").map(Number);
  //Verifica se o ano está dentro do limite (1900)
  if (ano < 1900) {
    return {
      valido: false,
      erro: "ANO_INVALIDO",
    };
  }

  //Cria uma data e verifica se ela realmente existe, para evitar datas inválidas, por ex: 30/02/2026
  const data = new Date(ano, mes - 1, dia);
  if (
    data.getFullYear() !== ano ||
    data.getMonth() !== mes - 1 ||
    data.getDate() !== dia
  ) {
    return {
      valido: false,
      erro: "DATA_INEXISTENTE",
    };
  }

  //Verifica se a data não é futura
  const hoje = new Date();
  //Zera horas/minutos, no intuito de conferir apenas a data.
  hoje.setHours(0, 0, 0, 0);
  if (data > hoje) {
    return {
      valido: false,
      erro: "DATA_FUTURA",
    };
  }

  return {
    valido: true, // Se todas as validações forem bem-sucedidas, a função retorna um objeto indicando que a data é válida.
  };
};
