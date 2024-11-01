import Link from "next/link";

export default function Form() {
  return (
    <div className="py-8 mt-8 mb-6 mx-auto max-w-2xl bg-white shadow-md rounded-lg">
      <h1 className="text-center text-blue-800 text-3xl font-bold mb-6">
        Enter Your Details and Place Your Order
      </h1>

      <form className="flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-3/4 px-4 py-2 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-blue-500"
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-3/4 px-4 py-2 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-blue-500"
        />

        <input
          type="number"
          placeholder="Enter Your Contact Number"
          className="w-3/4 px-4 py-2 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-blue-500"
        />

        <input
          type="number"
          placeholder="Enter Your Card Pin"
          className="w-3/4 px-4 py-2 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-blue-500"
        />

        <textarea
          placeholder="Enter Your Address"
          className="w-3/4 px-4 py-2 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
        ></textarea>
      </form>

      {/* Button */}
      <div className="text-center mt-8">
        <Link href="/Thankyou">
          <button className="text-white bg-blue-600 hover:bg-green-600 font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out">
            Place Your Order
          </button>
        </Link>
      </div>
    </div>
  );
}
