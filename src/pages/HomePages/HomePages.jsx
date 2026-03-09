
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
                    <div className={Styles.cardDicas}>
                        {listaDicas?.map((dica) => (
                            <div key={dica.id} className={Styles.fundoDicas}>
                                <p className={Styles.tituloDicas}>{dica.title}</p>
                                <img className={Styles.imagensDicas} src={dica.image} alt={dica.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}