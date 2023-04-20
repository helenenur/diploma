import { useContext } from "react";
import "./ProductsList.css";
import { AppContext } from "../../App";

export default function ProductsList(){
   const {products}= useContext(AppContext);

   const output = products.map(product =>(
    <div>
      <img src={product.picture}alt="product.name"/>
      <Link to={"/product/"+product.path}>
        {product.name}
      </Link>
      <span>{product.price}som</span>
    </div>
   ));

  return (
    <div className="ProductsList">
{output}
    </div>
  );
}