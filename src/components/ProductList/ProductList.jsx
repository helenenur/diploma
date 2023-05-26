import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import AddProduct from "../AddProduct/AddProduct";
import AddToCart from "../AddToCart/AddToCart";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import "./ProductList.css";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div className="Product" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <div className="Product_info">
          <Link to={"/product/" + product.path}>{product.name}</Link>
          <br />
          <span>{product.price} USD </span>
          <div className="AddRemove">
            <AddToCart product={product} />
            <DeleteProduct product={product} className="DeleteProduct" />
          </div>
        </div>
      </div>
    ));
  return (
    <div className="bg">
      <div className="ProductList">
        {output}
        <AddProduct category={category} />
      </div>
    </div>
  );
}
