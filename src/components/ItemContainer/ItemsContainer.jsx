import styles from "./index.module.css"
import ItemList from "../Item/Item.jsx"

function ItemsContainer({products}){
    return(<section  className={styles.container}>
        {products.map(product => <ItemList key={product.id} product={product} />)}
    </section>)
}

export default ItemsContainer