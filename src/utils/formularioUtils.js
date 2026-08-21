export const criarDadosFormulario = ({
  nomeCompleto,
  email,
  telefone,
  genero,
  dataNascimento,
  cidade,
  estado,
  pais,
}) => {
  return {
    nomeCompleto,
    email,
    telefone,
    genero,
    data_nascimento: dataNascimento,
    cidade,
    estado,
    pais,
  };
};
