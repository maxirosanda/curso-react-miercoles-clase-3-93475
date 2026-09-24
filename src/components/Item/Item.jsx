import styles from "./index.module.css"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext.jsx"
import { useContext } from "react"

function Item({product}){

    const navigate = useNavigate()
    const { addProductCart } = useContext(CartContext)

    return(
        <div className={styles.card}>
            <span className={styles.category}>{product.category}</span>
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.footer}>
                <span className={styles.price}>${product.price}</span>
                <span className={styles.stock}>Stock: {product.stock}</span>
            </div>
            <button
                className={styles.addButton}
                onClick={()=> navigate("/product-detail/" + product.id)}
            >
                Detalle del producto
            </button>
            <button
                className={styles.addButton}
                onClick={()=> addProductCart(product.id,1)}
            >
                <svg
                    className={styles.buttonIcon}
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
                Agregar al carrito
            </button>
        </div>
    )
}

export default Item