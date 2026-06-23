//Esse serviço ele apenas disponibiliza uma função para ser usada em algum lugar do seu backend.

const axios = require("axios"); //Faz requisições HTTP, nesse caso, vamos usar para buscar os estados do Brasil a partir da API do IBGE.

async function buscarEstados() {
  //Função assíncrona que busca os estados do Brasil usando a API do IBGE. Ela faz uma requisição GET para a URL da API e retorna os dados recebidos. O "await" é usado para esperar a resposta da API antes de continuar a execução da função.
  const response = await axios.get(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
  );

  return response.data; //Retorna os dados dos estados do Brasil obtidos da API do IBGE. Esses dados podem ser usados em outras partes do backend, como em rotas ou controladores, para fornecer informações sobre os estados do Brasil.
}

async function buscarCidadesPorEstado(estadoId) {
  const response = await axios.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`,
  );

  return response.data; // Retorna os dados das cidades de um estado específico do Brasil obtidos da API do IBGE. O "estadoId" é passado como parâmetro para a função, permitindo que ela busque as cidades correspondentes ao estado selecionado. Esses dados podem ser usados em outras partes do backend, como em rotas ou controladores, para fornecer informações sobre as cidades de um estado específico.
}

module.exports = { buscarEstados, buscarCidadesPorEstado }; //exporta as funções para serem usadas em outros arquivos do backend
