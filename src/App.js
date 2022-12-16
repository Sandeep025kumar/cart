import React, { useState } from "react";
import { Data } from "./Components/First/Data"
import { Header } from "./Components/Second/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Routers } from "./Components/Second/Routes/Routes";
const App = ()=>{
  const {productItems} = Data; 
  const [cartItems,setCartItems] = useState([]);
  const handleAddProduct=(product)=>{
    const ProductExist = cartItems.find((item)=>item.id === product.id );
    if(ProductExist){
      setCartItems(cartItems.map((item)=> item.id=== product.id ?
    {...ProductExist,quantity: ProductExist.quantity+1}:item)
      );
    }
      else{
        setCartItems([...cartItems,{...product,quantity:1}])
      }

  }
  const handleRemoveProduct = (product)=>{
    const ProductExist = cartItems.find((item)=>item.id === product.id );
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item)=>item.id !== product.id))
    }
    else{
      setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist,quantity:ProductExist.quantity-1} :item))
    }
  }
  const handleCart =()=>{
    setCartItems([]);
  }
    return (<>
   <div>
    <Router>
      <Header cartItems={cartItems}/>
      <Routers productItems={productItems} 
      cartItems={cartItems} 
      handleAddProduct={handleAddProduct}
      handleRemoveProduct={handleRemoveProduct}
      handleCart={handleCart}/>
    </Router>
    
   </div>

    </>)
}
export default App