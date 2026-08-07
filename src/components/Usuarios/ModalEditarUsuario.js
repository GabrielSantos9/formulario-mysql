import styled from "styled-components";
import FormularioComponent from "../Formulario/Formulario";

const Fundo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Janela = styled.div`
`;

function ModalEditarUsuario({ usuario }) {
  return (
    <Fundo>
      <Janela>
        <FormularioComponent modo="edicao" usuario={usuario} />
      </Janela>
    </Fundo>
  );
}

export default ModalEditarUsuario;
