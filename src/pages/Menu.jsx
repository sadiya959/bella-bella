import { Link } from "react-router";
import PageHeader from "../components/PageHeader";
import Filter from "../components/Filter";
import MenusList from "../components/MenusList";

export default function Menu() {
  return (
    <section className="bg-amber-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          title={"Our Menu"}
          description={
            "Discover our carefully crafted dishes, each prepared with authentic Italian ingredients and traditional techniques"
          }
        />

        <Filter />

        <MenusList />
      </div>
    </section>
  );
}
