import { RiStarFill } from "react-icons/ri";
import specialCardPhoto from "../assets/images/specialCardPhoto.png";

const SpecialsCard = () => {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            className="h-64 w-full object-cover object-top md:h-full"
            src={specialCardPhoto}
            alt="Photo"
          />
        </div>
        <div className="p-8 md:w-1/2">
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-3xl font-bold text-amber-900">
              Osso Buco alla Milanese
            </h3>
            <span className="text-2xl text-amber-700">$32.00</span>
          </div>
          <p className="mb-6 leading-relaxed text-gray-600">
            Tender braised veal shanks with saffron risotto, gremolata, and
            seasonal vegetables. A traditional Milanese masterpiece.
          </p>
          <div className="mb-4 flex items-center gap-2 text-amber-600">
            <div className="flex size-5 items-center justify-center">
              <RiStarFill />
            </div>
            <span className="font-semibold">Chef's Recommendation</span>
          </div>
          <button className="cursor-pointer rounded-lg bg-amber-600 px-6 py-2 font-semibold whitespace-nowrap text-white transition-colors hover:bg-amber-700">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialsCard;
