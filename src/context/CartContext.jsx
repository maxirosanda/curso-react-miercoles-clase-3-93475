import {createContext, useState} from "react"

export const CartContext = createContext()

export function CartProvider({children}) {

    const [cart,setCart] = useState([])
    const [cartProductCounter,setCartProductCounter] = useState(0)

    const addProductCart = async (id,quantity) => {
        try {
            const result = await fetch("/mock/asyncMock.json")
            const data = await result.json()
            const product = data.find(product => product.id === id)
            setCart(prev => [...prev,{...product,quantity}])
            setCartProductCounter(prev => prev + quantity)
        } catch (error) {
            console.log(error)
        }

    }

    const clearCart = () => {
        setCart([])
        setCartProductCounter(0)
    }

    return (
        <CartContext.Provider value={{cart, clearCart, addProductCart,cartProductCounter}}>
            {children}
        </CartContext.Provider>
    )
}