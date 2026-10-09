import styled from "styled-components";
import UsuariosRegistrados from "../components/Usuarios/Registros";
import Rodape from "../components/Rodape/Rodape.js";

const ConteudoGeral = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Conteudo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Usuarios() {
  return (
    <ConteudoGeral>
      <Conteudo>
        <UsuariosRegistrados />
      </Conteudo>
      <Rodape />
    </ConteudoGeral>
  );
}

export default Usuarios;
