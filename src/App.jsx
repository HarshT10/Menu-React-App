import { useState } from "react";
import menu from "./data";
import Menu from "./Menu";
import Title from "./Title";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(menu.map((data) => data.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section className="menu">
      <Title text="our menu" />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu menu={menuItems} />
    </section>
  );
};
export default App;
