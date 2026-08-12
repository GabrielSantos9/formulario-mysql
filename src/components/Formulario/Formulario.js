import axios from "axios"; //Ajuda a enviar os dados do formulário para o backend
import { useState, useEffect } from "react"; //Ajuda a armazenar os dados do formulário e a fazer requisições para o backend
import {
  Conteudo,
  Introducao,
  TituloIntroducao,
  ParagrafoIntroducao,
  BotaoUsuarios,
  Formulario,
  TituloFormulario,
  CampoInput,
  Input,
  InputPais,
  CampoSexo,
  OpcoesSexo,
  TextSexo,
  RadioInput,
  Label,
  LabelOpcoes,
  DataNascimento,
  TituloDataNascimento,
  InputDate,
  BotaoEnviar,
  Select,
  CampoIntrodutorio,
  TextLimparSelecao,
} from "./styled";

import {
  mostrarAvisoPais,
  mostrarAvisoCidade,
  mostrarAvisoCadastro,
  mostrarAvisoEdicao,
  mostrarAvisoErroCadastro,
  mostrarAvisoErroEdicao,
  mostrarAvisoEmailDuplicado,
  mostrarAvisoNomeInvalido,
  mostrarAvisoEmailInvalido,
  mostrarAvisoTelefoneInvalido,
  mostrarAvisoNomeQntdMinima,
  mostrarAvisoNomeQntdMaxima,
  mostrarAvisoDataInvalida,
  mostrarAvisoDataFutura,
} from "./aviso";

import {
  validarNome,
  validarEmail,
  validarTelefone,
  validarData,
} from "./validacoes";

