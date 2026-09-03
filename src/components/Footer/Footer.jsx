import styles from "./index.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <ul className={styles.footerList}>
                    <li className={styles.footerTitle}>Empresa</li>
                    <li><a href="/about">Nosotros</a></li>
                    <li><a href="/team">Equipo</a></li>
                    <li><a href="/careers">Trabajá con nosotros</a></li>
                </ul>

                <ul className={styles.footerList}>
                    <li className={styles.footerTitle}>Servicios</li>
                    <li><a href="/services">Servicios</a></li>
                    <li><a href="/pricing">Precios</a></li>
                    <li><a href="/faq">Preguntas frecuentes</a></li>
                </ul>

                <ul className={styles.footerList}>
                    <li className={styles.footerTitle}>Contacto</li>
                    <li><a href="/contact">Contacto</a></li>
                    <li><a href="mailto:info@ejemplo.com">info@ejemplo.com</a></li>
                    <li><a href="/support">Soporte</a></li>
                </ul>
            </div>

            <p className={styles.footerBottom}>
                © 2026 Mi Empresa. Todos los derechos reservados.
            </p>
        </footer>
    )
}

export default Footer