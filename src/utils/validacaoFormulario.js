import {
  validarCamposObrigatorios,
  validarNome,
  validarEmail,
  validarTelefone,
  validarData,
} from "../components/Formulario/validacoes";

import {
  mostrarAvisoPreenchimento,
  mostrarAvisoNomeInvalido,
  mostrarAvisoEmailInvalido,
  MostrarAvisoEmailQntdMaxima,
  MostrarAvisoEmailQntdMinima,
  mostrarAvisoTelefoneInvalido,
  mostrarAvisoNomeQntdMinima,
  mostrarAvisoNomeQntdMaxima,
  mostrarAvisoDataInvalida,
  mostrarAvisoAnoInvalido,
  mostrarAvisoDataInexistente,
  mostrarAvisoDataFutura,
} from "../components/Formulario/aviso";

export function validarFormulario({
  dadosFormulario,
  nomeCompleto,
  email,
  telefone,
  dataNascimento,
}) {
  const resultadoCampos = validarCamposObrigatorios(dadosFormulario); // A função 'validarCamposObrigatorios' recebe o objeto 'dadosFormulario' e retorna um objeto com a propriedade 'valido' (true ou false) e a propriedade 'erro' (uma string indicando o tipo de erro, se houver). O resultado da validação é armazenado na constante 'resultadoCampos'.
  if (!resultadoCampos.valido) {
    resultadoCampos.erro === "CAMPO_AUSENTE" && mostrarAvisoPreenchimento();
    resultadoCampos.erro === "CAMPO_VAZIO" && mostrarAvisoPreenchimento();
    return false;
  }

  const resultadoNome = validarNome(nomeCompleto); // A função 'validarNome' recebe o valor do campo 'nomeCompleto' e retorna um objeto com a propriedade 'valido' (true ou false) e a propriedade 'erro' (uma string indicando o tipo de erro, se houver). O resultado da validação é armazenado na constante 'resultadoNome'.
  if (!resultadoNome.valido) {
    resultadoNome.erro === "MINIMO_CARACTERES" && mostrarAvisoNomeQntdMinima();
    resultadoNome.erro === "MAXIMO_CARACTERES" && mostrarAvisoNomeQntdMaxima();
    resultadoNome.erro === "CARACTERES_INVALIDOS" &&
      mostrarAvisoNomeInvalido("CARACTERES_INVALIDOS");
    return false;
  }

  const resultadoEmail = validarEmail(email);
  if (!resultadoEmail.valido) {
    resultadoEmail.erro === "EMAIL_INVALIDO" && mostrarAvisoEmailInvalido();
    resultadoEmail.erro === "MINIMO_CARACTERES" &&
      MostrarAvisoEmailQntdMinima();
    resultadoEmail.erro === "MAXIMO_CARACTERES" &&
      MostrarAvisoEmailQntdMaxima();
    return false;
  }

  if (!validarTelefone(telefone)) {
    mostrarAvisoTelefoneInvalido();
    return false;
  }

  const resultadoData = validarData(dataNascimento);
  if (!resultadoData.valido) {
    resultadoData.erro === "DATA_INVALIDA" && mostrarAvisoDataInvalida();
    resultadoData.erro === "ANO_INVALIDO" && mostrarAvisoAnoInvalido();
    resultadoData.erro === "DATA_INEXISTENTE" && mostrarAvisoDataInexistente();
    resultadoData.erro === "DATA_FUTURA" && mostrarAvisoDataFutura();
    return false;
  }
  return true;
}
