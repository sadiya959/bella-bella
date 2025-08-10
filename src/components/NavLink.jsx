import { Link } from "react-router";

export default function NavLink({ path, children }) {
  return (
    <Link
      to={path}
      className="cursor-pointer font-medium text-amber-800 transition-colors hover:text-amber-900"
    >
      {children}
    </Link>
  );
}
