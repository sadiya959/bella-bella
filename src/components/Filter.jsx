import { useContext } from "react";
import MenusContext from "../contexts/MenusContext";

const categories = [
  "All Items",
  "Antipasti",
  "Pasta",
  "Pizza",
  "Secondi Piatti",
  "Dolci",
];

export default function Filter() {
  const { selectedCategory, setSelectedCategory } = useContext(MenusContext);

  return (
    <div className="mb-12 flex flex-wrap justify-center gap-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(category)}
          className={`cursor-pointer rounded-full bg-amber-600 px-6 py-3 font-semibold whitespace-nowrap transition-colors hover:bg-amber-100 ${selectedCategory === category ? "bg-amber-600 text-white" : "bg-white text-amber-800"} `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
