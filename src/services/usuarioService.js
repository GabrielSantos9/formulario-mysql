import axios from "axios"; //Ajuda a enviar os dados do formulário para o backend

function atualizarUsuario(id, dadosFormulario) {
  // o Formulario.js é quem passa os valores do id e dadosFormularios para essa função.
  return axios.put(
    `http://localhost:3001/usuarios/${id}`,
    dadosFormulario /* Envia os dados do formulário para o backend, para atualizar o usuário (editar).*/,
  );
}

function cadastrarUsuario(dadosFormulario) {
  return axios.post("http://localhost:3001/cadastrar", dadosFormulario);
}

export { atualizarUsuario, cadastrarUsuario };
