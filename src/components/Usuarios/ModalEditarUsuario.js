import styled from "styled-components";
import { useState, useEffect } from "react";
import FormularioComponent from "../Formulario/Formulario";

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
