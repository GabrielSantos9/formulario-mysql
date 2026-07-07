import styled from "styled-components";

export const Conteudo = styled.div`
  display: flex;
`;

export const Introducao = styled.div`
  width: 417px;
  height: 257px;
  margin-top: 128px;
  margin-right: 222px;
`;

export const TituloIntroducao = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

export const ParagrafoIntroducao = styled.p`
  width: 379px;
  height: 112px;
  font-size: 23px;
  font-weight: 500;
`;

export const BotaoUsuarios = styled.a`
  width: 157px;
  height: 46px;
  background: linear-gradient(to right, #8000ff 0%, #4d0099 100%);
  max-width: 157px;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #8000ff, #4d0099);
  background-size: 200% 100%;
  background-position: left;
  transition: background-position 0.5s ease;

  &:hover {
    background-position: right;
  }
`;

export const Formulario = styled.form`
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

export const TituloFormulario = styled.span`
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

export const Input = styled.input`
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

export const CampoSexo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CampoIntrodutorio = styled.div`
display: flex;
justify-content: space-between;
`;

export const OpcoesSexo = styled.div`
  display: flex;
`;

export const TextSexo = styled.h2`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 7px;
`;

export const TextLimparSelecao = styled.h2`
  font-size: 13px;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
  color: #c9c9c9;

  &:hover {
    transition: 0.5s ease;
    color: white;
    font-weight: 500;
  }
`;

export const RadioInput = styled.input`
  margin-right: 5px;
  margin-left: 0px;
  margin-top: 0px;
  cursor: pointer;

  accent-color: #8000ff;
`;

export const Label = styled.label`
  margin-right: 30px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const DataNascimento = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TituloDataNascimento = styled.h2`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 7px;
  margin-right: 5px;
`;

export const InputDate = styled.input`
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

export const BotaoEnviar = styled.button`
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

export const Select = styled.select`
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

  option {
    background: #1f1f1f;
    color: white;
  }
`;