import React, { useEffect, useState } from "react"; // useEffect: Executa efeitos colaterais em componentes funcionais, como buscar dados de uma API ou manipular o DOM.
import axios from "axios";

import {
  ContainerTabela,
  TabelaUsuarios,
  CabecalhoTabela,
  LinhaTabela,
  CelulaDados,
  CelulaCabecalho,
  CorpoTabela,
} from "./styles";

const colunas = [
  { id: "selecao", titulo: "", largura: "50px" },
  { id: "id", titulo: "Id", largura: "80px" },
  { id: "nome", titulo: "Nome Completo", largura: "250px" },
  { id: "email", titulo: "E-mail", largura: "300px" },
  { id: "telefone", titulo: "Telefone", largura: "180px" },
  { id: "genero", titulo: "Gênero", largura: "120px" },
  { id: "dataNascimento", titulo: "Data Nascimento", largura: "180px" },
  { id: "cidade", titulo: "Cidade", largura: "180px" },
  { id: "estado", titulo: "Estado", largura: "120px" },
  { id: "pais", titulo: "País", largura: "120px" },
];

function Tabela() {
  const [usuarios, setUsuarios] = useState([]); //Guarda os usuários cadastrados
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null); //Guarda apenas o selecionado para alguma ação do CRUD.
  //*FUNÇÃO PARA BUSCAR USUÁRIOS DO BACKEND, ARMAZENAR NO ESTADO "usuarios" E EXIBIR NA TABELA DO SITE (http://localhost:3001/usuarios).
  useEffect(() => {
    axios
      .get("http://localhost:3001/usuarios")
      .then((response) => {
        setUsuarios(response.data); //data: Contém os dados da resposta da requisição, que neste caso é a lista de usuários recebida do backend. O setUsuarios é a função que atualiza o estado "usuarios" com os dados recebidos do backend, permitindo que a tabela seja renderizada com as informações corretas.
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // O useEffect é usado para buscar os dados dos usuários do backend quando o componente Tabela é montado. A função de callback dentro do useEffect faz uma requisição GET para a rota "/usuarios" do backend, e quando a resposta é recebida, os dados dos usuários são armazenados no estado "usuarios" usando a função setUsuarios. Se ocorrer algum erro durante a requisição, ele será registrado no console. O array vazio [] passado como segundo argumento garante que o efeito seja executado apenas uma vez, quando o componente é montado.

  return (
    <ContainerTabela>
      <TabelaUsuarios>
        <CabecalhoTabela>
          <LinhaTabela>
            <CelulaCabecalho style={{ minWidth: "50px" }}>
              <input type="checkbox" />
            </CelulaCabecalho>

            {colunas
              .filter((coluna) => coluna.id !== "selecao")
              .map((coluna) => (
                <CelulaCabecalho
                  key={coluna.id}
                  style={{ minWidth: coluna.largura }}
                >
                  {coluna.titulo}
                </CelulaCabecalho>
              ))}
          </LinhaTabela>
        </CabecalhoTabela>
        <CorpoTabela>
          {usuarios.map((usuario) => (
            <LinhaTabela key={usuario.idusuarios}>
              <CelulaDados>
                <input type="checkbox" />
              </CelulaDados>
              <CelulaDados>{usuario.idusuarios}</CelulaDados>
              <CelulaDados>{usuario.nomeCompleto}</CelulaDados>
              <CelulaDados>{usuario.email}</CelulaDados>
              <CelulaDados>{usuario.telefone}</CelulaDados>
              <CelulaDados>{usuario.genero}</CelulaDados>
              <CelulaDados>
                {new Date(usuario.data_nascimento).toLocaleDateString("pt-BR")}
              </CelulaDados>
              <CelulaDados>{usuario.cidade}</CelulaDados>
              <CelulaDados>{usuario.estado}</CelulaDados>
              <CelulaDados>{usuario.pais}</CelulaDados>
            </LinhaTabela>
          ))}
        </CorpoTabela>
      </TabelaUsuarios>
    </ContainerTabela>
  );
}

export default Tabela;
