const mysql = require("mysql2/promise"); //O módulo mysql2/promise é uma biblioteca que permite a conexão e interação com bancos de dados MySQL usando Promises, facilitando o uso de async/await para operações assíncronas.

const {
  buscarEstados,
  buscarCidadesPorEstado,
} = require("../services/ibgeService"); //Importa as funções buscarEstados e buscarCidadesPorEstado do arquivo ibgeService.js, que são responsáveis por buscar os estados e cidades do Brasil usando a API do IBGE. Essas funções serão usadas para obter os dados necessários para importar as cidades para o banco de dados MySQL.

async function importarCidades() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "formulario_mysql",
    }); //Cria uma conexão com o banco de dados MySQL usando as credenciais fornecidas (host, usuário, senha e nome do banco de dados). A função createConnection retorna uma Promise, permitindo o uso de async/await para aguardar a conexão ser estabelecida antes de prosseguir com a execução do código.

    const estados = await buscarEstados(); //Chama a função buscarEstados para obter a lista de estados do Brasil usando a API do IBGE. A função retorna uma Promise, e o uso de await permite aguardar a resposta da API antes de prosseguir com a execução do código. O resultado é armazenado na variável "estados", que será usada para importar as cidades correspondentes a cada estado.

    //Await é usado para aguardar a conclusão

    for (const estado of estados) { // Itera sobre cada estado obtido da API do IBGE. O loop for...of permite percorrer os elementos do array "estados", e a variável "estado" representa o estado atual em cada iteração. Dentro do loop, serão buscadas as cidades correspondentes a cada estado e inseridas no banco de dados MySQL.
      console.log(`Importando cidades de ${estado.nome}...`); //Exibe uma mensagem no console indicando que as cidades do estado atual estão sendo importadas. A propriedade "nome" do objeto "estado" é usada para mostrar o nome do estado na mensagem.

      const cidades = await buscarCidadesPorEstado(estado.id); //Chama a função buscarCidadesPorEstado passando o ID do estado atual como parâmetro. A função retorna uma Promise que busca as cidades correspondentes ao estado usando a API do IBGE. O uso de await permite aguardar a resposta da API antes de prosseguir com a execução do código. O resultado é armazenado na variável "cidades", que será usada para inserir as cidades no banco de dados MySQL.

      for (const cidade of cidades) { // Itera sobre cada cidade obtida da API do IBGE para o estado atual. O loop for...of permite percorrer os elementos do array "cidades", e a variável "cidade" representa a cidade atual em cada iteração. Dentro do loop, serão inseridas as informações da cidade no banco de dados MySQL.
        await connection.query( // Executa uma consulta SQL para inserir os dados da cidade no banco de dados MySQL. A função query retorna uma Promise, permitindo o uso de async/await para aguardar a conclusão da operação antes de prosseguir com a execução do código. A consulta SQL utiliza o comando INSERT IGNORE para evitar erros caso a cidade já exista no banco de dados, e os valores são passados como parâmetros para a consulta.
          `
          INSERT IGNORE INTO cidades
          (id, nome, estado_id)
          VALUES (?, ?, ?)
          `,
          [
            cidade.id,
            cidade.nome,
            estado.id,
          ]
        );
      }
    }

    console.log("Cidades importadas com sucesso!");

    await connection.end(); //Encerra a conexão com o banco de dados MySQL após a conclusão da importação das cidades. A função end retorna uma Promise, permitindo o uso de async/await para aguardar a conclusão do encerramento da conexão antes de prosseguir com a execução do código.
  } catch (error) {
    console.error(error);
  }
}

importarCidades();