import { useEffect, useState } from "react";
import MenusContext from "./MenusContext";

export default function MenusProvider({ children }) {
  const [menus, setMenus] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Items");

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch("/data/menus.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setMenus(data.menus);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenus();
  }, []);

  const filteredMenus =
    selectedCategory === "All Items"
      ? menus
      : menus.filter((menu) => menu.category === selectedCategory);

  return (
    <MenusContext.Provider
      value={{ menus, filteredMenus, selectedCategory, setSelectedCategory }}
    >
      {children}
    </MenusContext.Provider>
  );
}
