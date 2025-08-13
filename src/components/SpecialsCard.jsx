import { RiStarFill } from "react-icons/ri";
import specialCardPhoto from "../assets/images/specialCardPhoto.png";

const SpecialsCard = () => {
  return (
    <div className="max-w-4xl my-12 text-[#78350f] bg-white shadow-lg rounded-lg ">
      <div className="flex flex-col md:flex-row">
        <img className="md:w-2/4 w-4/4 object-cover" src={specialCardPhoto} alt="Photo" />
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="md:text-3xl text-2xl font-bold">Osso Buco alla Milanese </h3>
            <span className="text-[#b45309] text-2xl">$32.00</span>
          </div>
          <p className="text-base text-gray-600">
            Tender braised veal shanks with saffron risotto, gremolata, and
            seasonal vegetables. A traditional Milanese masterpiece.
          </p>
          <span className="flex items-center gap-2 text-[#d97706] text-base font-semibold">
            {" "}
            <RiStarFill /> Chef's Recommendation
          </span>
          <button className="bg-[#D97706] rounded py-2 px-2 font-bold text-white text-xl cursor-pointer">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialsCard;
