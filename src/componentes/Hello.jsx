import React from "react";
import './Hello.css';


function Hello(props){
    //console.log("Tipo (idade)", typeof(props.idade));
    return (
            <div>
                {
                props.idade >= 18
                ?<h3>Olá {props.nome}! Seja bem vindo! </h3>
                :<h3>Olá {props.nome}! Não pode passar!</h3>
                }
            </div>
        );
    }

export default Hello;