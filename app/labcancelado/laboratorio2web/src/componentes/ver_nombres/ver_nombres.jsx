
import useCount from "../../hooks/useCount";

export function VerNombres({ nombres, showNames: showNamesProp }) {
    const { showNames } = useCount(nombres);
    const getNames = showNamesProp || showNames;

    return (
        <div>
            <ul>
                {typeof getNames === "function" ? getNames() : getNames}
            </ul>
        </div>
    );
}

export default VerNombres;