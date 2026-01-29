import { useEffect, useState } from "react";
import "./styles.css";
export default function Pesquisa() {
    const [search, setSearch] = useState("");
    const [ListProdutos, setListProdutos] = useState([]);
    const Produtos = [
        {
            id: 1,
            nome: "Anciedade",
        },
        {
            id: 2,
            nome: "Terapia de Casal",

        },
        {
            id: 3,
            nome: "Humor",
        },
            {
            id: 4,
            nome: "Humor",
        },
    ];
    useEffect(() => {
        setListProdutos(Produtos);
    }, []);

    const filter = ListProdutos.filter((produto) => {
        const termo = search.trim().toLowerCase();
        if (!termo) return true;

        return produto.nome.toLowerCase().includes(termo);
    });
    return (
        <>
            <div className="barra-pesquisa">
                <input
                
                className="pesquisa"
                    value={search}
                    type="text"
                    placeholder="Buscar..."
                    onChange={(event) => setSearch(event.target.value)}
                    
                />
                <i class="fa-solid fa-magnifying-glass"></i>

            </div>
            <ul className="lista">            
                {filter.map((produto) => ((
                <li  key={produto.id}>
                    <strong>{produto.nome}</strong>
                </li>
            ))
            )}
            </ul>

        </>
    )
}