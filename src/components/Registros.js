import styled from "styled-components";
import axios from "axios"; //Ajuda a enviar os dados do formulário para o backend
import { useState, useEffect } from "react"; //Ajuda a armazenar os dados do formulário e a fazer requisições para o backend

const Conteudo = styled.div`
  display: flex;
`;

const Introducao = styled.div`
  width: 417px;
  height: 257px;
  margin-top: 128px;
  margin-right: 222px;
`;

const Localizacao = styled.span`
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 2px;
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
  width: 710px;
  height: 18px;
`;

function UsuariosRegistrados() {
  return (
    <Conteudo>
      <Introducao>
        <Localizacao>Página Inicial &gt;&nbsp;<strong style={{ textDecoration: 'underline' }}>Usuários</strong></Localizacao>
        <TituloUsuarios>Usuários Registrados</TituloUsuarios>
        <ParagrafoUsuarios>Adicionar, editar, excluir e visualizar as informações de usuários registradas no banco de dados.</ParagrafoUsuarios>
      </Introducao>
    </Conteudo>
  );
}

export default UsuariosRegistrados;
