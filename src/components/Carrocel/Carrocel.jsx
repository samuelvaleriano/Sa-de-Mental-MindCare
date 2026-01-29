import styles from './Carrocel.module.css';
import { useState, useEffect } from 'react';  

const imagens = [
    "./public/imagens/bainer1.png",
    "./public/imagens/bainer2.png",
    "./public/imagens/bainer3.png",
];

export default function Carrossel() {
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtual((prevIndex) =>
        prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 

    return () => clearInterval(intervalo); 
  }, []);

  return (
    <div className={styles.carrossel}>
      <img
        src={imagens[indexAtual]}
        alt="Imagem do carrossel"
        className={styles.imagem}
      />
    </div>
  );
}
           