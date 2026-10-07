import styled from "styled-components";
import FormularioComponent from "../components/Formulario/Formulario.js";

const FundoInterativo = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #101010;
`;

const Conteudo = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  min-height: 100vh;
`;

function Home() {
  return (
    <FundoInterativo>
      <Conteudo>
        <FormularioComponent />
      </Conteudo>
    </FundoInterativo>
  );
}

export default Home;
