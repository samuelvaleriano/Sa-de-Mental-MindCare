
import Styles from './HomePages.module.css';
import Header from '../../components/Header/Header';
import Topo from '../../components/TopoComponent/Topo';
import Pesquisa from '../../components/Pesquisa/Pesquisa';
import InfiniteCarousel from '../../components/CarrocelMain/CarrocelMain';
import { useState, useEffect } from 'react';


export default function HomePage() {
    const [listaDicas, setListaDicas] = useState(null);
    
    useEffect(() => {
        fetch("/api/dicas-saude/dicas-saude.json")
        .then((response) => response.json())
        .then((result) => setListaDicas(result))
    }, []);

    return (
        <div className={Styles.HomePage}>
            <Header />
            <Topo />
            <Pesquisa />
            <InfiniteCarousel />
            <div>
                <p>Dicas de Saúde</p>
                <div className={Styles.dicas}>
                    <div className={Styles.dica}>
                        <p>{listaDicas?.[1]?.title}</p>
                        <img src={listaDicas?.[1]?.image} alt={listaDicas?.[0]?.title} />
                    </div>
                </div>
            </div>
        </div>   
    )
}