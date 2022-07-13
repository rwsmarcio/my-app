import React, {useState} from "react";
import API from "../servicos/API";

function MeuFormulario() {
    const [titulo, setTitulo]         = useState("");
    const [autorID, setAutorID]       = useState("");
    const [editora, setEditora]       = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [disponivel, setDisponivel] = useState("");

    const tratarSumit = (event) => {
        event.preventDefault();
        API.post("/livros", {
            "titulo": titulo,
            "autor_id": autorID,
            "editora": editora,
            "qtd": quantidade,
            "disponivel": disponivel
        })
            .then((response) => {
                alert(`Livro cadastrado com sucesso!`);
                console.log(response.data)
                setTitulo("");
                setAutorID(0);
                setEditora("");
                setDisponivel(0);
                setQuantidade(0);
            })
            .catch((err) => console.log(err)); 
    }

    return (
        <form onSubmit={tratarSumit}>
            <laberl>Título: 
                <input 
                    type="text" 
                    name="titulo" 
                    value={titulo} 
                    onChange= {(ev) => setTitulo(ev.target.value)} />
            </laberl>
            <br />
            <laberl>Autor ID: 
            <input 
                    type="number" 
                    name="autor" 
                    value={autorID} 
                    onChange= {(ev) => setAutorID(ev.target.value)} />
            </laberl>
            <br />
            <laberl>Editora: 
            <input 
                    type="text" 
                    name="editora" 
                    value={editora} 
                    onChange= {(ev) => setEditora(ev.target.value)} />
            </laberl>
            <br />
            <laberl>Quantidade: 
            <input 
                    type="number" 
                    name="quantidade" 
                    value={quantidade} 
                    onChange= {(ev) => setQuantidade(ev.target.value)} />
            </laberl>
            <br />
            <laberl>Disponível: 
            <input 
                    type="number" 
                    name="disponivel" 
                    value={disponivel} 
                    onChange= {(ev) => setDisponivel(ev.target.value)} />
            </laberl>
            <br />
            <input type="submit" value="Cadastrar" />
        </form>
    )
}

export default MeuFormulario;
