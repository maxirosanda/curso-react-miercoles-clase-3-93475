import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx"
import CartPage from "./pages/CartPage/CartPage.jsx"
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage.jsx"
import { CartProvider } from "./context/CartContext.jsx"

function App(){


  return(
        <>

          <BrowserRouter>
            <CartProvider>     
              <Navbar/>
              <Routes>
                <Route path="/" element={<ProductsPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/product-detail/:id" element={<ProductDetailPage/>}/>
              </Routes>
              <Footer/>
            </CartProvider>     
          </BrowserRouter>

        </>
  )
}

export default App