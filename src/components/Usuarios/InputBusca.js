import styled from "styled-components";

import { Wrapper, Input, Icone } from "./styles";

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