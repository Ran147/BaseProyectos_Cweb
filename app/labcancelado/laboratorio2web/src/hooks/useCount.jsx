import REGISTRO_CONSTANTS from "../constantes/registro.contants";


function useCount(count, setCount, nombres, setNombres) {
  let actualCount = typeof count === "number" ? count : 0;
  let actualNombres = Array.isArray(nombres) ? nombres : [];
  let actualSetCount = setCount;
  let actualSetNombres = setNombres;

  if (Array.isArray(count)) {
    actualNombres = count;
    actualCount = count.length;
    actualSetNombres = typeof setCount === "function" ? setCount : undefined;
    actualSetCount = typeof nombres === "function" ? nombres : undefined;
  }

  const handleAddName = (name) => {
    if (!name || typeof name !== "string" || !name.trim()) {
      alert(REGISTRO_CONSTANTS.WARNING1);
      return;
    }

    const trimmedName = name.trim();

    if (actualCount >= REGISTRO_CONSTANTS.MAX) {
      alert(REGISTRO_CONSTANTS.WARNING);
      return;
    }

    if (typeof actualSetNombres === "function") {
      actualSetNombres((prev) => (Array.isArray(prev) ? [...prev, trimmedName] : [...actualNombres, trimmedName]));
    }
    if (typeof actualSetCount === "function") {
      actualSetCount((prev) => (typeof prev === "number" ? prev + 1 : actualCount + 1));
    }
  };

  const countNames = () => actualNombres.length;
  const showfreeSpace = () => REGISTRO_CONSTANTS.MAX - actualCount;

  const showNames = () =>
    actualNombres.map((name, index) => (
      <li key={`${name}-${index}`}>{name}</li>
    ));

  return {
    handleAddName,
    countNames,
    showfreeSpace,
    showNames,
  };
}

export default useCount;