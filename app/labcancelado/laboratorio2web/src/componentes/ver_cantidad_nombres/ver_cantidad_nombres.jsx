import useCount from "../../hooks/useCount";
import REGISTRO_CONSTANTS from "../../constantes/registro.contants";

export function VerCantidadNombres({ nombres, countNames: countNamesProp }) {
    const { countNames } = useCount(nombres);
    const getCount = countNamesProp || countNames;

    return (
        <div>
            <p>{REGISTRO_CONSTANTS.CANTIDADNOMBRES} {typeof getCount === "function" ? getCount() : getCount}</p>
        </div>
    );
}

export default VerCantidadNombres;
