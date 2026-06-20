const mysql = require("mysql2/promise"); // conecta o node ao mysql, usando a versão "promise" para facilitar o uso de async/await (async: permite usar await dentro da função, await: espera a resposta de uma operação assíncrona antes de continuar a execução do código)
const { buscarEstados } = require("../services/ibgeService"); // importa a função "buscarEstados" do serviço "ibgeService", que é responsável por buscar os estados do Brasil usando a API do IBGE

async function importarEstados() {
  const connection = await mysql.createConnection({
    // cria uma conexão com o banco de dados MySQL usando as credenciais fornecidas (host, user, password, database)
    host: "localhost",
    user: "root",
    password: "",
    database: "formulario_mysql",
  });

  const estados = await buscarEstados(); // chama a função "buscarEstados" para obter os dados dos estados do Brasil a partir da API do IBGE e armazena esses dados na variável "estados"

  for (const estado of estados) {
    // percorre cada estado obtido da API do IBGE e insere esses dados na tabela "estados" do banco de dados MySQL usando uma consulta SQL de inserção (INSERT INTO). Os valores a serem inseridos são passados como parâmetros para evitar problemas de segurança, como injeção de SQL.
    await connection.query(
      // executa a consulta SQL para inserir os dados do estado na tabela "estados" do banco de dados MySQL. A consulta usa placeholders (?) para os valores a serem inseridos, e os valores reais são passados como um array no segundo argumento da função "query". Isso ajuda a prevenir ataques de injeção de SQL, garantindo que os valores sejam tratados como dados e não como parte da consulta SQL.
      `
      INSERT IGNORE INTO estados (id, sigla, nome)
      VALUES (?, ?, ?)
      `,
      [estado.id, estado.sigla, estado.nome], // os valores a serem inseridos na tabela "estados" são extraídos do objeto "estado" obtido da API do IBGE, e são passados como um array para a função "query" para substituir os placeholders (?) na consulta SQL.

      //A cláusula "INSERT IGNORE" é usada para evitar erros caso o estado já exista na tabela "estados". Se um estado com o mesmo ID já estiver presente, a consulta será ignorada e não causará um erro, permitindo que o processo de importação continue sem interrupções.
    );
  }

  console.log("Estados importados!"); // exibe uma mensagem no console indicando que os estados foram importados com sucesso para o banco de dados MySQL.

  await connection.end(); // encerra a conexão com o banco de dados MySQL após a importação dos estados, liberando os recursos utilizados pela conexão.

  try {
  } catch (error) {
    console.error(error);
  }
}

importarEstados(); // chama a função "importarEstados" para iniciar o processo de importação dos estados do Brasil para o banco de dados MySQL. Essa função é assíncrona, então ela será executada de forma assíncrona, permitindo que outras operações sejam realizadas enquanto a importação está em andamento.

//No terminar, node scripts/importarEstados.js para rodar o script e importar os estados do Brasil para o banco de dados MySQL. Certifique-se de que o banco de dados esteja configurado corretamente e que a tabela "estados" exista antes de executar o script.

//No 'SQL' do phpmyadmin, SELECT COUNT(*) AS total FROM estados; para verificar se os estados foram importados corretamente. O resultado deve mostrar o número total de estados importados, que deve ser 27 (26 estados + Distrito Federal).
