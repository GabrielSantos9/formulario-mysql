import styled from "styled-components";

const Botao = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
  color: white;
  font-weight: bold;
  font-family: "Montserrat", serif;

  justify-content: center;
  padding: 8.5px 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #b70000;
  background: linear-gradient(to right, #b70000 0%, #620000 60%);
  background-size: 200% 100%;
  background-position: left;
  transition: background-position 0.5s ease;
  &:hover {
    background-position: right;
    box-shadow: 0 4px 4px rgb(0 0 0 / 0.22);
  }
`;

function BotaoExcluir({onClick}) {
  return (
    <Botao onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-trash"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
      </svg>
      Excluir
    </Botao>
  );
}

export default BotaoExcluir;
