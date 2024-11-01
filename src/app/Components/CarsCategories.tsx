export default function CarsCategories() {
    return (
      <div>
        {/* Heading at the Top */}
        <h1 className="text-3xl font-bold text-center text-white bg-gray-800 py-4">
          Explore Cars Categories
        </h1>
  
        <div className="flex justify-evenly text-gray-400 bg-gray-800 font-serif font-light py-10 cursor-pointer">
          {/* Cars By Make */}
          <ul>
            <span className="text-white font-semibold text-md">Cars By Make</span>
            <li>Toyota Cars for Sale</li>
            <li>Suzuki Cars for Sale</li>
            <li>Honda Cars for Sale</li>
            <li>Daihatsu Cars for Sale</li>
            <li>Mitsubishi Cars for Sale</li>
            <li>Nissan Cars for Sale</li>
            <li>Mercedes Cars for Sale</li>
            <li>Hyundai Cars for Sale</li>
            <li>BMW Cars for Sale</li>
          </ul>
  
          {/* Cars By City */}
          <ul>
            <span className="text-white font-semibold text-md">Cars By City</span>
            <li>Cars in Lahore</li>
            <li>Cars in Karachi</li>
            <li>Cars in Islamabad</li>
            <li>Cars in Rawalpindi</li>
            <li>Cars in Peshawar</li>
            <li>Cars in Faisalabad</li>
            <li>Cars in Multan</li>
            <li>Cars in Gujranwala</li>
            <li>Cars in Sialkot</li>
            <li>Cars in Sargodha</li>
          </ul>
  
          {/* Explore PakWheels */}
          <ul>
            <span className="text-white font-semibold text-md">Explore PakWheels</span>
            <li>Used Cars</li>
            <li>Used Bikes</li>
            <li>New Cars</li>
            <li>Auto Parts & Accessories</li>
            <li>Cool Rides</li>
            <li>Forums</li>
            <li>Autoshow</li>
            <li>Sitemap</li>
          </ul>
  
          {/* PakWheels.com Info */}
          <ul>
            <span className="text-white font-semibold text-md">PakWheels.com</span>
            <li>About PakWheels.com</li>
            <li>Our Products</li>
            <li>Advertise With Us</li>
            <li>How To Pay</li>
            <li>FAQs</li>
            <li>Refunds & Returns</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
  
          {/* Cars by Province */}
          <ul>
            <span className="text-white font-semibold text-md">Cars by Province</span>
            <li>Cars in Punjab</li>
            <li>Cars in Sindh</li>
            <li>Cars in KPK</li>
            <li>Cars in Balochistan</li>
            <li>Cars in Azad Kashmir</li>
            <li>Cars in Federally Administered</li>
            <li>Tribal Area</li>
          </ul>
        </div>
        <hr />
      </div>
    );
  }
  