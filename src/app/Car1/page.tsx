import Link from "next/link";
import Image from "next/image";

export default function Car1() {
  return (
    <div className="pt-28">
      <div className="mx-auto max-w-4xl bg-gradient-to-r from-gray-50 to-gray-100 p-10 mb-12 rounded-3xl shadow-2xl">
        <h1 className="text-4xl text-indigo-900 font-extrabold font-sans py-4 text-center underline decoration-indigo-500">
          Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>
        <div className="flex justify-center mt-8">
          <div
            className="relative overflow-hidden rounded-lg"
            style={{ maxHeight: "350px", width: "100%", maxWidth: "500px" }}
          >
            <Image
              src="/images/toyota.jpg"
              alt="Toyota Corolla 2024"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-indigo-700 opacity-0 hover:opacity-30 transition-opacity rounded-lg"></div>
          </div>
        </div>

        <div className="flex mt-10 gap-4 justify-center flex-wrap">
          <button className="text-white bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 font-semibold text-base py-2 px-6 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110">
            Book a Test Drive
          </button>
          <button className="text-indigo-800 hover:text-white bg-white hover:bg-indigo-700 font-semibold text-base py-2 px-6 rounded-full shadow-lg border-2 border-indigo-700 transition-transform duration-300 ease-in-out transform hover:scale-110">
            Request Bank Finance
          </button>
          <button className="text-indigo-800 hover:text-white bg-white hover:bg-indigo-700 font-semibold text-base py-2 px-6 rounded-full shadow-lg border-2 border-indigo-700 transition-transform duration-300 ease-in-out transform hover:scale-110">
            Visit Place
          </button>
          <button className="text-indigo-800 hover:text-white bg-white hover:bg-indigo-700 font-semibold text-base py-2 px-6 rounded-full shadow-lg border-2 border-indigo-700 transition-transform duration-300 ease-in-out transform hover:scale-110">
            Car Inspection
          </button>
        </div>

        <h2 className="text-center mt-10 text-2xl font-bold text-gray-900">
          Vehicle Description
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm mt-6 text-gray-700 font-medium">
          <div><strong>Number of Doors:</strong> 4</div>
          <div><strong>Engine:</strong> 1800 CC</div>
          <div><strong>Condition:</strong> 8.5 / 10</div>
          <div><strong>Driven:</strong> 9,500 KM</div>
          <div><strong>Suspension Type:</strong> Soft Suspension</div>
          <div><strong>Average:</strong> 13 Km per ltr</div>
          <div><strong>Transmission:</strong> Automatic</div>
          <div><strong>Fuel Type:</strong> High Octane</div>
        </div>

        <h2 className="text-green-700 text-3xl mt-10 font-bold text-center">
          PKR 5,000,000
        </h2>

        <div className="text-center mt-12">
          <Link href="/CheckoutForm">
            <button className="text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 shadow-2xl font-semibold text-base py-3 px-8 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">
              Make Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
