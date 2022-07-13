import React from "react";


class BotaoCountClass extends React.Component {
    constructor(){
        super();
        this.state = { contador: 1};
    
    }
    incrementar() {
        alert("Evento incrementar...")
        this.setState({contador: this.state.contador+1});
        console.log("contador", this.state.contador)
    }
    render() {
        return (
            <div>
                <p> Contador (Classe): {this.state.contador}</p>
                <button onClick={() => this.incrementar()}> Incrementar </button>
            </div>
        )
    }
}
export default BotaoCountClass