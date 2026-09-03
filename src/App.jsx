import Navbar from "./components/Navbar/Navbar.jsx"
import ItemsContainer from "./components/ItemContainer/ItemsContainer.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { useState, useEffect } from "react"

function App(){

const [products,setProducts] = useState([])
const [cart,setCart] = useState([])
const [cartProductCounter,setCartProductCounter] = useState(0)

const getProductsWithAsyncAwait = async () => {
      try{
        const result = await fetch("./src/mock/asyncMock.json")
        const data = await result.json()
        setProducts(data)
      }catch(error){
        console.log(error)
      }

}


const getProductsWithThenCatch = () => {
  fetch("./src/mock/asyncMock.json").then(result => {
    return result.json()
  }).then(data =>{
    setProducts(data)
  }).catch(error =>{
    console.log(error)
  })
}

useEffect(()=>{
  getProductsWithAsyncAwait()
},[])


const addProductCart = (id,quantity) => {
    setCart([...cart,{id,quantity}])
    setCartProductCounter(cartProductCounter + quantity)
}


  return(
        <>
          <Navbar cartProductCounter={cartProductCounter}/>
          <ItemsContainer products={products} addProductCart={addProductCart}/>
          <Footer/>
        </>
  )
}

export default App