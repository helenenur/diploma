import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import "./Layout.css";
import Category from "../../pages/Category";
import CategoryList from "../CategoryList/CategoryList";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
}
