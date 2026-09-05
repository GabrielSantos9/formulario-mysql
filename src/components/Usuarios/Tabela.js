//*ESSE ARQUIVO RECEBE OS USUÁRIOS E EXIBE ELES!

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

const selecionarTodosUsuarios = () => {
  if (usuariosSelecionados.length === usuarios.length) {
    // Verifica se todos os usuários estão selecionados. Se estiverem, a função limpa a seleção, removendo todos os ids do array de usuários selecionados.
    setUsuariosSelecionados([]); // Limpa a seleção de usuários, removendo todos os ids do array de usuários selecionados.
    return;
  }

  setUsuariosSelecionados(usuarios.map((usuario) => usuario.idusuarios)); // Se nem todos os usuários estiverem selecionados, a função seleciona todos os usuários, adicionando todos os ids ao array de usuários selecionados. O método map() é usado para criar um novo array contendo apenas os ids dos usuários.
};

function Tabela({ usuariosSelecionados, selecionarUsuario, usuarios }) {
  return (
    <ContainerTabela>
      <TabelaUsuarios>
        <CabecalhoTabela>
          <LinhaTabela>
            <CelulaCabecalho style={{ minWidth: "50px" }}>
              <input type="checkbox" />
            </CelulaCabecalho>

            {colunas
              .filter((coluna) => coluna.id !== "selecao") // Filtra o array colunas, tém apenas as colunas cujo id seja diferente de "selecao".
              .map((coluna) => (
                <CelulaCabecalho
                  key={coluna.id} // A chave única para cada célula do cabeçalho, necessária para o React identificar quais itens foram alterados, adicionados ou removidos. A key serve para o React identificar quais itens mudaram, foram inseridos ou removidos sem ter que refazer a tela inteira. Na prática deste código, se eu ordenar a tabela por nome, deletar um usuário ou esconder uma coluna, o React usa o id da coluna e do usuário para mexer apenas nas linhas e células exatas que sofreram a ação, deixando a tabela rápida e performática."
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
                <input
                  type="checkbox"
                  checked={
                    usuarios.length > 0 && // Evitar que o checkbox apareça como selecionado quando a tabela ainda não possui usuários.
                    usuariosSelecionados.length === usuarios.length // Faz com que ele fique marcado quando todos os usuários estiverem selecionados.
                  }
                  onChange={selecionarTodosUsuarios}
                />
              </CelulaDados>
              <CelulaDados>{usuario.idusuarios}</CelulaDados>
              <CelulaDados>{usuario.nomeCompleto}</CelulaDados>
              <CelulaDados>{usuario.email}</CelulaDados>
              <CelulaDados>{usuario.telefone}</CelulaDados>
              <CelulaDados>{usuario.genero}</CelulaDados>
              <CelulaDados>
                {new Date(usuario.dataNascimento).toLocaleDateString("pt-BR")}
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
