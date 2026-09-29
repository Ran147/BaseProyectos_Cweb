import REGISTRO_CONSTANTS from "../../constantes/registro.contants";
import useCount from "../../hooks/useCount";

export function VerCupos({ nombres, showfreeSpace: showfreeSpaceProp }) {
    const hook = useCount(nombres);
    const getFreeSpace = showfreeSpaceProp || hook.showfreeSpace;

    // quitar hardcode
    return (
        <div>
            <p>{REGISTRO_CONSTANTS.CUPOSDISPONIBLES} {typeof getFreeSpace === "function" ? getFreeSpace() : getFreeSpace}</p>
        </div>
    );
}

export default VerCupos;