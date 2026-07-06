import React from "react";
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

const usuarios = [
  {
    id: 1,
    nomeCompleto: "Gabriel Santos",
    email: "gabriel.santos@email.com",
    telefone: "(11) 99999-1111",
    genero: "Masculino",
    dataNascimento: "26/10/2003",
    cidade: "Guarulhos",
    estado: "SP",
    pais: "Brasil",
  },
  {
    id: 2,
    nomeCompleto: "Mariana Oliveira",
    email: "mariana.oliveira@email.com",
    telefone: "(11) 98888-2222",
    genero: "Feminino",
    dataNascimento: "15/03/1998",
    cidade: "São Paulo",
    estado: "SP",
    pais: "Brasil",
  },
  {
    id: 3,
    nomeCompleto: "Carlos Ferreira",
    email: "carlos.ferreira@email.com",
    telefone: "(21) 97777-3333",
    genero: "Masculino",
    dataNascimento: "08/07/1995",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    pais: "Brasil",
  },
  {
    id: 4,
    nomeCompleto: "Ana Souza",
    email: "ana.souza@email.com",
    telefone: "(31) 96666-4444",
    genero: "Feminino",
    dataNascimento: "22/11/2000",
    cidade: "Belo Horizonte",
    estado: "MG",
    pais: "Brasil",
  },
  {
    id: 5,
    nomeCompleto: "Pedro Almeida",
    email: "pedro.almeida@email.com",
    telefone: "(41) 95555-5555",
    genero: "Masculino",
    dataNascimento: "10/01/1992",
    cidade: "Curitiba",
    estado: "PR",
    pais: "Brasil",
  },
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
        <CorpoTabela>
          {usuarios.map((usuario) => (
            <LinhaTabela key={usuario.id}>
              <CelulaDados>{usuario.id}</CelulaDados>
              <CelulaDados>{usuario.nomeCompleto}</CelulaDados>
              <CelulaDados>{usuario.email}</CelulaDados>
              <CelulaDados>{usuario.telefone}</CelulaDados>
              <CelulaDados>{usuario.genero}</CelulaDados>
              <CelulaDados>{usuario.dataNascimento}</CelulaDados>
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
