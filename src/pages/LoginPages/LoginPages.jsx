import { useState } from "react";
import styles from "./LoginPages.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import Selector from "../../components/Seletor/Seletor";


export default function LoginPages() {

    const navigate = useNavigate();
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");


    async function autenticarUsuario(event) {
        event.preventDefault();

        const response = await axios.get(`/api/usuarios/${inputEmail}.json`);
        const usuario = response.data;

        if (usuario.email === inputEmail && usuario.senha === inputPassword) {
            navigate("/Home");
        } else {
            toast.error("Email ou senha incorretos.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                style: { backgroundColor: "#9CA697", color: "#ffffff" }
            });

        }

    }


    return (

        <div className={styles.container}>
            <h1>MindCore</h1>
            <Selector />
            <h3>Selecione seu perfil para continuar</h3>
            <form onSubmit={autenticarUsuario} className={styles.form}>
                <input id="loginpage_input_email" value={inputEmail} onChange={(event) => setInputEmail(event.target.value)} placeholder="E-mail" />
                <input id="loginpage_input_password" type="password" placeholder="Senha" value={inputPassword} onChange={(event) => setInputPassword(event.target.value)} />
                <Button id="loginpage_button_entrar" type="submit" text="Entrar" variant="primary" size="medium" />
            </form>
            <strong> Ainda não tem conta? <a href="/Cadastro">Criar conta</a></strong>


        </div>


    );
}

