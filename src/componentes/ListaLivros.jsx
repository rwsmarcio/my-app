import React, { useState } from "react";
import { useEffect } from "react";
import API from "../servicos/API";
import MeuCard from "./MeuCard";

function ListaLivros() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        API.get("/livros")
            .then((response) => setLivros(response.data))
            .catch((err) => console.log(err))
    }, []);

    return livros.map( livro =>
        <MeuCard titulo={livro.titulo}>
            <h4>Livro ID: {livro.livro_id}  </h4>
            <h4>Título: {livro.titulo}    </h4>
            <h4>Autor ID: {livro.autor_id}  </h4>
            <h4>Editora: {livro.editora}   </h4>
            <h4>Quantidade: {livro.qtd}       </h4>
            <h4>Disponíveis: {livro.disponivel}</h4>
        </MeuCard>
    )
}

export default ListaLivros;