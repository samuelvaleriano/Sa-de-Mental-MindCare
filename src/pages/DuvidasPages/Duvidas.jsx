import styles from './Duvidas.module.css';
import { useNavigate } from 'react-router';

export default function DuvidasPage() {   
    const navigate = useNavigate();
    return (
        <div>
            <h2>Dúvidas</h2>
            <button onClick={() => navigate('/')} >Voltar</button>
         </div>
        
    )
 }
