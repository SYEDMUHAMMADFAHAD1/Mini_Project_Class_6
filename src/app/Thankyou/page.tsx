export default function ThankYou() {
    return (
      <main
        className="flex flex-col justify-center items-center 
                   text-gray-800 bg-gradient-to-b from-white to-sky-100 h-screen"
        aria-labelledby="thank-you-title"
      >
        <h1
          id="thank-you-title"
          className="text-black-800 font-extrabold 
                     italic text-4xl sm:text-5xl md:text-7xl tracking-wide"
        >
          Thank you for shopping!
        </h1>
        <p className="pt-8 md:pt-12 text-lg md:text-xl text-black-800">
          Your order will be delivered in 3 business days.
        </p>
      </main>
    );
  }
  