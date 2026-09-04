import axios from "axios"; //Ajuda a enviar os dados do formulário para o backend

function cadastrarUsuario(dadosFormulario) {
  return axios.post("http://localhost:3001/cadastrar", dadosFormulario);
}

function buscaUsuarios() {
  return axios.get("http://localhost:3001/usuarios");

  // o 'axios' é uma biblioteca que ajuda a fazer requisições HTTP para o backend. O 'axios.get' faz uma requisição GET para o backend, que é um pedido para buscar informações do backend. O 'http://localhost:3001/usuarios' é a URL do backend onde estão os usuários cadastrados. O 'then' é executado quando a requisição é bem-sucedida e o 'catch' é executado quando há algum erro na requisição.
}

function buscarUsuarioPorId(id) {
  return axios.get(`http://localhost:3001/usuarios/${id}`);
}

function atualizarUsuario(id, dadosFormulario) {
  // o Formulario.js é quem passa os valores do id e dadosFormularios para essa função.
  return axios.put(
    `http://localhost:3001/usuarios/${id}`,
    dadosFormulario /* Envia os dados do formulário para o backend, para atualizar o usuário (editar).*/,
  );
}

function deletarUsuarioPorID(id) {
  return axios.delete(`http://localhost:3001/usuarios/${id}`);
}

function buscarEstados() {
  return axios.get("http://localhost:3001/estados");
}

function buscarCidadesPorEstado(estado) {
  return axios.get(`http://localhost:3001/cidades/${estado}`);
}

export {
  cadastrarUsuario,
  buscaUsuarios,
  buscarUsuarioPorId,
  atualizarUsuario,
  deletarUsuarioPorID,
  buscarEstados,
  buscarCidadesPorEstado,
};
