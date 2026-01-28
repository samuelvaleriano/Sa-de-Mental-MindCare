import styles from './topo.module.css';

export default function Topo() {
    return (
        <div className={styles.topo}>
            <div className={styles.iconPerfil}>
                <i class="fa-solid fa-user"></i>
            </div>
            <h2>MindCore</h2>
        </div>
    )
}