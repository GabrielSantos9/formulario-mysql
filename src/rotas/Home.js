import styled from "styled-components";
import FormularioComponent from "../components/Formulario/Formulario.js";
import FluidBackground from "../components/FluidBackground/FluidBackground.js";
import Cursor from "../components/Cursor/Cursor.js";
import Rodape from "../components/Rodape/Rodape.js";
import {responseFundoInterativo} from "./responsivo.js";

const FundoInterativo = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  cursor: none;

  ${responseFundoInterativo}
`;

const Conteudo = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  flex: 1; //Faz o Conteúdo principal ocupar o espaço disponível, enquanto o rodapé fica na parte inferior da tela.
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <FundoInterativo>
      <FluidBackground />
      <Cursor />
      <Conteudo>
        <FormularioComponent />
      </Conteudo>
      <Rodape />
    </FundoInterativo>
  );
}

export default Home;
