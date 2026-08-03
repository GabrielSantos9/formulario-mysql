import axios from "axios";
import InputBusca from "./InputBusca";
import BotaoAdicionar from "./BotaoAdicionar";
import BotaoEditar from "./BotaoEditar";
import BotaoExcluir from "./BotaoExcluir";
import { useState } from "react";
import Tabela from "./Tabela";
import {
  Conteudo,
  Introducao,
  Localizacao,
  TituloUsuarios,
  ParagrafoUsuarios,
  BancoUsuarios,
  OpcoesTabela,
} from "./styles";

function UsuariosRegistrados() {
  //Elemento pai qresponsável por controlar o estado do usuário selecionado e compartilhar essas informações com os componentes filhos.
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null); //Armazena o id do usuário atualmente selecionado na tabela.

  const selecionarUsuario = (idUsuario) => {
    setUsuarioSelecionado(idUsuario);
  }; // A função selecionarUsuario recebe um valor (idUsuario) e o atualiza para o estado usuarioSelecionado através do setUsuarioSelecionado.

  const editarUsuario = () => {
    if (!usuarioSelecionado) {
      alert("Selecione um usuário para editar.");
      return;
    }

    axios
      .get(`http://localhost:3001/usuarios/${usuarioSelecionado}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Conteudo>
      {" "}
      {/*Elemento filho de UsuariosRegistrados, mas pai das tags a seguir (InputBusca, BotaoAdicionar, entre outros.*/}
      <Introducao>
        <Localizacao>
          Página Inicial &gt;&nbsp;
          <strong style={{ textDecoration: "underline" }}>Usuários</strong>
        </Localizacao>
        <TituloUsuarios>Usuários Registrados</TituloUsuarios>
        <ParagrafoUsuarios>
          Adicionar, editar, excluir e visualizar as informações de usuários
          registradas no banco de dados.
        </ParagrafoUsuarios>
      </Introducao>
      <BancoUsuarios>
        <OpcoesTabela>
          <InputBusca placeholder="Buscar usuários" />
          <BotaoAdicionar />
          <BotaoEditar onClick={editarUsuario}/>
          {/*Toda vez que o usuário selecionar outra linha, esse valor será atualizado automaticamente (Depois de clicar no checkbox do ID 8, usuarioSelecionado = 8) */}
          <BotaoExcluir />
        </OpcoesTabela>
        <Tabela
          usuarioSelecionado={usuarioSelecionado} //Informa qual linha da tabela está selecionada.
          selecionarUsuario={selecionarUsuario} //Envia a função para que a Tabela possa avisar ao componente pai quando outro usuário for selecionado.
        />
      </BancoUsuarios>
    </Conteudo>
  );
}

export default UsuariosRegistrados;
