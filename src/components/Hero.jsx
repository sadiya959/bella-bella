import heroImage from "../assets/images/herophoto.jpg";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Bella Bella</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto text-gray-200 mb-6">
            Authentic Italian cuisine crafted with passion and served with love.
            Experience the true taste of Italy.
          </p>

          <div className="gap-4 flex  flex-col md:flex-row justify-center">
            <Link
              to="/menu"
              className="bg-[#d97706] font-semibold text-lg px-6 py-3 rounded-lg hover:bg-[#d97706]"
            >
              View Menu
            </Link>

            <Link
              to="/booking"
              className="border text-lg font-semibold hover:text-[#d97706]  border-[#fff] px-6 py-3 rounded-lg hover:bg-[#fff]"
            >
              Book Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
