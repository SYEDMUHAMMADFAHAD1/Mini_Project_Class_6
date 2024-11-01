import Link from "next/link";
import Image from "next/image";

export default function Car1() {
  return (
    <div className="mt-5 mx-auto max-w-4xl bg-gray-50 p-8 mb-10 rounded-lg shadow-md">
      <h1 className="text-4xl text-blue-800 font-extrabold font-sans py-4 text-center">
        <ins>Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs</ins>
      </h1>
      <div className="flex justify-center mt-6">
        <div className="relative overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
          <Image
            src="/images/suzuki.png"
            alt="Suzuki Alto 2024"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
        </div>
      </div>
      <div className="flex mt-8 gap-4 justify-center flex-wrap">
        <button className="text-white bg-blue-600 hover:bg-blue-700 hover:text-white font-semibold text-base py-2 px-6 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
          Book a Test Drive
        </button>
        <button className="text-blue-600 hover:bg-blue-700 hover:text-white font-semibold text-base py-2 px-6 rounded-full shadow-lg border-2 border-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white">
          Request Bank Finance
        </button>
        <button className="text-blue-600 hover:bg-blue-700 hover:text-white font-semibold text-base py-2 px-6 rounded-full shadow-lg border-2 border-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white">
          Visit Place
        </button>
        <button className="text-blue-600 hover:bg-blue-700 hover:text-white font-semibold text-base py-2 px-6 rounded-full shadow-lg border-2 border-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white">
          Car Inspection
        </button>
      </div>
      <h2 className="text-center mt-8 text-2xl font-bold text-black">Vehicle Description</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm mt-4 text-gray-700">
        <div><strong>Number of Doors:</strong> 4</div>
        <div><strong>Engine:</strong> 660 cc</div>
        <div><strong>Condition:</strong> 9 / 10</div>
        <div><strong>Driven:</strong> 8,500 KM</div>
        <div><strong>Suspension Type:</strong> Soft Suspension</div>
        <div><strong>Average:</strong> 14 Km per ltr</div>
        <div><strong>Transmission:</strong> Automatic</div>
        <div><strong>Fuel Type:</strong> High Octane</div>
      </div>
      <h2 className="text-green-700 text-3xl mt-8 font-bold text-center">
        PKR 2,550,000
      </h2>
      <div className="text-center mt-12">
        <Link href="/CheckoutForm">
          <button className="text-white bg-blue-600 hover:bg-blue-700 hover:text-white shadow-lg font-semibold text-base py-3 px-8 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105">
            Make Payment
          </button>
        </Link>
      </div>
    </div>
  );
}
