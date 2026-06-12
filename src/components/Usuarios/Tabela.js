import React from "react";
import {
  ContainerTabela,
  TabelaUsuarios,
  CabecalhoTabela,
  LinhaTabela,
  CelulaTabela,
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

            {/* <CorpoTabela>
              {usuarios.map((usuario) => (
                <LinhaTabela key={usuario.id}>
                  <CelulaDados>{usuario.nome}</CelulaDados>
                </LinhaTabela>
              ))}
            </CorpoTabela> */}
          </TabelaUsuarios>
        </ContainerTabela>
  );
}

export default Tabela;