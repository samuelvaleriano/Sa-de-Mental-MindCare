import React, { useState } from 'react';
import styles from './Seletor.module.css';

export default function Selector(){
  const [active, setActive] = useState('paciente');

  return (
    <div className={styles.container}>
      <div 
        className={`${styles.slider} ${active === 'psicologo' ? styles.right : styles.left}`} 
      />
      
      <button 
        type="button"
        className={`${styles.button} ${active === 'paciente' ? styles.activeText : ''}`}
        onClick={() => setActive('paciente')}
      >
        Paciente
      </button>

      <button 
        type="button"
        className={`${styles.button} ${active === 'psicologo' ? styles.activeText : ''}`}
        onClick={() => setActive('psicologo')}
      >
        Terapêuta
      </button>
    </div>
  );
};

