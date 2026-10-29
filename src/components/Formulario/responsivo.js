import { css } from "styled-components";

export const responsivoIntroducao = css`
  @media (max-width: 900px) {
    margin-top: 0px;
    margin-right: 0px;
  }

  @media (max-width: 765px) {
    width: auto;
  }

  @media (max-width: 400px) {
    width: 270px;
  }
`;

export const responsivoParagrafoIntroducao = css`
  @media (max-width: 900px) {
    height: auto;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const responsivoConteudo = css`
  @media (max-width: 765px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const responsivoTituloIntroducao = css`
  @media (max-width: 765px) {
    display: flex;
    justify-content: center;
  }
`;

export const responsivoBotaoUsuarios = css`
  @media (max-width: 765px) {
    margin-bottom: 100px;
  }
`;

export const responsivoSelect = css`
  @media (max-width: 653px) {
    height: auto;
  }
`;

export const responsivoFormulario = css`
  @media (max-width: 400px) {
    width: 270px;
  }
`;

export const responsivoContainerGenero = css`
  @media (max-width: 400px) {
    gap: 5px;
  }
`;

export const responsivoOpcoesGenero = css`
  @media (max-width: 400px) {
    flex-direction: column;

    & > :nth-child(n + 2) {
      margin-top: 12px;
    }
  }
`;
