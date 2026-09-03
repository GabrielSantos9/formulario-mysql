import Swal from "sweetalert2";

export const mostrarAvisoPais = () => {
  Swal.fire({
    icon: "info",
    title: "Atenção",
    text: "Este formulário é destinado apenas para residentes do Brasil.",
    confirmButtonText: "Entendi",
  });
};

export const mostrarAvisoCidade = (estado) => {
  if (!estado) {
    Swal.fire({
      icon: "warning",
      title: "Selecione um estado",
      text: "Escolha um estado antes de selecionar uma cidade.",
      confirmButtonText: "Entendi",
    });
  }
};

export const mostrarAvisoPreenchimento = () => {
  Swal.fire({
    icon: "warning",
    title: "Campos obrigatórios",
    text: "Por favor, preencha todos os campos obrigatórios antes de enviar o formulário.",
    confirmButtonText: "Entendi",
  });
};

export const mostrarAvisoCadastro = () => {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: "Usuário(a) cadastrado com sucesso!",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};

export const mostrarSelecaoUsuarioEdicao = () => {
  Swal.fire({
    icon: "error",
    title: "Erro na edição",
    text: "Selecione um usuário para editar.",
    confirmButtonText: "Entendi",
  });
};

export const mostrarSelecaoUsuarioExclusao = () => {
  Swal.fire({
    icon: "error",
    title: "Erro na exclusão",
    text: "Selecione um usuário para excluir.",
    confirmButtonText: "Entendi",
  });
};

export const mostrarAvisoEdicao = () => {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: "Usuário(a) editado com sucesso!",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};

export const mostrarAvisoErroCadastro = () => {
  Swal.fire({
    icon: "error",
    title: "Erro no cadastro",
    text: "Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.",
    confirmButtonText: "Entendi",
  });
};

export const mostrarAvisoErroEdicao = () => {
  Swal.fire({
    icon: "error",
    title: "Erro na edição",
    text: "Ocorreu um erro ao editar o usuário. Por favor, tente novamente.",
  });
};

export const mostrarAvisoEmailDuplicado = () => {
  Swal.fire({
    icon: "error",
    title: "Erro no cadastro do usuário",
    text: "Esse e-mail já está em uso.",
    confirmButtonText: "Entendi",
  });
};

export const mostrarAvisoNomeInvalido = () => {
  Swal.fire({
    icon: "error",
    title: "Nome inválido",
    text: "Digite apenas letras no nome.",
  });
};

export const mostrarAvisoNomeQntdMinima = () => {
  Swal.fire({
    icon: "error",
    title: "Nome inválido",
    text: "O nome deve ter no mínimo 5 caracteres.",
  });
};

export const mostrarAvisoNomeQntdMaxima = () => {
  Swal.fire({
    icon: "error",
    title: "Nome inválido",
    text: "O nome deve ter no máximo 80 caracteres.",
  });
};

export const mostrarAvisoEmailInvalido = () => {
  Swal.fire({
    icon: "warning",
    title: "E-mail inválido",
    text: "O e-mail inserido deve conter apenas letras minúsculas, números e os caracteres especiais permitidos (., _, %, +, -), seguidos pelo símbolo @ e um domínio válido finalizado com no mínimo duas letras (ex: .com).",
  });
};

export const MostrarAvisoEmailQntdMinima = () => {
  Swal.fire({
    icon: "error",
    title: "E-mail inválido",
    text: "O E-mail deve ter no mínimo 5 caracteres.",
  });
};

export const MostrarAvisoEmailQntdMaxima = () => {
  Swal.fire({
    icon: "error",
    title: "E-mail inválido",
    text: "O E-mail deve ter no máximo 254 caracteres.",
  });
};

export const mostrarAvisoTelefoneInvalido = () => {
  Swal.fire({
    icon: "warning",
    title: "Telefone inválido",
    text: "Digite um telefone com 11 números.",
  });
};

export const mostrarAvisoDataInvalida = () => {
  Swal.fire({
    icon: "error",
    title: "Data inválida",
    text: "Digite uma data válida no formato Dia/Mês/Ano.",
  });
};

export const mostrarAvisoAnoInvalido = () => {
  Swal.fire({
    icon: "error",
    title: "Data inválida",
    text: "O ano de nascimento não pode ser anterior a 1900.",
  });
};

export const mostrarAvisoDataInexistente = () => {
  Swal.fire({
    icon: "error",
    title: "Data inválida",
    text: "A data introduzida não existe no calendário. Por favor, verifique os dados.",
  });
};

export const mostrarAvisoDataFutura = () => {
  Swal.fire({
    icon: "error",
    title: "Data inválida",
    text: "A data de nascimento não pode ser maior que a data atual.",
  });
};

export const mostrarAvisoConfirmacaoExclusao = (id) => {
  return Swal.fire({
    title: "CONFIRMAÇÃO",
    html:
      "Você tem certeza que deseja excluir o usuário do ID " +
      id +
      "? Após a confirmação, <strong>essa ação não poderá ser desfeita.</strong>",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
    allowOutsideClick: false,
    confirmButtonColor: "#2eb85c",
    cancelButtonColor: "#636f83",
  });
};

export const mostrarAvisoExclusao = () => {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: "Usuário(a) excluído com sucesso!",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};

export const mostrarAvisoErroExclusao = () => {
  Swal.fire({
    icon: "error",
    title: "Erro na exclusão",
    text: "Ocorreu um erro ao excluir o usuário. Por favor, tente novamente.",
  });
};
