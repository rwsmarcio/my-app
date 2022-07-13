import React, {useState} from "react";


function BotaoCountFuncao() {
    const [contador, setContador] = useState(0);
    
    const incrementar = () => {
        setContador(contador+1);
    }
    return (
        <div>
            <p> Contador (Funcao): {contador}</p>
            <button onClick={() => incrementar()}> 
                Incrementar 
            </button>
        </div>
    )
}

export default BotaoCountFuncao;