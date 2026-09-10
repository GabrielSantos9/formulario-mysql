import {
  Wrapper,
  Input,
  Icone,
  Select,
  BotaoLimpar,
} from "../../components/Usuarios/styles";

const opcoes = [
  { id: "id", titulo: "Id" },
  { id: "email", titulo: "E-mail" },
  { id: "telefone", titulo: "Telefone" },
  { id: "genero", titulo: "Gênero" },
  { id: "dataNascimento", titulo: "Nascimento" },
  { id: "cidade", titulo: "Cidade" },
  { id: "estado", titulo: "Estado" },
];

function InputBusca({
  placeholder,
  tipoPesquisa,
  setTipoPesquisa,
  pesquisa,
  setPesquisa,
}) {
  const limparBusca = () => {
    setPesquisa("");
  };

  return (
    <Wrapper>
      <Select
        value={tipoPesquisa}
        onChange={(evento) => setTipoPesquisa(evento.target.value)}
      >
        {opcoes.map((opcao) => (
          <option key={opcao.id} value={opcao.id}>
            {opcao.titulo}
          </option>
        ))}
      </Select>

      <Input
        placeholder="Pesquisar..."
        tipoPesquisa={tipoPesquisa}
        setTipoPesquisa={setTipoPesquisa}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
      />

      {pesquisa && (
        <BotaoLimpar type="button" onClick={limparBusca}>
          ✕
        </BotaoLimpar>
      )}
    </Wrapper>
  );
}
export default InputBusca;
