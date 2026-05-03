import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 400px;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  background-color: #333;
  border: none;
  padding-left: 30px;
  color: white;
`;

const Icone = styled.svg`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
`;

function InputBusca({ placeholder }) {
  return (
    <Wrapper>
      <Icone width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
        <line x1="20" y1="20" x2="16.5" y2="16.5" stroke="white" strokeWidth="2"/>
      </Icone>

      <Input placeholder={placeholder} />
    </Wrapper>
  );
}

export default InputBusca;