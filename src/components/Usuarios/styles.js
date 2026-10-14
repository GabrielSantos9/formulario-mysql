import styled from "styled-components";
import { ReactComponent as FilterIcon } from "../../imgs/filter_alt.svg";
import { ReactComponent as ArrowDropIcon } from "../../imgs/arrow_drop_down.svg";
import { ReactComponent as ZoomIcon } from "../../imgs/zoom_in.svg";

import { ReactComponent as ArrowRightIcon } from "../../imgs/keyboard_arrow_right.svg";

export const BarraPesquisa = styled.div`
  display: flex;
  align-items: center;
  margin-right: 264px;
  width: 592px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.fontColors.searchBorderColor};
  border-radius: 5px;
  background: ${({ theme }) => theme.backgroundColors.backgroundSearch};

  &:hover {
    transition: 0.3s;
    border: 1px solid ${({ theme }) => theme.fontColors.searchBorderHover};
  }
`;

export const ContainerFiltro = styled.div`
  position: relative;
  display: flex;
  height: 32px;
  align-items: center;
`;

export const IconeFiltro = styled(FilterIcon)`
  margin-left: 5px;
  margin-right: 2.5px;
`;

export const Filtro = styled.select`
  width: ${(props) => props.$width};
  border: none;
  border-right: 1px solid ${({ theme }) => theme.fontColors.searchBorderColor};
  outline: none;
  background: ${({ theme }) => theme.backgroundColors.backgroundSearch};
  appearance: none;
  color: ${({ theme }) => theme.fontColors.mainColor};
  font-size: 15px;
  cursor: pointer;

  option {
    background: ${({ theme }) => theme.backgroundColors.backgroundMain};
    color: ${({ theme }) => theme.fontColors.mainColor};
  }
`;

export const IconeSeta = styled(ArrowDropIcon)`
  position: absolute;
  pointer-events: none;
  right: 6px;
`;

export const IconeLupa = styled(ZoomIcon)`
  margin-left: 7px;
  margin-right: 6px;
  pointer-events: none;
`;

export const IconeSetaDireita = styled(ArrowRightIcon)`
  &,
  svg {
    width: 17px;
    height: 17px;
  }
`;

export const CampoPesquisa = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.backgroundColors.backgroundSearch};
  color: ${({ theme }) => theme.fontColors.mainColor};

  &::placeholder {
    color: ${({ theme }) => theme.fontColors.placeholderColor};
  }
`;

export const BotaoLimpar = styled.button`
  width: 40px;
  border: none;
  background: ${({ theme }) => theme.backgroundColors.backgroundSearch};
  color: ${({ theme }) => theme.fontColors.placeholderColor};
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.fontColors.mainColor};
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

export const HeaderTrilhaNavegacao = styled.div`
  display: flex;
`;

export const TrilhasNavecaoContainer = styled.nav`
  display: flex;
  align-items: center;
  align-self: flex-start;
  width: 100%;
`;

export const TrilhasNavecao = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavegacaoItem = styled.li`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const LocalizacaoAtual = styled.span`
  font-size: 13px;
  font-weight: 400;
  display: flex;
`;

export const LocalizacaoAnterior = styled.a`
  font-size: 13px;
  font-weight: 400;
  display: flex;
  color: ${({ theme }) => theme.fontColors.mainColor};
  text-decoration: none;

  &:hover {
    transition: 0.2s;
    text-decoration: underline;
  }
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
  background-color: ${({ theme }) => theme.backgroundColors.backgroundUsers};
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
  height: 100%;
  overflow-x: auto;
  margin-top: 42px;
`;

export const TabelaUsuarios = styled.table`
  width: max-content;
  min-width: 100%;
  border-collapse: collapse;
`;

export const CabecalhoTabela = styled.thead`
  background-color: ${({ theme }) => theme.backgroundColors.backgroundTableHeader};
`;

export const LinhaTabela = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.backgroundColors.backgroundTableRowEven};
  }
`;

export const CelulaTabela = styled.th`
  padding: 16px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
`;

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
  background-color: ${({ theme }) => theme.backgroundColors.backgroundSearchResults};
`;

export const ResultadoPesquisa = styled.div`
  text-align: start;
  cursor: pointer;
  height: 3.75rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColors.backgroundSearchResultHover};
    transition: 0.7s ease;
  }
`;

export const TituloUsuario = styled.p`
  font-size: 1.25rem;
  padding-left: 0.9375rem;
`;
