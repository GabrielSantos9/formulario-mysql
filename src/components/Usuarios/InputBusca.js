import {
  BarraPesquisa,
  CampoPesquisa,
  IconeFiltro,
  ContainerFiltro,
  Filtro,
  IconeSeta,
  BotaoLimpar,
} from "../../components/Usuarios/styles";

const opcoes = [
  { id: "id", titulo: "Id", placeholder: "Pesquisar pelo ID..." },
  {
    id: "nomeCompleto",
    titulo: "Nome",
    placeholder: "Pesquisar pelo Nome... ",
  },
  { id: "email", titulo: "E-mail", placeholder: "Pesquisar pelo E-mail..." },
  {
    id: "telefone",
    titulo: "Telefone",
    placeholder: "Pesquisar pelo Telefone...",
  },
  { id: "genero", titulo: "Gênero", placeholder: "Pesquisar pelo Gênero..." },
  {
    id: "dataNascimento",
    titulo: "Nascimento",
    placeholder: "Pesquisar pela Data de Nascimento (DIA/MÊS/ANO)...",
    width: "123px",
  },
  { id: "cidade", titulo: "Cidade", placeholder: "Pesquisar pela Cidade..." },
  { id: "estado", titulo: "Estado", placeholder: "Pesquisar pelo Estado..." },
];

function InputBusca({ tipoPesquisa, setTipoPesquisa, pesquisa, setPesquisa }) {
  const limparBusca = () => {
    setPesquisa("");
  };

  //* Função que muda a escrita do placeholder, com base no IconeFiltro selecionado.
  const placeholderAtual = opcoes.find(
    (opcao) => opcao.id === tipoPesquisa,
  )?.placeholder;

  const opcaoAtual = opcoes.find((opcao) => opcao.id === tipoPesquisa);

  return (
    <BarraPesquisa>
      <ContainerFiltro>
        <IconeFiltro />
        <Filtro
          value={tipoPesquisa}
          onChange={(evento) => setTipoPesquisa(evento.target.value)}
          $width={opcaoAtual?.width}
        >
          {opcoes.map((opcao) => (
            <option key={opcao.id} value={opcao.id}>
              {opcao.titulo}
            </option>
          ))}
        </Filtro>
        <IconeSeta />
      </ContainerFiltro>

      <CampoPesquisa
        placeholder={placeholderAtual}
        value={pesquisa}
        onChange={(evento) => setPesquisa(evento.target.value)}
      />

      {pesquisa && (
        <BotaoLimpar type="button" onClick={limparBusca}>
          ✕
        </BotaoLimpar>
      )}
    </BarraPesquisa>
  );
}
export default InputBusca;
