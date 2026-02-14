import Header from "../../components/Header/Header";
import styles from './Agendamentos.module.css';
import { useNavigate } from 'react-router';
import {useState} from "react"

export default function Agendamentos(){
    const navigate = useNavigate();
    
    const [data, setData] = useState("");

    const [horario, setHorario] = useState("");
  
      const horariosDisponiveis = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
  ];

    function confirmarAgendamento() {
    if (!data || !horario) {
      alert("Selecione uma data e um horário.");
      return;
    }

    alert(`Agendamento confirmado!\nData: ${data}\nHorário: ${horario}`);
  }

    return (
         <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Agendar Consulta</h1>
        <div className={styles.section}>
          <label>📅 Escolha a data</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div className={styles.section}>
          <label>⏰ Escolha o horário</label>
          <div className={styles.horarios}>
            {horariosDisponiveis.map((h) => (
              <button
                key={h}
                className={
                  horario === h
                    ? styles.horarioSelecionado
                    : styles.horario
                }
                onClick={() => setHorario(h)}
              >
                {h}
              </button>
            ))}
          </div>
        </div>
        <button
          className={styles.confirmar}
          onClick={confirmarAgendamento}
        >
          Confirmar Agendamento
        </button>
        <button
          className={styles.voltar}
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
      </main>
    </div>
    );
}