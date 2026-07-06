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
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/usuarios")
      .then((response) => {
        console.log(response.data);
        setUsuarios(response.data);
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
            {colunas.map((coluna) => (
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
            <LinhaTabela key={usuario.id}>
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
