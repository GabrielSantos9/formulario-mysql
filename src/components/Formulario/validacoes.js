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
  const regex = /^[A-Za-zÀ-ÿ\s]+$/;
  return regex.test(nome); // A função 'validarNome' recebe um parâmetro 'nome' e verifica se ele contém apenas letras (maiúsculas e minúsculas), incluindo letras acentuadas, e espaços.
};

export const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validarTelefone = (telefone) => {
  const regex = /^\d{11}$/;
  return regex.test(telefone);
};
