import styles from "./index.module.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext.jsx"

function CartPage() {
    const { cart, clearCart } = useContext(CartContext)

    if (!cart) return

    return (
        <div className={styles.container}>
            {cart.length!== 0 ? <button onClick={clearCart}>vaciar carrito</button> : null}
            {cart.map(product => (
                <div key={product.id} className={styles.card}>
                    <div className={styles.info}>
                        <span className={styles.category}>{product.category}</span>
                        <h3 className={styles.title}>{product.title}</h3>
                        <p className={styles.description}>{product.description}</p>
                    </div>

                    <div className={styles.details}>
                        <span className={styles.price}>${product.price}</span>
                        <span className={styles.quantity}>Cantidad: {product.quantity}</span>
                        <span className={styles.stock}>Stock: {product.stock}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartPage