import styled from "styled-components";
import FormularioComponent from "../components/Formulario/Formulario.js";
import FluidBackground from "../components/FluidBackground/FluidBackground.js";

const FundoInterativo = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  overflow: hidden;
  background: #101010;
`;

const Conteudo = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <FundoInterativo>
      <FluidBackground />
      <Conteudo>
        <FormularioComponent />
      </Conteudo>
    </FundoInterativo>
  );
}

export default Home;
