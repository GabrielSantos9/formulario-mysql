//Esse serviço ele apenas disponibiliza uma função para ser usada em algum lugar do seu backend.

const axios = require("axios"); //Faz requisições HTTP, nesse caso, vamos usar para buscar os estados do Brasil a partir da API do IBGE.

async function buscarEstados() { //Função assíncrona que busca os estados do Brasil usando a API do IBGE. Ela faz uma requisição GET para a URL da API e retorna os dados recebidos. O "await" é usado para esperar a resposta da API antes de continuar a execução da função.
  const response = await axios.get(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  );

  return response.data; //Retorna os dados dos estados do Brasil obtidos da API do IBGE. Esses dados podem ser usados em outras partes do backend, como em rotas ou controladores, para fornecer informações sobre os estados do Brasil.
}

module.exports = { buscarEstados }; //exporta a função para ser usada em outros arquivos do backend