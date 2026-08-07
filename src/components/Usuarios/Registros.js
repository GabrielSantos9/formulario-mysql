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
import ModalEditarUsuario from "./ModalEditarUsuario";

function UsuariosRegistrados() {
  //Elemento pai qresponsável por controlar o estado do usuário selecionado e compartilhar essas informações com os componentes filhos.
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null); //Armazena o id do usuário atualmente selecionado na tabela.
  const [usuarioEdicao, setUsuarioEdicao] = useState(null); //Guarda os dados coletados para serem editados.
  const [modalAberto, setModalAberto] = useState(false); //Responsável por controlar o modal.

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
        //Faz uma requisição GET para o endpoint da API, passando o id do usuário selecionado. then() é chamado quando a requisição é bem-sucedida, recebendo a resposta da API como argumento (response).
        setUsuarioEdicao(response.data); //Armaena os dados do usuário selecionado no checkbox no estado usuarioEdicao, para serem utiliados no modal de edição
        setModalAberto(true); //Abre o modal de edição, alterando o estado do modalAberto para true.
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Conteudo>
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
          <BotaoEditar onClick={editarUsuario} />
          {/*Toda vez que o usuário selecionar outra linha, esse valor será atualizado automaticamente (Depois de clicar no checkbox do ID 8, usuarioSelecionado = 8) */}
          <BotaoExcluir />
        </OpcoesTabela>
        <Tabela
          usuarioSelecionado={usuarioSelecionado} //Informa qual linha da tabela está selecionada.
          selecionarUsuario={selecionarUsuario} //Envia a função para que a Tabela possa avisar ao componente pai quando outro usuário for selecionado.
        />
        {modalAberto && <ModalEditarUsuario usuario={usuarioEdicao} />} {/*Após o modal ser aberto, será mostrado os dados do usuário selecionado. */}
      </BancoUsuarios>
    </Conteudo>
  );
}

export default UsuariosRegistrados;
