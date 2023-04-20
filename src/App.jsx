import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Category from "./pages/Category";
import { createContext, useEffect, useState } from "react";
import { categoryCollection } from "./firebase";
import { getDocs } from "firebase/firestore";

export const AppContext = createContext({
  categories: [],
  products: [],
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getDocs(categoryCollection).then((snapshot) => {
      const newCategories = [];

      snapshot.docs.forEach((doc) => {
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });

      setCategories(newCategories);
    });

    getDocs(categoryCollection).then((snapshot) => {
      const newProducts = [];

      snapshot.docs.forEach((doc) => {
        const product = doc.data();
        product.id = doc.id;

        newProducts.push(category);
      });

      setProducts(newCategories);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
