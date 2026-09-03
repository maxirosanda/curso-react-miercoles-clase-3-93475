import styles from "./index.module.css"
import ItemList from "../Item/Item.jsx"

function ItemsContainer({products, addProductCart}){
    return(<section  className={styles.container}>
        {products.map(product => <ItemList key={product.id} product={product} addProductCart={addProductCart}/>)}
    </section>)
}

export default ItemsContainer