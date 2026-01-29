
import Styles from './HomePages.module.css';
import Header from '../../components/Header/Header';
import Topo from '../../components/TopoComponent/Topo';
import Pesquisa from '../../components/Pesquisa/Pesquisa';
import InfiniteCarousel from '../../components/CarrocelMain/CarrocelMain';


export default function HomePage() {
    

    return (
        <div className={Styles.HomePage}>
            <Header />
            <Topo />
            <Pesquisa />
            <InfiniteCarousel />
        </div>   
    )
}