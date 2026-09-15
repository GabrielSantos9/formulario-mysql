import {
  BarraPesquisa,
  CampoPesquisa,
  IconeFiltro,
  IconeLupa,
  ContainerFiltro,
  Filtro,
  IconeSeta,
  BotaoLimpar,
} from "../../components/Usuarios/styles";

const opcoes = [
  {
    id: "id",
    titulo: "ID",
    placeholder: "Pesquisar pelo ID...",
    width: "46px",
  },
  {
    id: "nomeCompleto",
    titulo: "Nome",
    placeholder: "Pesquisar pelo Nome... ",
    width: "76px",
  },
  {
    id: "email",
    titulo: "E-mail",
    placeholder: "Pesquisar pelo E-mail...",
    width: "78px",
  },
  {
    id: "telefone",
    titulo: "Telefone",
    placeholder: "Pesquisar pelo Telefone...",
    width: "93px",
  },
  {
    id: "genero",
    titulo: "Gênero",
    placeholder: "Pesquisar pelo Gênero...",
    width: "85px",
  },
  {
    id: "dataNascimento",
    titulo: "Nascimento",
    placeholder: "Pesquisar pela Data de Nascimento (DIA/MÊS/ANO)...",
    width: "121px",
  },
  {
    id: "cidade",
    titulo: "Cidade",
    placeholder: "Pesquisar pela Cidade...",
    width: "82px",
  },
  {
    id: "estado",
    titulo: "Estado",
    placeholder: "Pesquisar pelo Estado...",
    width: "81px",
  },
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

      <IconeLupa />
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
