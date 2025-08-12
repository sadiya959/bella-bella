import { useState } from "react";
import SpecialsCard from "./SpecialsCard";
import homeFooterPhoto from "../assets/images/homeFooterPhoto.png";
import { MdDone } from "react-icons/md";

const Specials = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
    {/* Today's Special */}
      <div className="flex flex-col gap-3 items-center justify-center mt-8 lg:p-20 p-4 bg-[#fffbeb]">
        <h3 className="md:text-4xl text-3xl font-bold text-center text-[#78350f]">Today's Special</h3>
        <p className="md:text-xl text-sm text-gray-600 max-w-2xl  text-center">
          Our chef's carefully crafted daily special, made with the finest
          seasonal ingredients
        </p>
        <button
          onClick={() => setShowCard(!showCard)}
          className="bg-[#D97706] rounded py-3 px-6 font-bold mt-12 text-white text-sm md:text-xl cursor-pointer"
        >
          {showCard ? "Hide Special " : "Show Today's Special"}
        </button>

        {showCard && <SpecialsCard />}
      </div>

      {/* two columns top of footer  */}
      <div className="flex bg-[#7B3306] text-[#fde68a] flex-wrap items-center lg:py-20 py-12 px-6  justify-center  gap-12">
        <div className="space-y-6">
          <h4 className="text-4xl font-bold text-white">Experience Italy</h4>
          <p className="lg:max-w-xl max-w-3xl text-xl">
            Step into our warm and inviting atmosphere where every meal is a
            celebration. Our rustic Italian decor and intimate lighting create
            the perfect setting for romantic dinners, family gatherings, and
            special occasions.
          </p>

          <div className="text-base space-y-4">
            <span className="flex gap-2 items-center">
              <MdDone className="text-[#d97706]" />
              Intimate candlelit dining
            </span>
            <span className="flex gap-2 items-center">
              <MdDone className="text-[#d97706]" />
              Extensive Italian wine selection
            </span>
            <span className="flex gap-2 items-center">
              <MdDone className="text-[#d97706]" />
              Extensive Italian wine selection
            </span>
          </div>
        </div>
        <img
          className="lg:w-2/5 w-full rounded-lg"
          src={homeFooterPhoto}
          alt="resturent"
        />
      </div>
    </>
  );
};

export default Specials;
