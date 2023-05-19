import { createContext, useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {
  onAuthChange,
  onCategoriesLoad,
  onProductsLoad,
  onOrdersLoad,
} from "./firebase";

import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ThankYou from "./pages/ThankYou";
import Orders from "./pages/Orders";
import AboutList from "./components/AboutList/AboutList";
import HomeList from "./components/HomeList/HomeList";

export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  // корзина
  cart: {},
  setCart: () => {},

  user: null, // здесь будет храниться информация про пользователя
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  // состояние которое хранит информацию пользователя
  const [user, setUser] = useState(null);

  // корзина
  const [cart, setCart] = useState(() => {
    // восстановить содержимое корзинки из памяти браузера.
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  // выполнить эту функцию только когда содержимое корзинки меняется
  useEffect(() => {
    // сохранить содержимое корзинки в памяти браузера
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // // выполнить эту функцию только один раз
  // useEffect(() => {
  //   // получить категории из списка категорий
  //   getDocs(categoryCollection).then((snapshot) => {
  //     // категории будут храниться в snapshot.docs

  //     // создать массив для категорий
  //     const newCategories = [];
  //     // заполнить массив данными из списка категорий
  //     snapshot.docs.forEach((doc) => {
  //       // doc = категория
  //       const category = doc.data();
  //       category.id = doc.id;

  //       newCategories.push(category);
  //     });
  //     // задать новый массив как состояние комапо
  //     setCategories(newCategories);
  //   });

  //   // получить продукты из списка продуктов
  //   getDocs(productCollection).then((snapshot) => {
  //     // продукты будут храниться в snapshot.docs

  //     // создать массив для продуктов
  //     const newProducts = [];
  //     // заполнить массив данными из списка продвук
  //     snapshot.docs.forEach((doc) => {
  //       // doc = продукт
  //       const product = doc.data();
  //       product.id = doc.id;

  //       newProducts.push(product);
  //     });
  //     // задать новый массив как состояние комапо
  //     setProducts(newProducts);
  //   });

  //   // получить продукты из списка продуктов
  //   getDocs(orderCollection).then((snapshot) => {
  //     // продукты будут храниться в snapshot.docs

  //     // создать массив для продуктов
  //     const newOrders = [];
  //     // заполнить массив данными из списка продвук
  //     snapshot.docs.forEach((doc) => {
  //       // doc = продукт
  //       const order = doc.data();
  //       order.id = doc.id;

  //       newOrders.push(order);
  //     });
  //     // задать новый массив как состояние комапо
  //     setOrders(newOrders);
  //   });
  useEffect(() => {
    onCategoriesLoad(setCategories);
    onProductsLoad(setProducts);
    onOrdersLoad(setOrders);

    onAuthChange((user) => {
      if (user) {
        user.isAdmin = user.email === "sulaimsevera594@gmail.com";
      }
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, orders }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<HomeList />} />
            <Route path="/about" element={<AboutList />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
            <Route path="/product/:path" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
