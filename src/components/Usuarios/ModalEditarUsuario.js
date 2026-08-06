import styled from "styled-components";
import { useState, useEffect } from "react";

const Fundo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Janela = styled.div`
  width: 600px;
  background: white;
  border-radius: 8px;
  padding: 25px;
`;

//Recebe o 'usuario' como prop, que contém os dados do usuário selecionado no checkbox.
function ModalEditarUsuario({ usuario }) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [genero, setGenero] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [pais, setPais] = useState("");
  useEffect(() => {
    //O useEffect ajudará a atualizar os estados do modal sempre o usuário selecionado for alterado.
    if (usuario) {
      //Se o usuário selecionado existir, os estados do modal serão atualizados com os dados do usuário selecionado.
      setNomeCompleto(usuario.nomeCompleto);
      setEmail(usuario.email);
      setTelefone(usuario.telefone);
      setGenero(usuario.genero);
      setDataNascimento(usuario.data_nascimento);
      setCidade(usuario.cidade);
      setEstado(usuario.estado);
      setPais(usuario.pais);
    }
  }, [usuario]); // o '[usuarios]' no final do useEffect, é para executar novamente o useEffect sempre que o usuário selecionado for alterado, garantindo que os estados sempre estejam atualizados.
  return (
    <Fundo>
      <Janela>
        <h2>Editar Usuário</h2>
        <label>Nome Completo</label>
        <input
          type="text"
          value={nomeCompleto} // Exibe o valor do estado nomeCompleto no input.
          onChange={(e) => setNomeCompleto(e.target.value)} // Atualiza o estado do nomeCompleto sempre que o usuário digitar algo.
        />
        <label>E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Telefone</label>
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <label>Gênero</label>
        <div>
          <label>
            <input
              type="radio"
              name="genero"
              value="Masculino"
              checked={genero === "Masculino"}
              onChange={(e) => setGenero(e.target.value)}
            />
            Masculino
          </label>

          <label>
            <input
              type="radio"
              name="genero"
              value="Feminino"
              checked={genero === "Feminino"}
              onChange={(e) => setGenero(e.target.value)}
            />
            Feminino
          </label>

          <label>
            <input
              type="radio"
              name="genero"
              value="Outros"
              checked={genero === "Outros"}
              onChange={(e) => setGenero(e.target.value)}
            />
            Outros
          </label>
        </div>
        <label>Data de nascimento:</label>
        <input
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
        <label>País</label>
        <input
          type="text"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        />
        <label>Estado</label>
        <input value={estado} onChange={(e) => setEstado(e.target.value)} />
        <label>Cidade</label>
        <input value={cidade} onChange={(e) => setCidade(e.target.value)} />
      </Janela>
    </Fundo>
  );
}

export default ModalEditarUsuario;
