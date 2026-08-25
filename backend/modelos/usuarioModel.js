//*MODEL: contém apenas consultas ao banco de dados.

const db = require("../database");

function cadastrarUsuario(dados, callback) {
  const sql = `
    INSERT INTO usuarios
    (
      nomeCompleto,
      email,
      telefone,
      genero,
      dataNascimento,
      cidade,
      estado,
      pais
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      dados.nomeCompleto,
      dados.email,
      dados.telefone,
      dados.genero,
      dados.dataNascimento,
      dados.cidade,
      dados.estado,
      dados.pais,
    ],
    callback,
  );
}

//* FUNÇÃO PARA RETORNAR A LISTA DE USUÁRIOS CADASTRADOS.
function listarUsuarios(callback) {
  //Consulta o banco
  const sql = `
    SELECT
      u.idusuarios,
      u.nomeCompleto,
      u.email,
      u.telefone,
      u.genero,
      u.dataNascimento,
      c.nome AS cidade,
      e.nome AS estado,
      u.pais
    FROM usuarios u
    LEFT JOIN cidades c
      ON u.cidade = c.id
    LEFT JOIN estados e
      ON u.estado = e.id
  `;

  //c.nome AS cidade e e.nome AS estado, Pega c.nome e renomeia para cidade / Pega e.nome e Renomeia para estado

  //ON u.cidade = c.id e ON u.estado = e.id ao invés de informar o número do id, informar o nome armazenado no id, tanto o nome da cidade, quanto o nome do estado?

  //FROM usuarios u: Define a tabela principal da busca e atribui a ela a letra u como apelido (alias). Isso evita ter que digitar usuarios.nomeCompleto toda vez.
  // LEFT JOIN cidades c: Junta a tabela de cidades à busca, dando a ela o apelido c.
  // LEFT JOIN estados e: Junta a tabela de estados à busca, dando a ela o apelido e.

  db.query(sql, callback);
}

function buscarUsuarioPorEmail(email, callback) {
  const sql = "SELECT * FROM usuarios WHERE email = ?";

  db.query(sql, [email], callback);
}

function buscarUsuarioPorId(id, callback) { // A função buscarUsuarioPorId é responsável por buscar um usuário específico no banco de dados com base no seu ID. Ela recebe dois parâmetros: o ID do usuário que se deseja buscar e uma função de callback que será executada após a consulta ao banco de dados.
  const sql = `
    SELECT
      u.idusuarios,
      u.nomeCompleto,
      u.email,
      u.telefone,
      u.genero,
      u.dataNascimento,
      u.cidade,
      u.estado,
      u.pais
    FROM usuarios u
    WHERE u.idusuarios = ?
  `;

  db.query(sql, [id], callback);
}

//* A função é responsável por atualizar os dados do usuário selecionado para edição. Ela recebe três parâmetros: o ID do usuário que se deseja atualizar, um objeto contendo os novos dados do usuário e uma função de callback que será executada após a atualização no banco de dados.
function atualizarUsuario(id, dados, callback) {
  const sql = `
    UPDATE usuarios
    SET
      nomeCompleto = ?,
      email = ?,
      telefone = ?,
      genero = ?,
      dataNascimento = ?,
      cidade = ?,
      estado = ?
    WHERE idusuarios = ?
  `;

  db.query(
    sql,
    [
      dados.nomeCompleto,
      dados.email,
      dados.telefone,
      dados.genero,
      dados.dataNascimento,
      dados.cidade,
      dados.estado,
      id,
    ],
    callback
  );
}

module.exports = {
  cadastrarUsuario,
  listarUsuarios,
  buscarUsuarioPorEmail,
  buscarUsuarioPorId,
  atualizarUsuario,
};
