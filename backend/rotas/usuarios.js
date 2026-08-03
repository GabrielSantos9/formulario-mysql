//*DEFINEM AS URLS (GET /USUARIOS, POST /CADASTRAR)!

const express = require("express"); //cria um servidor back-end
const router = express.Router(); // cria um roteador modular (mini-servidor) para definir as rotas, permitindo organizar melhor o código e separar as rotas em diferentes arquivos. O roteador é uma instância do objeto Router do Express, que permite definir rotas específicas para um determinado conjunto de funcionalidades, como neste caso, as rotas relacionadas aos usuários.
const { cadastrarUsuario, listarUsuarios, buscarUsuarioPorId } = require("../controladores/controleUsuarios");

router.post("/cadastrar", cadastrarUsuario); // Define uma rota POST para o caminho "/cadastrar", que será responsável por receber os dados do formulário enviados pelo front-end e realizar o cadastro no banco de dados. A função "cadastrarUsuario" é passada como callback para essa rota, permitindo que ela seja executada quando uma requisição POST for feita para esse caminho.

router.get("/usuarios", listarUsuarios); // Liga a URL a função do controle.

router.get("/usuarios/:id", buscarUsuarioPorId); // Busca o usuário pelo ID selecionado na tabela de registros.

module.exports = router;