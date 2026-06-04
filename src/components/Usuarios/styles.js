import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 400px;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  background-color: #333;
  border: none;
  padding-left: 30px;
  color: white;
  font-size: 15px;
`;

export const Icone = styled.svg`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Introducao = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Localizacao = styled.span`
  font-size: 13px;
  font-weight: 400;
  display: flex;
`;

export const TituloUsuarios = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 25px 0px 0px 0px;
`;

export const ParagrafoUsuarios = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 6px 0px 15px 0px;
`;

export const BancoUsuarios = styled.div`
  width: 1411px;
  height: 630px;
  background-color: rgba(41, 41, 41, 0.49);
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

export const OpcoesTabela = styled.div`
  width: 1329px;
  height: 32px;
  display: flex;
  flex-direction: row;
  margin-top: 34px;
`;