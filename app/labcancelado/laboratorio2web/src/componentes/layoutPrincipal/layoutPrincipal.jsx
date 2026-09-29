import REGISTRO_CONSTANTS from "../../constantes/registro.contants";
import { useState } from "react";
import useCount from "../../hooks/useCount";
import { AgregarNombres } from "../agregar_nombres/agregar_nombres";
import VerCantidadNombres from "../ver_cantidad_nombres/ver_cantidad_nombres";
import VerCupos from "../ver_cupos/ver_cupos";
import VerNombres from "../ver_nombres/ver_nombres";

export default function LayoutPrincipal() {
    const [count, setCount] = useState(0);
    const [nombres, setNombres] = useState([]);
    const { handleAddName, countNames, showfreeSpace, showNames } = useCount(count, setCount, nombres, setNombres);

    return (
        <div>
            <h1>{REGISTRO_CONSTANTS.TITULO}</h1>
            <AgregarNombres handleAddName={handleAddName} nombres={nombres} setNombres={setNombres} />
            <VerCantidadNombres countNames={countNames} nombres={nombres} />
            <VerCupos showfreeSpace={showfreeSpace} nombres={nombres} />
            <VerNombres showNames={showNames} nombres={nombres} />
        </div>
    );
}