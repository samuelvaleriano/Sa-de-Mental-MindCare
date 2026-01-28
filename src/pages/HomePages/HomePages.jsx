
import Styles from './HomePages.module.css';
import Header from '../../components/Header/Header';
import Topo from '../../components/TopoComponent/Topo';

export default function HomePage() {
    

    return (
        <div className={Styles.HomePage}>
            <Header />
            <Topo />
            <h1>Teste</h1>
        </div>   
    )
}