import styles from './HomePages.module.css';
import { useNavigate } from 'react-router';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home Page</h1>
        <button onClick={() => navigate('/Duvidas')} >Dúvidas</button>
        </div>
        
    )
}