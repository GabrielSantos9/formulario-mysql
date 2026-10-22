import styled from "styled-components";

export const ContainerGenero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TituloGenero = styled.h3`
  color: #ffffff;
  font-size: 1.25rem;
  font-family: sans-serif;
  margin: 0;
`;

export const ItemGenero = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const InputRadioGenero = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
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
    background-color: #121212;
  }
`;

export const TextoGenero = styled.span`
  color: #ffffff;
  font-size: 1.1rem;
  font-family: sans-serif;
`;
