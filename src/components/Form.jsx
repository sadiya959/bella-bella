import { useForm } from "react-hook-form";

const preferredTimes = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
];

const numberGuests = [1, 2, 3, 4, 5, 6, 7, "8+"];

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="bg-white shadow-lg rounded-lg w-full my-12 p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 mb-6">
        {/* input group  */}
        <div className="flex flex-col">
          <label
            className="text-sm text-gray-700 font-medium mb-1"
            htmlFor="fullname"
          >
            Full Name *
          </label>
          <input
            className="border border-gray-200 px-4 py-3 outline-none hover:border-[#d97706] rounded-lg"
            type="text"
            placeholder="Enter your fullname"
            {...register("fullname")}
          />
        </div>
        {/* input group  */}
        <div className="flex flex-col">
          <label
            className="text-sm text-gray-700 font-medium mb-1"
            htmlFor="email"
          >
            Email Address *
          </label>
          <input
            className="border border-gray-200 px-4 py-3 outline-none hover:border-[#d97706] rounded-lg"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
        </div>

        {/* input group  */}
        <div className="flex flex-col">
          <label
            className="text-sm text-gray-700 font-medium mb-1"
            htmlFor="phone"
          >
            Phone Number *
          </label>
          <input
            className="border border-gray-200 px-4 py-3 outline-none hover:border-[#d97706] rounded-lg"
            type="phone"
            placeholder="Enter your Phone number"
            {...register("phone")}
          />
        </div>
        {/* input group  */}
        <div className="flex flex-col">
          <label
            className="text-sm text-gray-700 font-medium mb-1"
            htmlFor="date"
          >
            Reservation Date *
          </label>
          <input
            className="border border-gray-200 px-4 py-3 outline-none hover:border-[#d97706] rounded-lg"
            type="date"
            {...register("date")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Preferred Time */}
        <div>
          <label lassName="text-sm text-gray-700 font-medium mb-1">
            Preferred Time *
          </label>
          <div className="grid grid-cols-2 gap-2">
            {preferredTimes.map((preferredTime) => (
              <label
                key={preferredTime}
                className="mb-1 cursor-pointer text-sm font-medium text-gray-700"
              >
                <input
                  type="radio"
                  value={preferredTime}
                  {...register("preferredTime")}
                  className="hidden peer"
                />
                <span className="block py-3 px-8 text-center border border-gray-200 rounded-lg shadow bg-white   peer-checked:bg-[#d97706] peer-checked:text-white">
                  {preferredTime}
                </span>
              </label>
            ))}
          </div>
        </div>
        {/* Number of Guests */}
        <div>
          <label className="text-sm text-gray-700 font-medium mb-1">
            Number of Guests *
          </label>
          <div className="grid grid-cols-4 gap-2 ">
            {numberGuests.map((numberGuest) => (
              <label
                key={numberGuest}
                className="mb-1 cursor-pointer text-sm font-medium text-gray-700"
              >
                <input
                  type="radio"
                  value={numberGuest}
                  {...register("numberGuest")}
                  className="hidden peer"
                />
                <span className="peer-checked:bg-[#d97706] peer-checked:text-white block py-3 px-8 text-center border border-gray-200 rounded-lg shadow bg-white">
                  {numberGuest}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Special Requests */}
      <div className="mt-6">
        <label
          className="text-sm text-gray-700 w-full font-medium"
          htmlFor="request"
        >
          Special Requests *
        </label>
        <textarea
          className="w-full border border-gray-200 outline-none py-3 px-4 rounded-lg mt-1"
          name="request"
          {...register("request")}
          placeholder="Any dietary restrictions, allergies, or special occasions we should know about?"
        ></textarea>
        <p className="text-gray-500 text-sm">0/500 characters</p>
      </div>

      <div className="my-6 flex justify-center items-center">
        <button
          className="bg-[#d97706] rounded-lg cursor-pointer text-white px-12 py-4 outline-none hover:border-[#d97706] text-lg font-bold"
          type="submit"
        >
          Reserve Table
        </button>
      </div>
    </form>
  );
};

export default Form;
