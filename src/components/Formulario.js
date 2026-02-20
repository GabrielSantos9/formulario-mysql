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
  /* width: 390px; */
  padding-left: 36px;
  padding-right: 36px;
  height: 631px;
  background-color: rgba(41, 41, 41, 0.49);
  justify-content: flex-start;
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
  margin-bottom: 35px;

  &::after {
    content: "";
    position: absolute;
    left: 0.12rem;
    top: 70%;
    margin-top: 8px;
    width: 4.875rem;
    height: 0.5rem;
    background: linear-gradient(to right, #8000ff 0%, #4d0099 100%);
  }
`;

const Input = styled.input`
  width: 318px;
  height: 40px;
  border-radius: 5px;
  background-color: rgba(41, 41, 41, 0.698);
  border: none;
  font-size: 15px;
  font-weight: 500;
  padding: 10px;
  margin-bottom: 20px;
  color: #ffffff;

  &:focus {
    outline: none;
    border: 1px solid transparent;
    transition: 0.5s ease;

    background:
      linear-gradient(#252525, #252525) padding-box,
      linear-gradient(to right, #8000ff, #4d0099) border-box;
  }

  &::placeholder {
    color: #a1a1a1;
  }
`;

const CampoSexo = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpcoesSexo = styled.div`
display: flex;
`;

const TextSexo = styled.h2`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 7px;
`;

const RadioInput = styled.input`
  margin-right: 5px;
  margin-left: 0px;
  margin-top: 0px;
  cursor: pointer;

  accent-color: #8000ff;
`;

const Label = styled.label`
  margin-right: 30px;
`;

function FormularioComponent() {
  return (
    <Conteudo>
      <Introducao>
        <TituloIntroducao>Formulário de Teste</TituloIntroducao>
        <ParagrafoIntroducao>
          Esse é um formulário teste, com a finalidade de testar o banco de
          dados <strong>MySQL</strong>, preencha todos os campos na lateral!
        </ParagrafoIntroducao>
        <BotaoCadastro>Cadastra-se</BotaoCadastro>
      </Introducao>
      <Formulario>
        <TituloFormulario>Informações</TituloFormulario>
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="Sobrenome" />
        <Input type="text" placeholder="E-mail" />
        <Input type="text" placeholder="Telefone" />
        <CampoSexo>
          <TextSexo>Sexo:</TextSexo>
          <OpcoesSexo>
            <RadioInput type="radio" name="sexo" id="masculino" />
            <Label htmlFor="masculino">Masculino</Label>
            <RadioInput type="radio" name="sexo" id="feminino" />
            <Label htmlFor="feminino">Feminino</Label>
            <RadioInput type="radio" name="sexo" id="outros" />
            <Label htmlFor="outros">Outros</Label>
          </OpcoesSexo>
        </CampoSexo>
      </Formulario>
    </Conteudo>
  );
}

export default FormularioComponent;
