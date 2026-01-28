import Header from '../../components/Header/Header';
import styles from './Duvidas.module.css';
import { useNavigate } from 'react-router';

export default function DuvidasPage() {   
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <h2>Teste</h2>
            <button onClick={() => navigate('/')} >Voltar</button>
         </div>
        
    )
 }