function FormularioComponent({
  modo = "cadastro", //Define o modo do formulario, que pode ser tanto "cadastro" quanto "edição", mas o modo padrão é o cadastro.
  usuario = null, //Caso o modo seja "edição", o usuário selecionado será passado como prop para o formulário, para que os campos do formulário sejam preenchidos com os dados do usuário selecionado.
  onAtualizado, // Avisará o Registro.js, informando que o usuário foi atualizado, para que ele possa atualizar a lista de usuários cadastrados.
}) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [genero, setGenero] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cidade, setCidade] = useState(""); // 'cidade': guarda o valor e 'setCidade': atualiza o valor do campo 'cidade'
  const [estado, setEstado] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const pais = "Brasil"; // O valor do país é fixo, então não precisa de um estado para armazenar o valor do país.
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]); // O 'setCidades' ele tem a função de apenas trocar a lista de cidades, quando um estado é selecionado, aí ele passa para a 'cidades', onde guarda a lista de cidades do estado selecionado.

  // *FUNÇÃO PARA ATUALIZAR O FORMULÁRIO COM OS DADOS DO USUÁRIO SELECIONADO PARA EDIÇÃO.
  useEffect(() => {
    if (modo === "edicao" && usuario) {
      setNomeCompleto(usuario.nomeCompleto);
      setEmail(usuario.email);
      setTelefone(usuario.telefone);
      setGenero(usuario.genero);

      setDataNascimento(
        usuario.data_nascimento ? usuario.data_nascimento.split("T")[0] : "",
      );

      setCidade(usuario.cidade);
      setEstado(usuario.estado);
    }
  }, [modo, usuario]);

  //*FUNÇÃO PARA BUSCAR USUÁRIOS DO BACKEND
  const buscarUsuarios = () => {
    //Função para buscar os usuários cadastrados no backend
    axios // o 'axios' é uma biblioteca que ajuda a fazer requisições HTTP para o backend. O 'axios.get' faz uma requisição GET para o backend, que é um pedido para buscar informações do backend. O 'http://localhost:3001/usuarios' é a URL do backend onde estão os usuários cadastrados. O 'then' é executado quando a requisição é bem-sucedida e o 'catch' é executado quando há algum erro na requisição.
      .get("http://localhost:3001/usuarios")
      .then((response) => {
        //Faz uma requisição GET para o backend para buscar os usuários cadastrados
        setUsuarios(response.data); //Armazena os usuários recebidos do backend no estado "usuarios"
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //*FUNÇÃO PARA BUSCAR ESTADOS DO BACKEND
  useEffect(() => {
    buscarUsuarios();

    axios
      .get("http://localhost:3001/estados")
      .then((response) => {
        setEstados(response.data); //Armazena os estados recebidos do backend no estado "estados". o 'setEstados' ele tem a função de apenas trocar a lista de estados, quando o componente é montado, aí ele passa para a 'estados', onde guarda a lista de estados cadastrados no backend. o response.data é a lista de estados recebidos do backend, que é um array de objetos, onde cada objeto representa um estado com suas propriedades (id e nome). O 'setEstados' atualiza o estado "estados" com a lista de estados recebidos do backend.
      }) // Faz uma requisição GET para o backend para buscar os estados cadastrados
      .catch((error) => {
        console.error(error);
      });
  }, []); // O useEffect acima é executado apenas uma vez, quando o componente é montado, e busca os estados do backend. O array vazio [] indica que não há dependências ou seja, a função será executada apenas na primeira renderização do componente.

  //*FUNÇÃO PARA BUSCAR CIDADES DE ACORDO COM O ESTADO SELECIONADO
  useEffect(() => {
    if (!estado) {
      setCidades([]);
      return;
    } // Se o estado não estiver selecionado, a lista de cidades é limpa e a função retorna sem fazer nada.

    //*FUNÇÃO PARA BUSCAR CIDADES DO BACKEND DE ACORDO COM O ESTADO SELECIONADO
    axios
      .get(`http://localhost:3001/cidades/${estado}`)
      .then((response) => {
        setCidades(response.data); // Armazena as cidades recebidas do backend no estado "cidades". o 'setCidades' ele tem a função de apenas trocar a lista de cidades, quando um estado é selecionado, aí ele passa para a 'cidades', onde guarda a lista de cidades do estado selecionado. o response.data é a lista de cidades recebidos do backend, que é um array de objetos, onde cada objeto representa uma cidade com suas propriedades (id e nome). O 'setCidades' atualiza o estado "cidades" com a lista de cidades recebidos do backend.
      }) // Faz uma requisição GET para o backend para buscar as cidades do estado selecionado. O estado selecionado é passado como parâmetro na URL da requisição. O backend retorna a lista de cidades do estado selecionado, que é armazenada no estado "cidades".
      .catch((error) => {
        console.error(error);
      });
  }, [estado]); // O useEffect acima é executado sempre que o estado selecionado é alterado. O array [estado] indica que a função será executada sempre que o valor do estado mudar.

  //*FUNÇÃO DE LIMPAR O FORMULÁRIO APÓS O ENVIO
  const limparFormulario = () => {
    setNomeCompleto("");
    setEmail("");
    setTelefone("");
    setGenero("");
    setDataNascimento("");
    setCidade("");
    setEstado("");
  };

  //*FUNÇÃO PARA ENVIAR O FORMULÁRIO PARA O BACKEND
  const enviarFormulario = (e) => {
    e.preventDefault(); //Impede recarregar a página ao enviar o formulário.

    if (modo === "edicao") {
      const dadosFormulario = {
        nomeCompleto,
        email,
        telefone,
        genero,
        data_nascimento: dataNascimento,
        cidade,
        estado,
        pais,
      };

      const resultadoNome = validarNome(nomeCompleto); // A função 'validarNome' recebe o valor do campo 'nomeCompleto' e retorna um objeto com a propriedade 'valido' (true ou false) e a propriedade 'erro' (uma string indicando o tipo de erro, se houver). O resultado da validação é armazenado na constante 'resultadoNome'.
      if (!resultadoNome.valido) {
        resultadoNome.erro === "MINIMO_CARACTERES" &&
          mostrarAvisoNomeQntdMinima();
        resultadoNome.erro === "MAXIMO_CARACTERES" &&
          mostrarAvisoNomeQntdMaxima();
        resultadoNome.erro === "CARACTERES_INVALIDOS" &&
          mostrarAvisoNomeInvalido("CARACTERES_INVALIDOS");
        return;
      }

      if (!validarEmail(email)) {
        mostrarAvisoEmailInvalido();
        return;
      }

      if (!validarTelefone(telefone)) {
        mostrarAvisoTelefoneInvalido();
        return;
      }

      const resultadoData = validarData(dataNascimento);
      if (!resultadoData.valido) {
        resultadoData.erro === "DATA_FUTURA" && mostrarAvisoDataFutura();
        return;
      }

      axios
        .put(
          `http://localhost:3001/usuarios/${usuario.idusuarios}`,
          dadosFormulario /* Envia os dados do formulário para o backend, para atualizar o usuário (editar).*/,
        )
        .then(() => {
          mostrarAvisoEdicao();
          onAtualizado(); // Avisará o Registro.js, informando que o usuário foi atualizado, para que ele possa atualizar a lista de usuários cadastrados.
        })
        .catch((error) => {
          console.error(error);
          mostrarAvisoErroEdicao();
        });

      return;
    }

    const resultadoNome = validarNome(nomeCompleto); // A função 'validarNome' recebe o valor do campo 'nomeCompleto' e retorna um objeto com a propriedade 'valido' (true ou false) e a propriedade 'erro' (uma string indicando o tipo de erro, se houver). O resultado da validação é armazenado na constante 'resultadoNome'.
    if (!resultadoNome.valido) {
      resultadoNome.erro === "MINIMO_CARACTERES" &&
        mostrarAvisoNomeQntdMinima();
      resultadoNome.erro === "MAXIMO_CARACTERES" &&
        mostrarAvisoNomeQntdMaxima();
      resultadoNome.erro === "CARACTERES_INVALIDOS" &&
        mostrarAvisoNomeInvalido("CARACTERES_INVALIDOS");
      return;
    }

    if (!validarEmail(email)) {
      mostrarAvisoEmailInvalido();
      return;
    }

    if (!validarTelefone(telefone)) {
      mostrarAvisoTelefoneInvalido();
      return;
    }

    if (!validarData(dataNascimento)) {
      mostrarAvisoDataInvalida();
      return;
    }

    //*ENVIA OS DADOS DO FORMULÁRIO PARA O BACKEND
    axios
      .post("http://localhost:3001/cadastrar", {
        nomeCompleto,
        email,
        telefone,
        genero,
        data_nascimento: dataNascimento,
        cidade,
        estado,
        pais,
      })
      .then(() => {
        mostrarAvisoCadastro();
        limparFormulario();
      }) // Se a requisição for bem-sucedida, mostra um aviso de sucesso e atualiza a lista de usuários cadastrados.
      .catch((err) => {
        if (err.response?.data?.erro === "EMAIL_DUPLICADO") {
          //err.response?.data?.erro: serve para capturar a mensagem de erro específica retornada pelo servidor em uma requisição HTTP mal-sucedida.
          mostrarAvisoEmailDuplicado();
          return;
        }
        mostrarAvisoErroCadastro();
      }); // Se houver algum erro na requisição, o catch é executado e mostra um aviso de erro no cadastro. Se o erro for de e-mail duplicado, mostra um aviso específico para isso.
  };

  const tratarNome = (e) => {
    let valor = e.target.value;

    valor = valor.replace(/^\s+/, "");

    valor = valor.replace(/\s{2,}/g, " ");

    setNomeCompleto(valor);
  };

  return (
    <Conteudo>
      {modo === "cadastro" && (
        <Introducao>
          <TituloIntroducao>Formulário de Teste</TituloIntroducao>
          <ParagrafoIntroducao>
            Esse é um formulário teste, com a finalidade de testar o banco de
            dados <strong>MySQL</strong>. Preencha todos os campos na lateral!
          </ParagrafoIntroducao>
          <BotaoUsuarios href="http://localhost:3000/usuarios">
            Usuários
          </BotaoUsuarios>
        </Introducao>
      )}
      <Formulario onSubmit={enviarFormulario} modo={modo}>
        <TituloFormulario>
          {modo === "edicao" ? "Editar usuário" : "Cadastro"}
        </TituloFormulario>
        <CampoInput>
          <Input
            type="text"
            placeholder=" "
            autoComplete="name"
            minLength="5"
            maxLength="80"
            required
            title="Digite seu nome completo (Nome e Sobrenome)."
            value={nomeCompleto}
            onChange={tratarNome}
          />
          <Label>Nome Completo</Label>
        </CampoInput>
        <CampoInput>
          <Input
            type="text"
            placeholder=" "
            value={email}
            minLength="5"
            maxLength="254"
            required
            title="Digite seu e-mail."
            onChange={(e) => setEmail(e.target.value.replace(/\s/g, ""))} // Remove espaços em branco do e-mail
          />
          <Label>E-mail</Label>
        </CampoInput>
        <CampoInput>
          <Input
            type="text"
            placeholder=" "
            required
            title="Digite seu telefone."
            value={telefone}
            onChange={(e) => {
              const valor = e.target.value.replace(/\D/g, "").slice(0, 11); // Remove todos os caracteres que não são dígitos e limita a 11 caracteres
              setTelefone(valor);
            }}
          />
          <Label>Telefone</Label>
        </CampoInput>
        <CampoSexo>
          <CampoIntrodutorio>
            <TextSexo title="Selecione seu gênero.">Gênero:</TextSexo>
            <TextLimparSelecao onClick={() => setGenero("")}>
              Limpar seleção
            </TextLimparSelecao>
          </CampoIntrodutorio>
          <OpcoesSexo>
            <RadioInput
              type="radio"
              name="genero"
              id="masculino"
              title="Se você for masculino, selecione esta opção."
              value="Masculino"
              required
              checked={genero === "Masculino"}
              onChange={(e) => setGenero(e.target.value)}
            />
            <LabelOpcoes htmlFor="masculino">Masculino</LabelOpcoes>
            <RadioInput
              type="radio"
              name="genero"
              id="feminino"
              title="Se você for feminino, selecione esta opção."
              value="Feminino"
              required
              checked={genero === "Feminino"}
              onChange={(e) => setGenero(e.target.value)}
            />
            <LabelOpcoes htmlFor="feminino">Feminino</LabelOpcoes>
            <RadioInput
              type="radio"
              name="genero"
              id="outros"
              title="Se você for outros, selecione esta opção."
              value="Outros"
              required
              checked={genero === "Outros"}
              onChange={(e) => setGenero(e.target.value)}
            />
            <LabelOpcoes htmlFor="outros">Outros</LabelOpcoes>
          </OpcoesSexo>
        </CampoSexo>
        <DataNascimento>
          <TituloDataNascimento title="Selecione sua data de nascimento.">
            Data de Nascimento:
          </TituloDataNascimento>
          <InputDate
            type="date"
            value={dataNascimento}
            required
            max={new Date().toISOString().split("T")[0]} // Define a data máxima como a data atual, para que o usuário não possa selecionar uma data futura.
            min="1900-01-01"
            title="Selecione sua data de nascimento."
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </DataNascimento>
        <InputPais
          type="text"
          value={pais}
          readOnly
          required
          id="input-pais"
          onClick={mostrarAvisoPais}
        />

        <Select
          value={estado}
          required
          onChange={(e) => setEstado(e.target.value)}
        >
          {/* // O 'setEstado' ele tem a função de apenas trocar o valor do estado selecionado, quando um estado é selecionado, aí ele passa para o 'estado', onde guarda o valor do estado selecionado. */}
          <option value="" required>
            Selecione um estado
          </option>
          {estados.map((estado) => (
            <option key={estado.id} value={estado.id}>
              {estado.nome}
            </option>
          ))}
          {/* // O 'estados.map' ele percorre a lista de estados e cria uma opção para cada estado, onde o 'estado.id' é o valor da opção e o 'estado.nome' é o texto da opção. */}
        </Select>

        <Select
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          onClick={() => mostrarAvisoCidade(estado)}
          required
        >
          <option value="" required>
            {/*o value está zerado, pois o usuário não consegue cadastrar o usuário se não tiver uma cidade selecionada */}
            Selecione uma cidade
          </option>

          {cidades.map((cidade) => (
            <option key={cidade.id} value={cidade.id}>
              {cidade.nome}
            </option>
          ))}
          {/*
          1. cidades.map(...): Percorre uma lista (array) de cidades que você buscou de um banco de dados ou API.
          2. (cidade) => ...: Para cada cidade encontrada nessa lista, ele executa o bloco de código de dentro.
          3. key={cidade.id}: É uma regra do React. Toda lista gerada dinamicamente precisa de um identificador único (key) para que o React saiba exatamente qual item atualizar se a lista mudar.
          4. value={cidade.id}: Define o valor interno que o sistema vai salvar (o ID da cidade).
          5. {cidade.nome}: É o texto que o usuário final vai ler na tela (o nome da cidade).
          */}
        </Select>

        <BotaoEnviar type="submit">
          {modo === "edicao" ? "Salvar Alterações" : "Enviar"}
        </BotaoEnviar>
      </Formulario>
    </Conteudo>
  );
}

export default FormularioComponent;
