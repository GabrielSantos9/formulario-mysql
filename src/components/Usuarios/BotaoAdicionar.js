import styled from "styled-components";

const Botao = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
  color: white;
  font-weight: bold;
  margin-right: 40px;
  justify-content: center;
  padding: 8.5px 18px;
  background-color: #0C62F2;
  border-radius: 5px;
  border: none;
`;

function BotaoAdicionar() {
  return (
    <Botao>
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
      Novo Usuário
    </Botao>
  );
}

export default BotaoAdicionar;
