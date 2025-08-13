import React from "react";
import { Link } from "react-router";

export default function MenuItem({ menu }) {
  return (
    <Link className="block cursor-pointer" to={`/menu/${menu.id}`}>
      <li className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
        <img
          className="h-48 w-full object-cover object-top"
          src={menu.image}
          alt={menu.name}
        />
        <div className="p-6">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="text-xl font-semibold text-amber-900">
              {menu.name}
            </h3>
            <span className="text-lg font-bold text-amber-700">
              ${menu.price.toFixed(2)}
            </span>
          </div>
          <p className="leading-relaxed text-gray-600">{menu.summary}</p>
          <div className="mt-4">
            <span className="font-medium text-amber-600 hover:text-amber-700">
              View Details →
            </span>
          </div>
        </div>
      </li>
    </Link>
  );
}
