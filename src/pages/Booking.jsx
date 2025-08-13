import Form from "../components/Form";
import PageHeader from "../components/PageHeader";

const Booking = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="w-full bg-[#fffbeb] p-4">
        <div className="mx-auto max-w-4xl py-12">
          <PageHeader
            title={"Reserve Your Table"}
            description={
              "Join us for an unforgettable dining experience. Book your table and let us create magical moments for you."
            }
          />

          <Form />
        </div>
      </div>
      <div className="mx-auto my-20 flex max-w-7xl flex-col items-center justify-center">
        <div className="space-y-4 text-center">
          <h2 className="text-5xl font-bold text-[#78350f]">
            Why Choose Bella Vista?
          </h2>
          <p className="max-w-2xl text-xl text-gray-600">
            Experience the perfect blend of authentic Italian cuisine and warm
            hospitality
          </p>
        </div>
        {/* Why Choose Bella Vista */}
        <div className="my-12 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <img
              className="h-48 w-full rounded-lg object-cover object-top"
              src="https://readdy.ai/api/search-image?query=Professional%20Italian%20chef%20in%20white%20uniform%20preparing%20fresh%20pasta%20in%20modern%20kitchen%20with%20warm%20lighting.%20Clean%20simple%20background%20highlighting%20skilled%20craftsmanship%20and%20attention%20to%20detail%20in%20food%20preparation&width=400&height=300&seq=chef1&orientation=landscape"
              alt="chef"
            />
            <div className="text-center">
              <h4 className="text-xl font-medium text-[#78350f]">
                Expert Chefs
              </h4>
              <p className="text-lg text-gray-600">
                Our skilled chefs bring decades of experience from the finest
                Italian kitchens.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <img
              className="h-48 w-full rounded-lg object-cover object-top"
              src="https://readdy.ai/api/search-image?query=Fresh%20Italian%20ingredients%20including%20ripe%20tomatoes%2C%20basil%2C%20mozzarella%2C%20olive%20oil%2C%20and%20pasta%20arranged%20beautifully%20on%20rustic%20wooden%20surface.%20Clean%20simple%20background%20highlighting%20quality%20and%20freshness%20of%20ingredients&width=400&height=300&seq=ingredients1&orientation=landscape"
              alt="chef"
            />
            <div className="text-center">
              <h4 className="text-xl font-medium text-[#78350f]">
                Fresh Ingredients
              </h4>
              <p className="text-lg text-gray-600">
                We source only the finest ingredients, many imported directly
                from Italy.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <img
              className="h-48 w-full rounded-lg object-cover object-top"
              src="https://readdy.ai/api/search-image?query=Elegant%20Italian%20restaurant%20dining%20room%20with%20warm%20ambient%20lighting%2C%20comfortable%20seating%2C%20and%20romantic%20atmosphere.%20Clean%20simple%20background%20highlighting%20intimate%20dining%20experience%20and%20welcoming%20environment&width=400&height=300&seq=atmosphere2&orientation=landscape"
              alt="chef"
            />
            <div className="text-center">
              <h4 className="text-xl font-medium text-[#78350f]">
                Romantic Atmosphere
              </h4>
              <p className="text-lg text-gray-600">
                Intimate setting perfect for special occasions and memorable
                dining experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
