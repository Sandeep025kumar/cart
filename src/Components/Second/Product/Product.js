import "./Product.css";
const Product = ({productItems,handleAddProduct})=>{
   return(
    <div className="products">
        {productItems.map((productItem)=>{
            return(
            <div className="card">
                <div>
                    <img className="product-image"src={productItem.image}/>
                </div>
                <div>
                    <h3 className="product-name">{productItem.name}</h3>
                </div>
                <div className="product-price">${productItem.price}</div>
                <div>
                    <button className="product-add-button" onClick={()=>handleAddProduct(productItem)}>Add to Cart</button>
                </div>
            </div>
            )
        })}
    </div>
   )
}
export {Product}