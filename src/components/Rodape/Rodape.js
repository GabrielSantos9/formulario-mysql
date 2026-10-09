import styled from "styled-components";

const RodapeContainer = styled.footer`
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  padding: 15px 0;
`;

const RodapeLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
`;

function Rodape() {
  return (
    <RodapeContainer>
      <p>© 2026 - <RodapeLink href="https://github.com/gabrielsantos9" target="_blank" rel="noopener noreferrer">GabrielSantos9</RodapeLink></p>
    </RodapeContainer>
  );
}
//noreferrer: ao incluir um link externo (github.com/gabrielsantos9), a intenção é o site externo não saber de onde o usuário veio, ou seja, não receber informações sobre a página de origem.

//noopener: uma medida de segurança que impede que a página aberta em uma nova aba tenha acesso à página original, evitando possíveis ataques de phishing ou manipulação do conteúdo da página original.

export default Rodape;
