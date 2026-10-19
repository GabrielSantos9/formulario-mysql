import styled from "styled-components";

export const Conteudo = styled.div`
  display: flex;
`;

export const Introducao = styled.div`
  width: 417px;
  margin-top: 128px;
  margin-right: 222px;
`;

export const TituloIntroducao = styled.h1`
  font-size: clamp(20px, calc(16px + 1.25vw), 40px);
  font-weight: bold;
`;

export const ParagrafoIntroducao = styled.p`
  width: 379px;
  height: 112px;
  font-size: clamp(14px, calc(12.2px + 0.5625vw), 23px);
  font-weight: 500;
  color: ${({ theme }) => theme.fontColors.paragraphColor};
`;

export const BotaoUsuarios = styled.a`
  width: 157px;
  height: 46px;
  max-width: 157px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.fontColors.mainColor};
  border-radius: 8px;
  font-size: 20px;
  /* font-size: clamp(14px, calc(12.8px + 0.375vw), 20px); */
  font-weight: 700;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.buttonUsuariosColors.backgroundButton};
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
  justify-content: flex-start;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px 0px 0px;

  background-color: ${({ theme, modo }) =>
    modo === "edicao"
      ? theme.backgroundColors.backgroundFormEdit
      : theme.backgroundColors.backgroundForm};
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
    background: ${({ theme }) => theme.buttonUsuariosColors.backgroundButton};
  }
`;

export const CampoInput = styled.div`
  position: relative;
  width: 318px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 318px;
  height: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColors.backgroundInput};
  border: none;
  font-size: 15px;
  font-weight: 500;
  padding: 10px;
  color: ${({ theme }) => theme.fontColors.mainColor};

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
      linear-gradient(
          ${({ theme }) => theme.backgroundColors.backgroundInputFocus},
          ${({ theme }) => theme.backgroundColors.backgroundInputFocus}
        )
        padding-box,
      ${({ theme }) => theme.outherColors.borderGradient} border-box;
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: 0px;
    font-size: 12px;
    color: ${({ theme }) => theme.outherColors.borderForm};
    background-color: ${({ theme }) =>
      theme.backgroundColors
        .backgroundFieldName}; /* Fundo escuro para cobrir a borda atrás do texto */
    padding: 0 4px; /* Pequeno espaçamento nas laterais do texto */
  }

  &#input-pais {
    background-color: ${({ theme }) =>
      theme.backgroundColors.backgroundDisabled};
    color: ${({ theme }) => theme.fontColors.disabledColor};
    cursor: "not-allowed";
  }
`;

export const InputPais = styled.input`
  width: 318px;
  height: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColors.backgroundInput};
  border: none;
  font-size: 15px;
  font-weight: 500;
  padding: 10px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.fontColors.mainColor};

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
  }

  &::placeholder {
    color: ${({ theme }) => theme.fontColors.secondaryColor};
  }

  &#input-pais {
    background-color: ${({ theme }) =>
      theme.backgroundColors.backgroundDisabled};
    color: ${({ theme }) => theme.fontColors.disabledColor};
    cursor: "not-allowed";
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.fontColors.secondaryColor};
  transition: 0.2s ease;
  pointer-events: none;
`;

export const LabelOpcoes = styled.label`
  margin-right: 30px;

  &:last-of-type {
    margin-right: 0;
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
  color: ${({ theme }) => theme.fontColors.mutedColor};

  &:hover {
    transition: 0.5s ease;
    color: ${({ theme }) => theme.fontColors.mainColor};
    font-weight: 500;
  }
`;

export const RadioInput = styled.input`
  margin-right: 5px;
  margin-left: 0px;
  margin-top: 0px;
  cursor: pointer;

  accent-color: ${({ theme }) =>
    theme.formColors.radioAccent}; //Cor do botão de seleção (radio).
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
  background-color: ${({ theme }) => theme.backgroundColors.backgroundInput};
  border: none;
  font-size: 15px;
  color: ${({ theme }) => theme.fontColors.mainColor};

  &:focus {
    outline: none;
    border: 1px solid transparent;
    transition: 0.5s ease;

    background:
      linear-gradient(
          ${({ theme }) => theme.backgroundColors.backgroundInputFocus},
          ${({ theme }) => theme.backgroundColors.backgroundInputFocus}
        )
        padding-box,
      ${({ theme }) => theme.outherColors.borderGradient} border-box;
  }

  &::placeholder {
    color: ${({ theme }) => theme.fontColors.secondaryColor};
  }
`;

export const BotaoEnviar = styled.button`
  width: 318px;
  height: 40px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  color: ${({ theme }) => theme.fontColors.mainColor};
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  background: ${({ theme }) => theme.buttonUsuariosColors.backgroundButton};
  background-size: 200% 100%;
  background-position: left;
  transition: background-position 0.5s ease;

  &:hover {
    background-position: right;
  }

  margin-bottom: ${({ modo }) => (modo === "edicao" ? "25px" : "56px")};
`;

export const Select = styled.select`
  width: 318px;
  height: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColors.backgroundInput};
  border: none;
  font-size: 15px;
  font-weight: 500;
  padding: 10px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.fontColors.mainColor};
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
      linear-gradient(
          ${({ theme }) => theme.backgroundColors.backgroundInputFocus},
          ${({ theme }) => theme.backgroundColors.backgroundInputFocus}
        )
        padding-box,
      ${({ theme }) => theme.outherColors.borderGradient} border-box;
  }

  &::placeholder {
    color: ${({ theme }) => theme.fontColors.secondaryColor};
  }

  option {
    background: ${({ theme }) => theme.backgroundColors.backgroundSelectOption};
    color: ${({ theme }) => theme.fontColors.mainColor};
  }
`;

export const FuncaoFechar = styled.a`
  color: ${({ theme }) => theme.fontColors.mainColor};
  text-decoration: underline;
  font-size: 14px;
  font-weight: 400;
  margin: 10px 0px 20px 0px;
  cursor: pointer;

  margin: ${({ modo }) =>
    modo === "edicao" ? "10px 0px 20px 0px" : "0px 0px 25px 0px"};
`;
