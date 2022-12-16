import { Product } from "../Product/Product"
import { Signup } from "../Signup/Signup"
import { Cart } from "../Cart/Cart"
import { Routes, Route } from "react-router-dom"
const Routers = ({productItems,cartItems,handleAddProduct,handleRemoveProduct,handleCart})=>{
    return(
        <div>
            <Routes>
            <Route path='/' element={<Product productItems={productItems} handleAddProduct={handleAddProduct}/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/cart' element={<Cart cartItems={cartItems} 
            handleAddProduct={handleAddProduct} 
            handleRemoveProduct={handleRemoveProduct}
            handleCart={handleCart}/>} />
            </Routes>
        </div >
    )

}
export {Routers}