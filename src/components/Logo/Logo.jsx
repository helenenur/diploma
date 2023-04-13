import "./Logo.css";
import logo from"../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Logo(){
  return (
    <div className="Logo">
       <NavLink to="/">
       <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/40-Famous-Shoe-Logos/Nike.png "alt="Website logo"/>
       </NavLink>
    </div>
  );
}