import { useContext, useState, useEffect } from "react";
import "./CategoryList.css";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import DeleteCategory from "../DeleteCategory/DeleteCategory";
import AddCategory from "../AddCategory/AddCategory";

export default function CategoryList() {
  const { categories, products } = useContext(AppContext);
  const [showSubcategories, setShowSubcategories] = useState({});
  const [dropdownDelay, setDropdownDelay] = useState(300);

  const handleMouseEnter = (categoryId) => {
    setShowSubcategories((prev) => ({ ...prev, [categoryId]: true }));
  };

  const handleMouseLeave = (categoryId) => {
    setShowSubcategories((prev) => ({ ...prev, [categoryId]: false }));
  };

  const output = categories.map((category) => {
    const relatedProducts = products.filter(
      (product) => product.category === category.id
    );
    const relatedProductList = relatedProducts.map((product) => (
      <div className="NavLink">
        <li key={product.id}>
          <NavLink to={"/product/" + product.path}>{product.name}</NavLink>
        </li>
      </div>
    ));

    const showSubcategory = showSubcategories[category.id];

    return (
      <li
        key={category.id}
        onMouseEnter={() => handleMouseEnter(category.id)}
        onMouseLeave={() => handleMouseLeave(category.id)}
      >
        <NavLink to={"/category/" + category.path}>{category.name}</NavLink>
        <DeleteCategory category={category} />
        <ul
          className="subcategory"
          style={{ display: showSubcategory ? "block" : "none" }}
        >
          {relatedProductList}
        </ul>
      </li>
    );
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDropdownDelay(0);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="CategoryList">
      <div className="drop">
        <ul
          className="dropdownContent"
          style={{ transitionDelay: `${dropdownDelay}ms` }}
        >
          <div className="output">{output}</div>
        </ul>
      </div>

      <AddCategory />
    </div>
  );
}
