import styled from "styled-components";

const Botao = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  margin-right: 40px;
  justify-content: center;
  font-family: "Montserrat", serif;
  padding: 8.5px 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background: linear-gradient(to right, #0c62f2 0%, #023a9b 60%);
  background-size: 200% 100%;
  background-position: left;
  transition: background-position 0.5s ease;

  &:hover {
    background-position: right;
    box-shadow: 0 4px 4px rgb(0 0 0 / 0.22);
  }
`;

function BotaoAdicionar() {
  return (
    <Botao href="http://localhost:3000/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        width="20"
        height="20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      Cadastrar
    </Botao>
  );
}

export default BotaoAdicionar;
