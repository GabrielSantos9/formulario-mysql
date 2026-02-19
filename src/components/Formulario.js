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

const TituloIntroducao = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

const ParagrafoIntroducao = styled.p`
  width: 333px;
  height: 112px;
  font-size: 23px;
  font-weight: 500;
`;

const BotaoCadastro = styled.button`
  width: 157px;
  height: 46px;
  background: linear-gradient(to right, #8000ff 0%, #4d0099 100%);
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 8px;

  font-size: 20px;
  font-weight: 700;
`;

const Formulario = styled.form`
  display: flex;
  width: 390px;
  height: 631px;
  background-color: rgba(41, 41, 41, 0.49);
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
`;

const TituloFormulario = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: -1.875rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0.187rem;
    top: 100%;
    margin-top: 8px;
    width: 4.875rem;
    height: 0.5rem;
    background: linear-gradient(to right, #8000ff 0%, #4d0099 100%);
  }
`;

const CampoFormulario = styled.input`
  width: 318px;
  height: 40px;
  border-radius: 5px;
`;

function FormularioComponent() {
  return (
    <Conteudo>
      <Introducao>
        <TituloIntroducao>Formulário de Teste</TituloIntroducao>
        <ParagrafoIntroducao>
          Esse é um formulário teste, com a finalidade de testar o banco de
          dados MySQL, preencha todos os campos na lateral!
        </ParagrafoIntroducao>
        <BotaoCadastro>Cadastra-se</BotaoCadastro>
      </Introducao>
      <Formulario>
        <TituloFormulario>Informações</TituloFormulario>
        <CampoFormulario type="text" placeholder="Nome Completo" />
      </Formulario>
    </Conteudo>
  );
}

export default FormularioComponent;
