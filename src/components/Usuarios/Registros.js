//* Busca os usuários, exibe eles na tabela e permite selecionar um usuário para edição ou exclusão.

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
  LocalizacaoAnterior,
  TituloUsuarios,
  ParagrafoUsuarios,
  BancoUsuarios,
  OpcoesTabela,
} from "./styles";
import ModalEditarUsuario from "./ModalEditarUsuario";
import {
  mostrarSelecaoUsuarioEdicao,
  mostrarSelecaoUsuarioExclusao,
  mostrarAvisoExclusao,
  mostrarAvisoErroExclusao,
  mostrarAvisoConfirmacaoExclusao,
} from "../Formulario/aviso";
import {
  buscaUsuarios,
  buscarUsuarioPorId,
  deletarUsuarioPorID,
} from "../../services/usuarioService";

function UsuariosRegistrados() {
  //Elemento pai qresponsável por controlar o estado do usuário selecionado e compartilhar essas informações com os componentes filhos.
  const [usuariosSelecionados, setUsuariosSelecionados] = useState([]); //Armazena os ids dos usuários selecionados na tabela.
  const [usuarioEdicao, setUsuarioEdicao] = useState(null); //Guarda os dados coletados para serem editados.
  const [modalAberto, setModalAberto] = useState(false); //Responsável por controlar o modal.
  const [usuarios, setUsuarios] = useState([]); //Guarda os usuários que foram cadastrados.

  //*FUNÇÃO PARA BUSCAR USUÁRIOS DO BACKEND, ARMAZENAR NO ESTADO "usuarios" E EXIBIR NA TABELA DO SITE (http://localhost:3001/usuarios).
  const buscarUsuarios = () => {
    buscaUsuarios()
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

  const editarUsuario = () => {
    if (usuariosSelecionados.length === 0) {
      mostrarSelecaoUsuarioEdicao();
      return;
    }

    if (usuariosSelecionados.length > 1) {
      mostrarAvisoMaisDeUmUsuarioEdicao();
      return;
    }

    const idUsuario = usuariosSelecionados[0]; // Pega o id do usuário selecionado para edição, que é o primeiro elemento do array de usuários selecionados. O array usuariosSelecionados pode conter apenas um id, pois a função editarUsuario só permite a edição de um usuário por vez. O id do usuário selecionado é usado para buscar os dados do usuário no backend e exibi-los no modal de edição.

    //*FUNÇÃO PARA BUSCAR OS DADOS DO USUÁRIO SELECIONADO, ARMAZENAR NO ESTADO "usuarioEdicao" E ABRIR O MODAL DE EDIÇÃO (http://localhost:3001/usuarios/:id).
    buscarUsuarioPorId(idUsuario)
      .then((response) => {
        //Faz uma requisição GET para o endpoint da API, passando o id do usuário selecionado. then() é chamado quando a requisição é bem-sucedida, recebendo a resposta da API como argumento (response).
        setUsuarioEdicao(response.data); //Armaena os dados do usuário selecionado no checkbox no estado usuarioEdicao, para serem utiliados no modal de edição
        setModalAberto(true); //Abre o modal de edição, alterando o estado do modalAberto para true.
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const excluirUsuarioPorID = () => {
    if (usuariosSelecionados.length === 0) {
      mostrarSelecaoUsuarioExclusao();
      return;
    }
    mostrarAvisoConfirmacaoExclusao(usuarioSelecionado).then((result) => {
      if (result.isConfirmed) {
        deletarUsuarioPorID(usuarioSelecionado)
          .then((response) => {
            mostrarAvisoExclusao();
            buscarUsuarios(); //Atualiza a tabela de usuários depois que o usuário for excluído.
          })
          .catch((error) => {
            mostrarAvisoErroExclusao();
            console.error(error);
          });
        return;
      } else if (result.isDismissed) {
      }
    });
  };

  const selecionarUsuarioExclusao = (idUsuario) => {
    setUsuariosSelecionados((selecionados) => {
      // Atualiza o estado "usuariosSelecionados" com base no id do usuário selecionado para exclusão. A função recebe o id do usuário (idUsuario) e verifica se ele já está presente no array de usuários selecionados (selecionados). Se estiver, ele é removido do array; caso contrário, é adicionado ao array. O operador spread (...) é usado para criar um novo array com os elementos existentes e adicionar o novo id do usuário.
      if (selecionados.includes(idUsuario)) {
        return selecionados.filter((id) => id !== idUsuario);
      } // Se o id do usuário já estiver presente no array de usuários selecionados, ele é removido usando o método filter(), que cria um novo array contendo apenas os ids diferentes do id do usuário selecionado.

      return [...selecionados, idUsuario]; //
    });
  };

  return (
    <Conteudo>
      {/*Elemento filho de UsuariosRegistrados, mas pai das tags a seguir (InputBusca, BotaoAdicionar, entre outros.*/}
      <Introducao>
        <Localizacao>
          <LocalizacaoAnterior href="http://localhost:3000">
            Página Inicial
          </LocalizacaoAnterior>{" "}
          &gt;&nbsp;
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
          <BotaoExcluir onClick={excluirUsuarioPorID} />
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
