import Swal from "sweetalert2";

export const mostrarAvisoPais = () => {
  Swal.fire({
    icon: "info",
    title: "Atenção",
    text: "Este formulário é destinado apenas para residentes do Brasil.",
    confirmButtonText: "Okay",
  });
};

export default mostrarAvisoPais;