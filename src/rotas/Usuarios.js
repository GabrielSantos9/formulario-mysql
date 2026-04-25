import styled from "styled-components";
import usuariosRegistrados from "../components/Registros";

const Conteudo = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Usuarios() {
  return (
    <Conteudo>
      <usuariosRegistrados />
    </Conteudo>
  );
}

export default Usuarios;