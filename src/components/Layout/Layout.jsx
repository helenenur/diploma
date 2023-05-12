import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import "./Layout.css";
import Category from "../../pages/Category";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <div className="head">
          <Logo />
          <Nav />
          <NavToggle callback={toggleDrawer} />
          <Drawer open={drawerOpen} toggle={toggleDrawer} />
          <CartLink />
          <Auth />
        </div>
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
}
