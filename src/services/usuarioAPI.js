import axios from "axios";

const UsuariosAPI = axios.create({
  baseURL: "http://localhost:3001/usuarios",
}); //Conexão com a API, cria uma API.

async function getUsuarios() {
  const response = await UsuariosAPI.get("");
  return response.data; //Retornará todos os usuarios requisitados.
}

export { getUsuarios };
