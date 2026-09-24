import styles from "./index.module.css"
import { useParams} from "react-router-dom"
import { useState, useEffect } from "react"

function ProductDetailPage() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    const getProduct = async (id) => {
        try {
            const result = await fetch("/mock/asyncMock.json")
            const data = await result.json()
            setProduct(data.find(p => String(p.id) === id))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct(id)
    }, [id])

    if (!product) return 

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <span className={styles.category}>{product.category}</span>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.description}>{product.description}</p>

                <div className={styles.footer}>
                    <span className={styles.price}>${product.price}</span>
                    <span className={styles.stock}>Stock: {product.stock}</span>
                </div>

                <button className={styles.button}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ProductDetailPage