import REGISTRO_CONSTANTS from "../../constantes/registro.contants";
import useCount from "../../hooks/useCount";

export function AgregarNombres({ nombres, setNombres, handleAddName: handleAddNameProp }) {
    const { handleAddName } = useCount(nombres, setNombres);
    const onAdd = handleAddNameProp || handleAddName;

    // quitar hardcode
    return (
        <div>
            <input type="text" id={REGISTRO_CONSTANTS.NOMBRE} placeholder="Ingrese un nombre" />
            <button onClick={() => {
                const input = document.getElementById(REGISTRO_CONSTANTS.NOMBRE);
                if (input) {
                    onAdd(input.value);
                    input.value = "";
                }
            }}>
                {REGISTRO_CONSTANTS.AGREGAR || "Agregar"}
            </button>
        </div>
    );
}

export default AgregarNombres;