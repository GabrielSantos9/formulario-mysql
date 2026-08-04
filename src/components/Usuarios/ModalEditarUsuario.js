import styled from "styled-components";

const Fundo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Janela = styled.div`
  width: 600px;
  background: white;
  border-radius: 8px;
  padding: 25px;
`;

function ModalEditarUsuario() {
  return (
    <Fundo>
      <Janela>
        <h2>Editar Usuário</h2>
      </Janela>
    </Fundo>
  );
}

export default ModalEditarUsuario;