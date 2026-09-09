import { Wrapper, Input, Icone } from "./styles";
import { useEffect, useState } from "react";
import { getUsuarios } from "../../services/usuarioAPI";
import {
  TotalResultados,
  ResultadoPesquisa,
  TituloUsuario,
} from "../../components/Usuarios/styles";

function InputBusca({ placeholder }) {
  const [usuariosPesquisados, setUsuariosPesquisados] = useState([]);
  const [usuarios, setUsuarios] = useState([]); //estado para armazenar os usuários pesquisados.

  useEffect(() => {
    fetchUsuarios();
  }, []);

  async function fetchUsuarios() {
    const UsuariosDaAPI = await getUsuarios(); //Pegará os usuários da API.
    setUsuarios(UsuariosDaAPI); //Adicionará os usuários da API no estado setUsuarios.
  }

  return (
    <>
      <Wrapper>
        <Icone width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2" />
          <line
            x1="20"
            y1="20"
            x2="16.5"
            y2="16.5"
            stroke="white"
            strokeWidth="2"
          />
        </Icone>

        <Input
          placeholder={placeholder}
          onChange={(evento) => {
            const textoDigitado = evento.target.value; //pega o valor digitado no input pelo usuário.

            if (textoDigitado.length === 0) {
              //Caso não seja digitado nada pelo usuário não apareça nenhum resultado.
              setUsuariosPesquisados([]); //atualiza o estado usuariosPesquisados para um array vazio.
              return;
            }

            const resultadosPesquisa = usuarios.filter(
              (
                usuarios, //cria uma nova array 'resultadosPesquisa' que contém os usuarios que correspondem ao texto digitado.
              ) =>
                usuarios.nomeCompleto
                  .toLowerCase()
                  .includes(textoDigitado.toLowerCase()), //faz a busca ser case insensitive, ou seja, não diferencia maiúsculas de minúsculas.
            ); //O 'filter' filtra os usuarios que contém o texto digitado no nome. Como ele filtra o usuário pesquisado? o 'filter' vai percorrer o array 'usuarios' e para cada 'usuário', ele verifica se o nome do usuário (usuarios.nomeCompleto) inclui o texto digitado (textoDigitado). Se incluir, esse usuário é adicionado ao novo array 'resultadosPesquisa'.
            // O 'includes' verifica se o texto digitado está presente no nome do usuário.
            setUsuariosPesquisados(resultadosPesquisa); //atualiza o estado usuariosPesquisados com os resultados da pesquisa.
          }}
        />
      </Wrapper>

      <TotalResultados>
        {usuariosPesquisados.map(
          (
            usuarios, //mapeia o array usuariosPesquisados para exibir cada usuário encontrado na pesquisa.
          ) => (
            <ResultadoPesquisa key={usuarios.id}>
              <TituloUsuario>{usuarios.nomeCompleto}</TituloUsuario>
              {console.log("Teste")}
              {/* exibe o nome do usuário encontrado. */}
            </ResultadoPesquisa>
          ),
        )}
      </TotalResultados>
    </>
  );
}

export default InputBusca;
