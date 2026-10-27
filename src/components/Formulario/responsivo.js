import { css } from "styled-components";

export const responsivoIntroducao = css`
  @media (max-width: 900px) {
    margin-top: 0px;
    margin-right: 0px;
  }
`;

export const responsivoParagrafoIntroducao = css`
  @media (max-width: 900px) {
    height: auto;
  }
`;

export const responsivoConteudo = css`
  @media (max-width: 765px) {
    flex-direction: column;
  }
`;

export const responsivoTituloIntroducao = css`
    @media (max-width: 765px) {
      display: flex;
      justify-content: center;
    }
`;
