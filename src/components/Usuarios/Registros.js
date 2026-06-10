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
  ContainerTabela,
  TabelaUsuarios,
  CabecalhoTabela,
  LinhaTabela,
  CelulaTabela,
} from "./styles";

const colunas = [
  { id: "id", titulo: "Id" },
  { id: "nome", titulo: "Nome Completo" },
  { id: "email", titulo: "E-mail" },
  { id: "telefone", titulo: "Telefone" },
  { id: "genero", titulo: "Gênero" },
  { id: "dataNascimento", titulo: "Data de Nascimento" },
  { id: "cidade", titulo: "Cidade" },
  { id: "estado", titulo: "Estado" },
  { id: "pais", titulo: "País" },
];

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
          <InputBusca placeholder="Buscar usuários" />
          <BotaoAdicionar />
          <BotaoEditar />
          <BotaoExcluir />
        </OpcoesTabela>
        <ContainerTabela>
          <TabelaUsuarios>
            <CabecalhoTabela>
              <LinhaTabela>
                {colunas.map((coluna) => (
                  <CelulaTabela key={coluna.id}>{coluna.titulo}</CelulaTabela>
                ))}
              </LinhaTabela>
            </CabecalhoTabela>
          </TabelaUsuarios>
        </ContainerTabela>
      </BancoUsuarios>
    </Conteudo>
  );
}

export default UsuariosRegistrados;
