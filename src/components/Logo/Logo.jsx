import "./Logo.css";
import logo from"../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Logo(){
  return (
    <div className="Logo">
       <NavLink to="/">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjbPAzRmgjaYN8fdgE-hksAeLeRHp9G3rlA&usqp=CAU"alt="Website logo"/>
       </NavLink>
    </div>
  );
}