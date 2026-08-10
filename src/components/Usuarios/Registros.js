//* Busca os usuários, exibe eles na tabela e permite selecionar um usuário para edição ou exclusão.

import axios from "axios";
import InputBusca from "./InputBusca";
import BotaoAdicionar from "./BotaoAdicionar";
import BotaoEditar from "./BotaoEditar";
import BotaoExcluir from "./BotaoExcluir";
import { useState, useEffect } from "react"; //useEffect: Executa efeitos colaterais em componentes funcionais, como buscar dados de uma API ou manipular o DOM.
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
import {
  mostrarSelecaoUsuario,
  mostrarAvisoEmailInvalido,
} from "../Formulario/aviso";

function UsuariosRegistrados() {
  //Elemento pai qresponsável por controlar o estado do usuário selecionado e compartilhar essas informações com os componentes filhos.
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null); //Armazena o id do usuário atualmente selecionado na tabela.
  const [usuarioEdicao, setUsuarioEdicao] = useState(null); //Guarda os dados coletados para serem editados.
  const [modalAberto, setModalAberto] = useState(false); //Responsável por controlar o modal.
  const [usuarios, setUsuarios] = useState([]); //Guarda os usuários que foram cadastrados.

  //*FUNÇÃO PARA BUSCAR USUÁRIOS DO BACKEND, ARMAZENAR NO ESTADO "usuarios" E EXIBIR NA TABELA DO SITE (http://localhost:3001/usuarios).
  const buscarUsuarios = () => {
    axios
      .get("http://localhost:3001/usuarios")
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    buscarUsuarios();
  }, []); // O useEffect é usado para buscar os dados dos usuários do backend quando o componente Tabela é montado. A função de callback dentro do useEffect faz uma requisição GET para a rota "/usuarios" do backend, e quando a resposta é recebida, os dados dos usuários são armazenados no estado "usuarios" usando a função setUsuarios. Se ocorrer algum erro durante a requisição, ele será registrado no console. O array vazio [] passado como segundo argumento garante que o efeito seja executado apenas uma vez, quando o componente é montado.

  const selecionarUsuario = (idUsuario) => {
    setUsuarioSelecionado(idUsuario);
  }; // A função selecionarUsuario recebe um valor (idUsuario) e o atualiza para o estado usuarioSelecionado através do setUsuarioSelecionado.

  const usuarioAtualizado = () => {
    setModalAberto(false); //Responsável por fechar o modal depois que o formulário confirmar que o usuário foi atualizado
    buscarUsuarios(); //Atualiza a tabela de usuários depois que o usuário for atualizado.
  };

  //* Função responsável por avisar ao usuário que ele precisa selecionar um usuário para ser editado.
  const editarUsuario = () => {
    if (!usuarioSelecionado) {
      mostrarSelecaoUsuario();
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
          usuarios={usuarios} //Envia os usuários cadastrados para a Tabela, para que ela possa exibir eles.
        />
        {modalAberto && (
          <ModalEditarUsuario
            usuario={usuarioEdicao}
            onAtualizado={usuarioAtualizado}
            onFechar={() => setModalAberto(false)} //Serve para fechar o modal, alterando o estado do modalAberto para 'false'.
          />
        )}
        {/*Após o modal ser aberto, será mostrado os dados do usuário selecionado. */}
      </BancoUsuarios>
    </Conteudo>
  );
}

export default UsuariosRegistrados;
