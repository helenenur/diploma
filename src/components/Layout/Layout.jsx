// import Nav from "../Nav/Nav";
// import Logo from "../Logo/Logo";
// import "./Layout.css";
// import CategoryList from "../CategoryList/CategoryList";
// import CartLink from "../CartLink/CartLink";
// import Auth from "../Auth/Auth";
// import NavToggle from "../NavToggle/NavToggle";
// import Drawer from "../Drawer/Drawer";
// import { useState } from "react";

// export default function Layout(props) {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   function toggleDrawer() {
//     setDrawerOpen(!drawerOpen);
//   }
//   return (
//     <div className="Layout">
//       <header>
//         <div className="head">
//           <Logo />
//           <Nav />
//           <NavToggle callback={toggleDrawer} />
//           <Drawer open={drawerOpen} toggle={toggleDrawer} />
//           <CartLink />
//           <Auth />
//         </div>
//       </header>
//       <aside>
//         <CategoryList />
//       </aside>
//       <main>{props.children}</main>
//       <footer> Footer </footer>
//     </div>
//   );
// }
import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";

import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <CartLink />

        <Auth />
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>
        {/* <div className="main-content">
          <video className="video" autoPlay="autoplay" loop muted width="100%">
            <source src={clip} type="video/mp4" />
          </video>
        </div> */}
        {props.children}
        {/* {Example} */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
