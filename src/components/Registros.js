import styled from "styled-components";
import axios from "axios"; //Ajuda a enviar os dados do formulário para o backend
import { useState, useEffect } from "react"; //Ajuda a armazenar os dados do formulário e a fazer requisições para o backend

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

const CampoBusca = styled.input`
  width: 400px;
  height: 32px;
  background-color: #333;
  border: none;
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
          <CampoBusca placeholder="Buscar usuários" />
        </OpcoesTabela>
      </BancoUsuarios>
    </Conteudo>
  );
}

export default UsuariosRegistrados;
