import React, { useContext } from "react";
import MenuItem from "./MenuItem";
import MenusContext from "../contexts/MenusContext";

export default function MenusList() {
  const { filteredMenus: menus } = useContext(MenusContext);

  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {menus.map((menu) => (
        <MenuItem key={menu.id} menu={menu} />
      ))}
    </ul>
  );
}
