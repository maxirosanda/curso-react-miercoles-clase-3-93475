import styles from "./index.module.css"

function Navbar({cartProductCounter}) {
    return (
        <nav className={` w-full  ${styles.navbar}`}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a href="/">Inicio</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/about">Nosotros</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/services">Servicios</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/contact">Contacto</a>
                </li>
            </ul>

            <div className={styles.cart}>
                <svg
                    className={styles.cartIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                {cartProductCounter > 0 && (
                    <span className={styles.cartBadge}>{cartProductCounter}</span>
                )}
            </div>
        </nav>
    )
}

export default Navbar