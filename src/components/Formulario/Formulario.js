import styled from "styled-components";
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
  Input,
  CampoSexo,
  OpcoesSexo,
  TextSexo,
  RadioInput,
  Label,
  DataNascimento,
  TituloDataNascimento,
  InputDate,
  BotaoEnviar,
  Select,
} from "./styled";

import mostrarAvisoPais from "./aviso"; // Importa a função mostrarAvisoPais do arquivo aviso.js

function FormularioComponent() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [genero, setGenero] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cidade, setCidade] = useState(""); // 'cidade': guarda o valor e 'setCidade': atualiza o valor do campo 'cidade'
  const [estado, setEstado] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [pais, setPais] = useState("");
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]); // O 'setCidades' ele tem a função de apenas trocar a lista de cidades, quando um estado é selecionado, aí ele passa para a 'cidades', onde guarda a lista de cidades do estado selecionado.

  const buscarUsuarios = () => {
    //Função para buscar os usuários cadastrados no backend
    axios
      .get("http://localhost:3001/usuarios")
      .then((response) => {
        //Faz uma requisição GET para o backend para buscar os usuários cadastrados
        setUsuarios(response.data); //Armazena os usuários recebidos do backend no estado "usuarios"
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    buscarUsuarios();

    axios
      .get("http://localhost:3001/estados")
      .then((response) => {
        setEstados(response.data); //Armazena os estados recebidos do backend no estado "estados"
      }) // Faz uma requisição GET para o backend para buscar os estados cadastrados
      .catch((error) => {
        console.error(error);
      });
  }, []); // O useEffect acima é executado apenas uma vez, quando o componente é montado, e busca os estados do backend. O array vazio [] indica que não há dependências ou seja, a função será executada apenas na primeira renderização do componente.

  useEffect(() => {
    if (!estado) {
      setCidades([]);
      return;
    } // Se o estado não estiver selecionado, a lista de cidades é limpa e a função retorna sem fazer nada.

    axios
      .get(`http://localhost:3001/cidades/${estado}`)
      .then((response) => {
        setCidades(response.data);
      }) // Faz uma requisição GET para o backend para buscar as cidades do estado selecionado. O estado selecionado é passado como parâmetro na URL da requisição. O backend retorna a lista de cidades do estado selecionado, que é armazenada no estado "cidades".
      .catch((error) => {
        console.error(error);
      });
  }, [estado]); // O useEffect acima é executado sempre que o estado selecionado é alterado. O array [estado] indica que a função será executada sempre que o valor do estado mudar.

  const enviarFormulario = (e) => {
    e.preventDefault(); //Impede recarregar a página
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
        alert("Usuário cadastrado!");
        buscarUsuarios(); // Atualiza a lista
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao cadastrar");
      });
  };

  return (
    <Conteudo>
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
      <Formulario onSubmit={enviarFormulario}>
        <TituloFormulario>Cadastro</TituloFormulario>
        <Input
          type="text"
          placeholder="Nome Completo"
          onChange={(e) => setNomeCompleto(e.target.value)}
        />
        <Input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Telefone"
          onChange={(e) => setTelefone(e.target.value)}
        />
        <CampoSexo>
          <TextSexo>Sexo:</TextSexo>
          <OpcoesSexo>
            <RadioInput
              type="radio"
              name="genero"
              id="masculino"
              value="Masculino"
              onChange={(e) => setGenero(e.target.value)}
            />
            <Label htmlFor="masculino">Masculino</Label>
            <RadioInput
              type="radio"
              name="genero"
              id="feminino"
              value="Feminino"
              onChange={(e) => setGenero(e.target.value)}
            />
            <Label htmlFor="feminino">Feminino</Label>
            <RadioInput
              type="radio"
              name="genero"
              id="outros"
              value="Outros"
              onChange={(e) => setGenero(e.target.value)}
            />
            <Label htmlFor="outros">Outros</Label>
          </OpcoesSexo>
        </CampoSexo>
        <DataNascimento>
          <TituloDataNascimento>Data de Nascimento:</TituloDataNascimento>
          <InputDate
            type="date"
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </DataNascimento>
        <Input
          type="text"
          placeholder="Brasil"
          onChange={(e) => setPais(e.target.value)}
          readOnly
          title="Este formulário é destinado apenas para residentes do Brasil."
          style={{
            backgroundColor: "#e9ecef",
            color: "#6c757d",
            cursor: "not-allowed",
          }}
          onClick={mostrarAvisoPais}
        />

        <Select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value="">Selecione um estado</option>

          {estados.map((estado) => (
            <option key={estado.id} value={estado.id}>
              {estado.nome}
            </option>
          ))}
        </Select>

        <Select value={cidade} onChange={(e) => setCidade(e.target.value)}>
          <option value="">Selecione uma cidade</option>

          {cidades.map((cidade) => (
            <option key={cidade.id} value={cidade.id}>
              {cidade.nome}
            </option>
          ))}
        </Select>

        <BotaoEnviar type="submit">Enviar</BotaoEnviar>
      </Formulario>
    </Conteudo>
  );
}

export default FormularioComponent;
