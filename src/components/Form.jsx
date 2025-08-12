import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdDone } from "react-icons/md";

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

  const [confirm, setConfirm] = useState(false);

  const onsubmit = (data) => {
    console.log(data);

    setConfirm(true);

    setTimeout(() => {
      setConfirm(false);
    }, 3000);
  };

  return confirm ? (
    <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center gap-4 rounded-lg bg-white px-4 py-12 shadow-lg">
      <div className="rounded-full bg-green-100 p-6 text-green-800">
        <MdDone size={20} />
      </div>
      <h2 className="text-3xl text-green-600"> Reservation Confirmed!</h2>
      <p className="text-gray-600">
        Thank you for choosing Bella Vista. We look forward to serving you.
      </p>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="my-12 w-full rounded-lg bg-white p-8 shadow-lg"
    >
      <div className="mb-6 grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        {/* input group  */}
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="fullname"
          >
            Full Name *
          </label>
          <input
            className="rounded-lg border border-gray-200 px-4 py-3 outline-none hover:border-[#d97706]"
            type="text"
            required
            placeholder="Enter your fullname"
            {...register("fullname")}
          />
        </div>
        {/* input group  */}
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email Address *
          </label>
          <input
            className="rounded-lg border border-gray-200 px-4 py-3 outline-none hover:border-[#d97706]"
            type="email"
            required
            placeholder="Enter your email"
            {...register("email")}
          />
        </div>

        {/* input group  */}
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            Phone Number *
          </label>
          <input
            className="rounded-lg border border-gray-200 px-4 py-3 outline-none hover:border-[#d97706]"
            type="phone"
            required
            placeholder="Enter your Phone number"
            {...register("phone")}
          />
        </div>
        {/* input group  */}
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="date"
          >
            Reservation Date *
          </label>
          <input
            className="rounded-lg border border-gray-200 px-4 py-3 outline-none hover:border-[#d97706]"
            type="date"
            required
            {...register("date")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                  required
                  value={preferredTime}
                  {...register("preferredTime")}
                  className="peer hidden"
                />
                <span className="block rounded-lg border border-gray-200 bg-white px-8 py-3 text-center shadow peer-checked:bg-[#d97706] peer-checked:text-white">
                  {preferredTime}
                </span>
              </label>
            ))}
          </div>
        </div>
        {/* Number of Guests */}
        <div>
          <label className="mb-1 text-sm font-medium text-gray-700">
            Number of Guests *
          </label>
          <div className="grid grid-cols-4 gap-2">
            {numberGuests.map((numberGuest) => (
              <label
                key={numberGuest}
                className="mb-1 cursor-pointer text-sm font-medium text-gray-700"
              >
                <input
                  type="radio"
                  required
                  value={numberGuest}
                  {...register("numberGuest")}
                  className="peer hidden"
                />
                <span className="block rounded-lg border border-gray-200 bg-white px-8 py-3 text-center shadow peer-checked:bg-[#d97706] peer-checked:text-white">
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
          className="w-full text-sm font-medium text-gray-700"
          htmlFor="request"
        >
          Special Requests *
        </label>
        <textarea
          className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none"
          name="request"
          {...register("request")}
          placeholder="Any dietary restrictions, allergies, or special occasions we should know about?"
        ></textarea>
        <p className="text-sm text-gray-500">0/500 characters</p>
      </div>

      <div className="my-6 flex items-center justify-center">
        <button
          className="cursor-pointer rounded-lg bg-[#d97706] px-12 py-4 text-lg font-bold text-white outline-none hover:border-[#d97706]"
          type="submit"
        >
          Reserve Table
        </button>
      </div>
    </form>
  );
};

export default Form;
