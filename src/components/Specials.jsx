import { useState } from "react";
import SpecialsCard from "./SpecialsCard";
import homeFooterPhoto from "../assets/images/homeFooterPhoto.png";
import { MdDone } from "react-icons/md";

const Specials = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      {/* Today's Special */}
      <div className="mt-8 flex flex-col items-center justify-center gap-3 bg-[#fffbeb] p-4 lg:p-20">
        <h3 className="text-center text-3xl font-bold text-[#78350f] md:text-4xl">
          Today's Special
        </h3>
        <p className="max-w-2xl text-center text-sm text-gray-600 md:text-xl">
          Our chef's carefully crafted daily special, made with the finest
          seasonal ingredients
        </p>
        <div className="mb-8 text-center">
          <button
            onClick={() => setShowCard(!showCard)}
            className="mt-12 cursor-pointer rounded bg-[#D97706] px-6 py-3 text-sm font-bold text-white md:text-xl"
          >
            {showCard ? "Hide Special " : "Show Today's Special"}
          </button>
        </div>

        {showCard && <SpecialsCard />}
      </div>

      {/* two columns top of footer  */}
      <div className="flex flex-wrap items-center justify-center gap-12 bg-[#7B3306] px-6 py-12 text-[#fde68a] lg:py-20">
        <div className="space-y-6">
          <h4 className="text-4xl font-bold text-white">Experience Italy</h4>
          <p className="max-w-3xl text-xl lg:max-w-xl">
            Step into our warm and inviting atmosphere where every meal is a
            celebration. Our rustic Italian decor and intimate lighting create
            the perfect setting for romantic dinners, family gatherings, and
            special occasions.
          </p>

          <div className="space-y-4 text-base">
            <span className="flex items-center gap-2">
              <MdDone className="text-[#d97706]" />
              Intimate candlelit dining
            </span>
            <span className="flex items-center gap-2">
              <MdDone className="text-[#d97706]" />
              Extensive Italian wine selection
            </span>
            <span className="flex items-center gap-2">
              <MdDone className="text-[#d97706]" />
              Extensive Italian wine selection
            </span>
          </div>
        </div>
        <img
          className="w-full rounded-lg lg:w-2/5"
          src={homeFooterPhoto}
          alt="resturent"
        />
      </div>
    </>
  );
};

export default Specials;
