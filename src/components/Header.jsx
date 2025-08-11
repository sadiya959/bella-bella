import { Link } from "react-router";
import NavLink from "./NavLink";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-amber-50 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-semibold text-amber-800 transition-colors hover:text-amber-900"
          >
            <span>Bella Bella</span>
          </Link>

          <nav className="hidden space-x-8 md:flex">
            <NavLink path={"/"}>Home</NavLink>
            <NavLink path={"/menu"}>Menu</NavLink>
            <NavLink path={"/booking"}>Booking</NavLink>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer rounded-md p-2 text-amber-800 transition-colors hover:bg-amber-100 md:hidden"
          >
            <div className="flex h-6 w-6 items-center justify-center">
              {!isMenuOpen ? (
                <i className="fa-solid fa-bars text-xl"></i>
              ) : (
                <i className="fa-solid fa-close text-xl"></i>
              )}
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="flex flex-col space-y-2 pb-4 md:hidden">
            <NavLink path={"/"}>Home</NavLink>
            <NavLink path={"/menu"}>Menu</NavLink>
            <NavLink path={"/booking"}>Booking</NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
