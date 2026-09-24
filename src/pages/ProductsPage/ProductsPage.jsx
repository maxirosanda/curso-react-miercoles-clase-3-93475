import styles from "./index.module.css"
import ItemsContainer from "../../components/ItemContainer/ItemsContainer.jsx"
import { useState, useEffect } from "react"

    function ProductsPage() {

        const [products,setProducts] = useState([])
        const getProducts = async () => {
        try{
            const result = await fetch("/mock/asyncMock.json")
            const data = await result.json()
            setProducts(data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
    getProducts()
    },[])

    return(<>
         <ItemsContainer products={products}/>
    </>)
}

export default ProductsPage