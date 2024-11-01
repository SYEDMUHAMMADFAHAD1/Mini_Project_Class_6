import Image from "next/image";
import Link from "next/link";

export default function FeaturesCars() {
  return (
    <div className="mt-2 px-5">
      {/* Header */}
      <div className="flex justify-between px-32 py-4 w-full bg-white cursor-pointer">
        <div className="text-2xl font-sans font-bold text-black">Featured New Cars</div>
        <div className="text-md font-sans text-blue-600 underline hover:text-blue-800">View All New Cars</div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center py-6 bg-white">
        <input
          type="text"
          placeholder="Search for cars..."
          className="w-2/3 px-4 py-2 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:border-blue-500"
        />
        <button className="ml-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
          Search
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-start gap-6 px-32 py-4 w-full bg-white cursor-pointer">
        <Link href="/" className="text-xl font-serif font-bold text-gray-800 hover:text-black hover:border-b-2 border-blue-700">
          Popular
        </Link>
        <Link href="/" className="text-xl font-serif font-bold text-gray-800 hover:text-black hover:border-b-2 border-blue-700">
          Upcoming
        </Link>
        <Link href="/" className="text-xl font-serif font-bold text-gray-800 hover:text-black hover:border-b-2 border-blue-700">
          Newly Launched
        </Link>
      </div>
      <hr />

      {/* Cars */}
      <div className="flex bg-white mt-2 flex-wrap mb-6 justify-center">
        {/* Car 1 */}
        <Link href="/Car1">
          <div className="w-56 border-2 rounded-md p-4 m-2 cursor-pointer shadow-md transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/Car1.jpg"
              alt="Toyota Corolla"
              width={200}
              height={300}
              className="w-full object-contain mb-4"
            />
            <h3 className="text-blue-900 font-sans text-lg text-center font-semibold">Toyota Corolla</h3>
            <p className="text-green-700 text-md font-sans text-center font-bold">PKR 65.7 - 75.5 lacs</p>
            <p className="text-md text-center mt-2">
              <span className="text-orange-600">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 782 Reviews
            </p>
          </div>
        </Link>

        {/* Car 2 */}
        <Link href="/Car2">
          <div className="w-56 border-2 rounded-md p-4 m-2 cursor-pointer shadow-md transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/Car2.png"
              alt="Suzuki Alto"
              width={200}
              height={300}
              className="w-full object-contain mb-4"
            />
            <h3 className="text-blue-900 font-sans text-lg text-center font-semibold">Suzuki Alto</h3>
            <p className="text-green-700 text-md font-sans text-center font-bold">PKR 20.3 - 35.5 lacs</p>
            <p className="text-md text-center mt-2">
              <span className="text-orange-600">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 159 Reviews
            </p>
          </div>
        </Link>

        {/* Car 3 */}
        <Link href="/Car3">
          <div className="w-56 border-2 rounded-md p-4 m-2 cursor-pointer shadow-md transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/Car3.jpg"
              alt="Honda City"
              width={200}
              height={300}
              className="w-full object-contain mb-4"
            />
            <h3 className="text-blue-900 font-sans text-lg text-center font-semibold">Honda City</h3>
            <p className="text-green-700 text-md font-sans text-center font-bold">PKR 44.5 - 60.5 lacs</p>
            <p className="text-md text-center mt-2">
              <span className="text-orange-600">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 356 Reviews
            </p>
          </div>
        </Link>

        {/* Car 4 */}
        <Link href="/Car4">
          <div className="w-56 border-2 rounded-md p-4 m-2 cursor-pointer shadow-md transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/Car3.jpg"
              alt="Honda Civic"
              width={300}
              height={300}
              className="w-full object-contain mb-4"
            />
            <h3 className="text-blue-900 font-sans text-lg text-center font-semibold">Honda Civic</h3>
            <p className="text-green-700 text-md font-sans text-center font-bold">PKR 80.6 - 99.0 lacs</p>
            <p className="text-md text-center mt-2">
              <span className="text-orange-600">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 459 Reviews
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
