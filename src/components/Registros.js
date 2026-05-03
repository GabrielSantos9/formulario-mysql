import styled from "styled-components";
import InputBusca from "./InputBusca";

const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Introducao = styled.div`
  display: flex;
  flex-direction: column;
`;

const Localizacao = styled.span`
  font-size: 13px;
  font-weight: 400;
  display: flex;
`;

const TituloUsuarios = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 25px 0px 0px 0px;
`;

const ParagrafoUsuarios = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 6px 0px 15px 0px;
`;

const BancoUsuarios = styled.div`
  width: 1411px;
  height: 630px;
  background-color: rgba(41, 41, 41, 0.49);
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

const OpcoesTabela = styled.div`
  width: 1329px;
  height: 32px;
  display: flex;
  flex-direction: row;
  margin-top: 34px;
`;

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
        </OpcoesTabela>
      </BancoUsuarios>
    </Conteudo>
  );
}

export default UsuariosRegistrados;
