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
    title: "Usuário cadastrado com sucesso!",
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
    text: "Digite um e-mail válido.",
  });
};

export const mostrarAvisoTelefoneInvalido = () => {
  Swal.fire({
    icon: "warning",
    title: "Telefone inválido",
    text: "Digite um telefone com 11 números.",
  });
};

export default {
  mostrarAvisoPais,
  mostrarAvisoCidade,
  mostrarAvisoPreenchimento,
  mostrarAvisoCadastro,
  mostrarAvisoErroCadastro,
  mostrarAvisoEmailDuplicado,
  mostrarAvisoNomeInvalido,
  mostrarAvisoEmailInvalido,
  mostrarAvisoTelefoneInvalido,
};
