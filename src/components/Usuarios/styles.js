import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;

  border: 1px solid #555;
  border-radius: 8px;

  background: #101010;
`;

export const Icone = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Select = styled.select`
  height: 100%;
  padding: 0 10px;

  border: none;
  border-right: 1px solid #555;

  outline: none;

  background: transparent;
  color: white;

  cursor: pointer;

  option {
    background: #101010;
    color: white;
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 100%;

  padding: 0 12px;

  border: none;
  outline: none;

  background: transparent;
  color: white;

  &::placeholder {
    color: #888;
  }
`;

export const BotaoLimpar = styled.button`
  width: 40px;
  height: 100%;

  border: none;
  background: transparent;

  color: #888;
  font-size: 18px;

  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Introducao = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocalizacaoAnterior = styled.a`
  font-size: 13px;
  font-weight: 400;
  display: flex;
  color: #fff;
  text-decoration: none;
  &:hover {
    font-weight: bold;
    transition: 0.2s;
  }
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
  flex-direction: column;
  justify-content: flex-start;
`;

export const OpcoesTabela = styled.div`
  width: 1329px;
  height: 32px;
  display: flex;
  flex-direction: row;
  margin-top: 34px;
  margin-left: 42px;
`;

export const ContainerTabela = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 42px;
`;

export const TabelaUsuarios = styled.table`
  width: max-content;
  min-width: 100%;
  border-collapse: collapse;
`;

export const CabecalhoTabela = styled.thead`
  background-color: #333;
`;

export const LinhaTabela = styled.tr`
  &:nth-child(even) {
    background-color: #1f1f1f;
  }
`;

export const CelulaTabela = styled.th`
  padding: 16px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
`;

export const CorpoTabela = styled.tbody``;

export const CelulaCabecalho = styled.th`
  padding: 16px;
  text-align: left;
  white-space: nowrap;
`;

export const CelulaDados = styled.td`
  padding: 16px;
  white-space: nowrap;
`;

export const TotalResultados = styled.div`
  flex-direction: column;
  width: 30.75rem;
  font-size: 1rem;
  position: absolute;
  z-index: 2;
  top: 19.0625rem;
  display: flex;
  background-color: black;
`;

export const ResultadoPesquisa = styled.div`
  text-align: start;
  cursor: pointer;
  height: 3.75rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #002f52aa;
    transition: 0.7s ease;
  }
`;

export const TituloUsuario = styled.p`
  font-size: 1.25rem;
  padding-left: 0.9375rem;
`;
