import { useContext, useState } from "react";
import { Link, useParams } from "react-router";
import MenusContext from "../contexts/MenusContext";

export default function MenuDetails() {
  const { id } = useParams();
  const { menus } = useContext(MenusContext);
  const [quantity, setQuantity] = useState(1);

  const menu = menus.find((menu) => menu.id == id);
  const [selectedExtras, setSelectedExtras] = useState([]);

  // if the menu is still loading
  if (!menu) {
    return <p className="mt-8 text-center">Loading menu details...</p>;
  }

  const toggleExtra = (extra) => {
    setSelectedExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra],
    );
  };

  // Calculate the extra total
  const extraTotal = selectedExtras?.reduce(
    (sum, extra) => sum + extra.price,
    0,
  );

  // Calculate the total price
  const totalPrice = menu.price * quantity + extraTotal;

  return (
    <section className="bg-amber-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back to menu link */}
        <div className="mb-8">
          <Link
            to="/menu"
            className="cursor-pointer font-medium text-amber-600 hover:text-amber-700"
          >
            <div className="mr-2 inline-flex size-5 items-center justify-center">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            Back to Menu
          </Link>
        </div>

        {/* Menu info */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Menu Image */}
          <div>
            <img
              src={`/public/${menu.image}`}
              alt={menu.name}
              className="h-96 w-full rounded-lg object-cover object-top shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-6">
            {/* Menu category, name, description and price */}
            <div>
              <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                Dolci
              </span>
              <h1 className="mb-4 text-4xl font-bold text-amber-900">
                {menu.name}
              </h1>
              <p className="mb-6 text-xl text-gray-600">{menu.description}</p>
              <p className="mb-6 text-3xl font-bold text-amber-700">
                ${menu.price.toFixed(2)}
              </p>
            </div>

            {/* Menu Extras */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-amber-900">
                Extras
              </h3>
              <div className="space-y-2">
                {menu.extras.map((extra, index) => (
                  <label
                    key={index}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <input
                      className="size-4 rounded text-amber-600"
                      type="checkbox"
                      checked={selectedExtras.includes(extra)}
                      onChange={() => toggleExtra(extra)}
                    />
                    <span className="text-gray-700">
                      {extra.name} (+${extra.price})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Menu Quantity Controls */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-amber-900">
                Quantity
              </h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((prev) => prev - 1)}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-amber-300 bg-white transition-colors hover:bg-amber-50"
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span className="w-12 text-center text-xl font-semibold text-amber-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-amber-300 bg-white transition-colors hover:bg-amber-50"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>

            {/* Menu Total Price and Add to Order button */}
            <div>
              <p className="mb-4 text-2xl font-bold text-amber-900">
                Total:${totalPrice.toFixed(2)}
              </p>
              <button className="w-full cursor-pointer rounded-lg bg-amber-600 px-6 py-3 font-semibold whitespace-nowrap text-white transition-colors hover:bg-amber-700">
                Add to Order
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Menu Ingredients */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-amber-900">
              Ingredients
            </h3>
            <div className="flex flex-wrap gap-2">
              {menu.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          {/* Menu Nutrition */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-amber-900">
              Nutrition Info
            </h3>
            <div className="space-y-2">
              {Object.entries(menu.nutrition).map(([key, value], index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-600">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Allergens */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-amber-900">
              Allergens
            </h3>
            <div className="flex flex-wrap gap-2">
              {menu.allergens.map((allergen, index) => (
                <span
                  key={index}
                  className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-800"
                >
                  {allergen}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
