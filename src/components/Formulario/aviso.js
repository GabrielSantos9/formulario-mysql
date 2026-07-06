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

export default { mostrarAvisoPais, mostrarAvisoCidade };
