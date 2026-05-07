import styled from "styled-components";
import FormularioComponent from "../components/Formulario/Formulario.js";

const Conteudo = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <Conteudo>
      <FormularioComponent />
    </Conteudo>
  );
}

export default Home;
