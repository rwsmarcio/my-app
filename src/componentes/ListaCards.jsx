import produtos from "../data/produtos";
import MeuCard from "./MeuCard";

function ListaCards() {
    return produtos.map( produto =>
        <MeuCard titulo={produto.nome}>
            <h4>R$ {produto.preco}</h4>
        </MeuCard>
    )
}

export default ListaCards