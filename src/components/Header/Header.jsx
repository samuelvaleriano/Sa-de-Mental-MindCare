import styles from "./Header.module.css"
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import Carrossel from "../Carrocel/Carrocel";


export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/Home";
  const navigate = useNavigate();


  return (
    <>
      <header id="home" className={styles.container}>
        {isHome && <Carrossel />}
        <button
          className={styles.iconButton}
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <i
            className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} ${open ? styles.iconOn : ""
              }`}
          ></i>
        </button>
        <nav
          className={`${styles.sideNav} ${open ? styles.open : ""}`}
          role="navigation"
          aria-hidden={!open}
        >
          <div className={styles.iconPerfil}>
            <i class="fa-solid fa-user"></i>
          </div>
          <ul>
            <li>
              <a
                href="#inicio"
                onClick={() => {
                  setOpen(false);
                  navigate('/Home');
                }}
              >
                <i class="fa-regular fa-house"></i>
                Início
              </a>
            </li>
            <li>
              <a
                href="#duvidas"
                onClick={() => {
                  setOpen(false);
                  navigate('/Duvidas');
                }}
              >
                <i class="fa-solid fa-question"></i>
                Dúvidas
              </a>
            </li>
            <li>
              <a href="#agendamentos"  onClick={() => {
                  setOpen(false);
                  navigate('/agendamentos');
                }}
              >
                <i class="fa-regular fa-calendar"></i>
                Agendamentos
              </a>
            </li>
            <li>
              <a href="#diario-emocional" onClick={() => setOpen(false)}>
                <i class="fa-solid fa-chart-line"></i>
                Diário Emocional
              </a>
            </li>
            <li>
              <a href="#contatos" onClick={() => setOpen(false)}>
                <i class="fa-regular fa-comment"></i>
                Contatos
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={`${styles.overlay} ${open ? styles.showOverlay : ""}`}
          onClick={() => setOpen(false)}
          aria-hidden={!open}
        />
      </header>
    </>
  );
}