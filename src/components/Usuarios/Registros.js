import InputBusca from "./InputBusca";
import BotaoAdicionar from "./BotaoAdicionar";
import BotaoEditar from "./BotaoEditar";
import BotaoExcluir from "./BotaoExcluir";
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
  return (
    <Conteudo>
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
          <InputBusca placeholder="Buscar usuários"/>
          <BotaoAdicionar />
          <BotaoEditar />
          <BotaoExcluir />
        </OpcoesTabela>
      </BancoUsuarios>
    </Conteudo>
  );
}

export default UsuariosRegistrados;
