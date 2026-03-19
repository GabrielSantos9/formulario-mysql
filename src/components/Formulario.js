import styled from "styled-components";
import axios from "axios"; //Ajuda a enviar os dados do formulário para o backend
import { useState } from "react"; //Ajuda a armazenar os dados do formulário

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

  background: linear-gradient(to right, #8000ff, #4d0099);
  background-size: 200% 100%;
  background-position: left;
  transition: background-position 0.5s ease;

  &:hover {
    background-position: right;
  }
`;

const Formulario = styled.form`
  display: flex;
  padding-left: 36px;
  padding-right: 36px;
  height: 631px;
  background-color: rgba(41, 41, 41, 0.49);
  justify-content: flex-start;
  border-radius: 10px;
  flex-direction: column;
  align-items: flex-start;
`;

const TituloFormulario = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: -1.875rem;
  position: relative;
  display: inline-block;
  margin-bottom: 35px;
  align-self: center;

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

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

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

  &:last-of-type {
    margin-right: 0;
  }
`;

const DataNascimento = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const TituloDataNascimento = styled.h2`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 7px;
  margin-right: 5px;
`;

const InputDate = styled.input`
  width: 126px;
  height: 26px;
  padding: 0 8px;
  border-radius: 5px;
  background-color: rgba(41, 41, 41, 0.698);
  border: none;
  font-size: 15px;
  color: white;

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

const BotaoEnviar = styled.button`
  width: 318px;
  height: 40px;
  background: linear-gradient(to right, #8000ff 0%, #4d0099 100%);
  font-size: 20px;
  font-weight: 700;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  background: linear-gradient(to right, #8000ff, #4d0099);
  background-size: 200% 100%;
  background-position: left;
  transition: background-position 0.5s ease;

  &:hover {
    background-position: right;
  }
`;

function FormularioComponent() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault(); //Impede recarregar a página

    axios
      .post("http://localhost:3001/cadastrar", {
        nome,
        sobrenome,
        email,
        telefone,
        sexo,
        data_nascimento: dataNascimento,
        cidade,
        estado,
      })
      .then(() => {
        alert("Usuário cadastrado!");
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao cadastrar");
      });
  };

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
      <Formulario onSubmit={enviarFormulario}>
        <TituloFormulario>Informações</TituloFormulario>
        <Input
          type="text"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Sobrenome"
          onChange={(e) => setSobrenome(e.target.value)}
        />
        <Input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Telefone"
          onChange={(e) => setTelefone(e.target.value)}
        />
        <CampoSexo>
          <TextSexo>Sexo:</TextSexo>
          <OpcoesSexo>
            <RadioInput
              type="radio"
              name="sexo"
              id="masculino"
              value="Masculino"
              onChange={(e) => setSexo(e.target.value)}
            />
            <Label htmlFor="masculino">Masculino</Label>
            <RadioInput
              type="radio"
              name="sexo"
              id="feminino"
              value="Feminino"
              onChange={(e) => setSexo(e.target.value)}
            />
            <Label htmlFor="feminino">Feminino</Label>
            <RadioInput
              type="radio"
              name="sexo"
              id="outros"
              value="Outros"
              onChange={(e) => setSexo(e.target.value)}
            />
            <Label htmlFor="outros">Outros</Label>
          </OpcoesSexo>
        </CampoSexo>
        <DataNascimento>
          <TituloDataNascimento>Data de Nascimento:</TituloDataNascimento>
          <InputDate
            type="date"
            placeholder="dd/mm/aaaa"
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </DataNascimento>
        <Input type="text" placeholder="Cidade" onChange={(e) => setCidade(e.target.value)} />
        <Input type="text" placeholder="Estado" onChange={(e) => setEstado(e.target.value)} />
        <BotaoEnviar type="submit">Enviar</BotaoEnviar>
      </Formulario>
    </Conteudo>
  );
}

export default FormularioComponent;
