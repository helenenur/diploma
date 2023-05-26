// import { useContext } from "react";
// import { useMatch } from "react-router-dom";
// import { AppContext } from "../App";
// import NotFound from "./NotFound";
// import AddToCart from "../components/AddToCart/AddToCart";

// export default function Product() {
//   const { params } = useMatch("/product/:path");
//   const { products } = useContext(AppContext);

//   const product = products.find(product => product.path === params.path);

//   if (!product) {
//     return <NotFound />;
//   }

//   return (
//     <div className="Product">
//       <h1>{product.name}</h1>
//       <img src={product.picture} alt={product.name} />
//       <span>{product.price} dollar</span>
//       <AddToCart product={product} />
//     </div>
//   );
// }
import { useContext } from "react";
import { useMatch, Link } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import AddToCart from "../components/AddToCart/AddToCart";
import "./Product.css";

export default function Product() {
  const { params } = useMatch("/product/:path");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.path === params.path);
  const currentIndex = products.findIndex(
    (product) => product.path === params.path
  );
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;
  const previous = previousIndex >= 0 ? products[previousIndex] : null;
  const next = nextIndex < products.length ? products[nextIndex] : null;

  if (!products[currentIndex]) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <div className="Product1">
        <div className="Product-text">
          <img src={product.picture} alt={product.name} />
          <div className="card_text">
            <h3>{product.name}</h3>
            <span>{product.price} som</span>
            <AddToCart product={product} />
          </div>
        </div>
        <div className="Product_description">
          <p>{product.description}</p>
        </div>
      </div>
      <div className="Product_navigation">
        {previous && (
          <Link to={`/product/${previous.path}`}>
            <button>Previous</button>
          </Link>
        )}
        {next && (
          <Link to={`/product/${next.path}`}>
            <button>Next</button>
          </Link>
        )}
      </div>
    </div>
  );
}
