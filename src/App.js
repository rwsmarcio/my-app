import React from "react";
import Hello from './componentes/Hello';
import HiMessage from "./componentes/HiMessage";
import MeuCard from "./componentes/MeuCard";
import ListaCards from "./componentes/ListaCards";
import produtos from "./data/produtos";
import BotaoCountClass from "./componentes/BotaoCountClass";
import BotaoCountFuncao from "./componentes/BotaoCountFuncao";
import ListaLivros from "./componentes/ListaLivros";
import MeuFormulario from "./componentes/MeuFormulario";

function App() {
  return (
    <div>
      <Hello nome="Usuário" idade={22}/>
      {/*<HiMessage mensagem="Como vai?"></HiMessage>
      <MeuCard key={produtos.id} titulo="Card">
        <h3>R$ 20,00</h3>
        <h5>R$ 30,00</h5>
      </MeuCard>
      <BotaoCountClass></BotaoCountClass>
      <BotaoCountFuncao></BotaoCountFuncao>*/}
    </div>
  );
}

export default App;
