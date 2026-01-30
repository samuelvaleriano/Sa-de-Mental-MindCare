import Header from '../../components/Header/Header';
import styles from './Duvidas.module.css';
import { useNavigate } from 'react-router';
import { useState } from "react";

export default function DuvidasPage() {   
    const navigate = useNavigate();
      const cards = [
    {
      icon: "fa-calendar-days",
      title: "Minhas Sessões",
    },
    {
      icon: "fa-credit-card",
      title: "Pagamentos & Planos",
    },
    {
      icon: "fa-shield-halved",
      title: "Privacidade e Segurança",
    },
    {
      icon: "fa-compass",
      title: "Primeiros Passos",
    },
  ];

    const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como faço para remarcar uma sessão?",
      answer:
        "Você pode alterar o horário com até 24h de antecedência diretamente no card “Próxima Sessão”.",
    },
    {
      question: "O que acontece se minha conexão cair?",
      answer:
        "Caso a conexão seja interrompida, você poderá retomar a sessão ou reagendar conforme disponibilidade.",
    },
    {
      question: "As sessões são gravadas?",
      answer:
        "Não. As sessões não são gravadas para garantir total privacidade e segurança.",
    },
    {
      question: "Como funciona a terapia online?",
      answer:
        "As sessões acontecem por videochamada em um ambiente seguro e confidencial.",
    },
  ];

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }
   function handleChat() {
    window.open("https://wa.me/5511999999999", "_blank");
  }

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.titulo}>Central de Ajuda</h1>
            <div className={styles.procura}>
                <i className={`fa-solid fa-magnifying-glass ${styles.icon}`}></i>
                <input type="text" placeholder='Busca por produtos...' className={styles.input} />
            </div>
            <div className={styles.cards}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <i className={`fa-solid ${card.icon}`}></i>
          <span>{card.title}</span>
        </div>
      ))}
    </div>
    <section className={styles.faq}>
      <h3>Dúvidas Frequentes</h3>

      {faqs.map((item, index) => (
        <div key={index} className={styles.item}>
          <button
            className={styles.question}
            onClick={() => toggle(index)}
          >
            <span>{item.question}</span>
            <i
              className={`fa-solid fa-chevron-down ${
                openIndex === index ? styles.open : ""
              }`}
            ></i>
          </button>

          {openIndex === index && (
            <div className={styles.answer}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </section>
       <footer className={styles.footer}>
      <div className={styles.card}>
        <div className={styles.icons}>
          <i className="fa-regular fa-comment-dots"></i>
        </div>

        <div className={styles.text}>
          <strong>Ainda precisa de ajuda?</strong>
          <p>Nossa equipe de acolhimento está disponível.</p>
        </div>

        <button
          className={styles.button}
          onClick={handleChat}
          aria-label="Falar com suporte via chat"
        >
          Falar com Suporte via Chat
        </button>
      </div>
    </footer>
            <button onClick={() => navigate('/')} >Voltar</button>
         </div>
        
    )
 }
