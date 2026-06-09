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
  TabelaUsuarios,
  CabecalhoTabela,
  LinhaTabela,
  CelulaTabela,
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
        <TabelaUsuarios>
          <CabecalhoTabela>
            <LinhaTabela>
              <CelulaTabela>Id</CelulaTabela>
              <CelulaTabela>Nome Completo</CelulaTabela>
              <CelulaTabela>E-mail</CelulaTabela>
              <CelulaTabela>Telefone</CelulaTabela>
              <CelulaTabela>Gênero</CelulaTabela>
              <CelulaTabela>Data de Nascimento</CelulaTabela>
              <CelulaTabela>Cidade</CelulaTabela>
              <CelulaTabela>Estado</CelulaTabela>
              <CelulaTabela>País</CelulaTabela>
            </LinhaTabela>
          </CabecalhoTabela>
        </TabelaUsuarios>
      </BancoUsuarios>
    </Conteudo>
  );
}

export default UsuariosRegistrados;
