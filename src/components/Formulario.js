import styled from "styled-components";

const Conteudo = styled.div`
  display: flex;
`;

const Formulario = styled.form`
  display: flex;
  width: 390px;
  height: 631px;
  background-color: rgba(41, 41, 41, 0.49);
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
      <Formulario></Formulario>
    </Conteudo>
  );
}

export default FormularioComponent;
