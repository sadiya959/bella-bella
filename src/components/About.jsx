import { RiLeafLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { RiRestaurantLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-12 text-[#78350f] px-4">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-4xl font-bold">Welcome to Bella Vista</h2>
        <p className="max-w-2xl text-xl text-gray-600">
          Since 1952, our family has been serving authentic Italian cuisine with
          recipes passed down through generations. Every dish is prepared with
          love, using only the finest ingredients imported directly from Italy.
        </p>
      </div>

      {/* what we do */}
      <div className=" flex justify-center flex-wrap my-12 gap-8">
        <div className="flex flex-col items-center gap-2">
          <span className="bg-[#FEF3C7] w-15 p-2 h-15 rounded-full flex justify-center items-center">
            <RiRestaurantLine className="text-2xl text-[#d97706]" />
          </span>
          <div className="text-center">
            <h4 className="text-xl font-semibold">Authentic Recipes</h4>
            <p className="text-gray-600 max-w-sm">
              Traditional Italian recipes passed down through four generations
              of our family.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="bg-[#FEF3C7] w-15 p-2 h-15 rounded-full flex justify-center items-center">
            <RiLeafLine className="text-2xl text-[#d97706]" />
          </span>
          <div className="text-center">
            <h4 className="text-xl font-semibold">Made with Love</h4>
            <p className="text-gray-600 max-w-sm">
              Every dish is carefully crafted with passion and served with
              genuine Italian hospitality.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="bg-[#FEF3C7] w-15 p-2 h-15 rounded-full flex justify-center items-center">
            <FaRegHeart className="text-2xl text-[#d97706]" />
          </span>
          <div className="text-center">
            <h4 className="text-xl font-semibold">Fresh Ingredients</h4>
            <p className="text-gray-600 max-w-sm">
              Only the finest ingredients, many imported directly from Italy for
              authentic flavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
