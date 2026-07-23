export const validarCamposObrigatorios = (dados) => {
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
    valido: true,
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
    valido: true,
  };
};

export const validarTelefone = (telefone) => {
  const regex = /^\d{11}$/;
  return regex.test(telefone); // A função 'validarTelefone' recebe um parâmetro 'telefone' e verifica se ele contém exatamente 11 dígitos numéricos.
};
