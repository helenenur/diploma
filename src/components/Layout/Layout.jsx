import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import "./Layout.css";
import Category from "../../pages/Category";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <div className="head">
          <Logo />
          <Nav />
        </div>
        <CartLink/>
        <Auth/>
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
}
