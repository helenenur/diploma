import "./CartLink.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <Link to="/cart">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdOyACPxuzmX6JaBM-E_Cn52eplbOpSjFyw&usqp=CAU"
          alt="Cart-pht"
        />
        {total}
      </Link>
    </div>
  );
}
