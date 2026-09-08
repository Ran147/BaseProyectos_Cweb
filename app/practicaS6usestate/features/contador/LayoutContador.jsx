import { useState } from "react"
import { CONTADOR_TEXT } from "./constants/contador.constants"


export function LayoutContador() {



    const [count, setCount] = useState(0)

    function handleIncrement() {

        
        setCount(prev => prev+CONTADOR_TEXT.CONTADOR)
    }

    function handleDecrement(){
        
        setCount(prev => prev-CONTADOR_TEXT.CONTADOR)
    }
    return (
        <>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick={count > 0 ? handleDecrement:null}>{CONTADOR_TEXT.DECREMENTAR}</button>
            <button onClick={count < 5 ? handleIncrement:null}>{CONTADOR_TEXT.INCREMENTAR}</button>
        </>
    )
}