import FormularioComponent from "../Formulario/Formulario";
import { FundoDesfocado, Janela } from "./styles";


function ModalEditarUsuario({ usuario, onFechar, onAtualizado }) {
  return (
    <FundoDesfocado>
      <Janela>
        <FormularioComponent
          modo="edicao"
          usuario={usuario}
          onAtualizado={onAtualizado}
          onFechar={onFechar}
        />
      </Janela>
    </FundoDesfocado>
  );
}

export default ModalEditarUsuario;
