const express = require("express"); //cria um servidor back-end
const cors = require("cors"); //permite que o front-end acesse o back-end, mesmo que estejam em portas diferentes

const usuariosRoutes = require("./rotas/usuarios"); // Importa o roteador de usuários definido no arquivo "usuarios.js" localizado na pasta "rotas"
const listarUsuarios = require("./rotas/usuarios");
const estadosRoutes = require("./roteador/estados"); // Importa o roteador de estados definido no arquivo "estados.js" localizado na pasta "routes"
const cidadesRoutes = require("./roteador/cidades"); // Importa o roteador de cidades definido no arquivo "cidades.js" localizado na pasta "routes"

//*CONFIGURAÇÃO DO EXPRESS
const app = express();
app.use(cors()); //permite React (front-end) acessar o Express (back-end)
app.use(express.json()); //permite receber dados em formato JSON do front-end

app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

app.use("/", usuariosRoutes); //*FUNÇÃO DE USUÁRIOS
app.use("/", listarUsuarios); //*LISTA USUÁRIOS

app.use("/estados", estadosRoutes); // Define que todas as requisições para o caminho "/estados" serão tratadas pelo roteador de estados, permitindo que as rotas definidas em "estados.js" sejam acessadas através desse caminho
app.use("/cidades", cidadesRoutes); // Define que todas as requisições para o caminho "/cidades" serão tratadas pelo roteador de cidades, permitindo que as rotas definidas em "cidades.js" sejam acessadas através desse caminho

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
