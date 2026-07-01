const mysql = require("mysql2"); // Conecta o Node.js ao MySQL

const db = mysql.createConnection({
  host: "localhost", // Servidor do banco de dados
  user: "root", // Usuário do MySQL
  password: "", // Senha do MySQL
  database: "formulario_mysql", // Nome do banco de dados que vamos usar
});

module.exports = db; // Exporta a conexão com o banco de dados para que possa ser usada em outros arquivos do projeto, como o "server.js".