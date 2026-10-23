import styled from "styled-components";

export const ContainerGenero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
`;

export const TituloGenero = styled.h3`
  color: #ffffff;
  font-size: clamp(14px, calc(13.8px + 0.0625vw), 15px);
  font-family: sans-serif;
  margin: 0;
`;

export const ItensGenero = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemGenero = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const InputRadioGenero = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #d9d9d9;
  cursor: pointer;
  display: grid;
  place-content: center;
  margin: 0;

  &:checked::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.formColors.radioAccent};
  }
`;

export const TextoGenero = styled.span`
  color: #ffffff;
  font-size: clamp(13px, calc(12.6px + 0.125vw), 15px);
  font-family: sans-serif;
`;
