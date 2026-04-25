import styled from "styled-components";

const Conteudo = styled.div`
  display: flex;
`;

const Introducao = styled.div`
  width: 417px;
  height: 257px;
  margin-top: 128px;
  margin-right: 222px;
`;

function usuariosRegistrados() {
  return (
    <Conteudo>
      <Introducao>
        <h1>Usuários Registrados</h1>
        <p>Aqui você pode ver os usuários registrados no sistema.</p>
      </Introducao>
    </Conteudo>
  );
}

export default usuariosRegistrados;
