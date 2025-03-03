import React from "react";

const packagesData = [
  {
    id: 1,
    image: "https://storage.googleapis.com/a1aa/image/ebNaUVVjFent5hUWT8vuppFa_Zl8q_zOTINs2w2Z9cc.jpg",
    title: "Gorgeous Dubai",
    duration: "6D/7N",
    discount: "25% Off",
    rating: 4,
    highlights: [
      "Burj Khalifa & Palm Jumeirah",
      "Luxury shopping at world-class malls",
      "Desert safaris with Dune Bashing",
      "Fine dining & Cultural Experiences",
    ],
    price: "$555",
    inrPrice: "₹44,444",
  },
  {
    id: 2,
    image: "https://storage.googleapis.com/a1aa/image/pvcSyeqKcElkQjzOB14QrpGVe2iwmK-BUYwQBkL0ZKM.jpg",
    title: "Stunning Dubai",
    duration: "6D/7N",
    discount: "25% Off",
    rating: 5,
    highlights: [
      "Evening Dhow Cruise",
      "Enjoy a magical dinner on Dubai Creek",
      "Historic & Cultural Attractions",
      "Modern Architectural Wonders",
    ],
    price: "$999",
    inrPrice: "₹80,888",
  },
  {
    id: 3,
    image: "https://storage.googleapis.com/a1aa/image/gan8fi4IYMfVjXxAtP8yh510-y9mRMJUJ0TJl-mHKq4.jpg",
    title: "Stunning Dubai - Fantastic AbuDhabi",
    duration: "6D/7N",
    discount: "25% Off",
    rating: 4,
    highlights: [
      "Sheikh Zayed Grand Mosque",
      "Ferrari World Abu Dhabi",
      "Dubai Frame – Panoramic city views",
      "Luxury Stays & VIP Experiences",
    ],
    price: "$1333",
    inrPrice: "₹1,15,111",
  },
];

const Packages = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-6">
    <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
      Our Popular Tour Packages
    </h1>

    {/* Navigation Buttons */}
    <div className="flex justify-center md:justify-end mb-4 space-x-2">
      <button className="bg-gray-200 p-2 rounded-full">
        <i className="fas fa-chevron-left text-gray-600"></i>
      </button>
      <button className="bg-purple-600 p-2 rounded-full">
        <i className="fas fa-chevron-right text-white"></i>
      </button>
    </div>

    {/* Package Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {packagesData.map((pkg) => (
        <div
          key={pkg.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105"
        >
          {/* Image Section */}
          <div className="relative">
            <img src={pkg.image} alt={pkg.title} className="w-full h-52 sm:h-56 object-cover" />
            <div className="absolute top-44 sm:top-48 flex justify-between w-full px-2">
              <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">
                {pkg.duration}
              </span>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                {pkg.discount}
              </span>
            </div>
          </div>

          {/* Package Details */}
          <div className="p-4">
            <h2 className="text-lg md:text-xl font-bold mb-2">{pkg.title}</h2>

            {/* Rating */}
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={`fas fa-star ${
                    index < pkg.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                ></i>
              ))}
            </div>

            {/* Highlights */}
            <ul className="text-sm text-gray-700 mb-2">
              {pkg.highlights.map((highlight, index) => (
                <li key={index}>• {highlight}</li>
              ))}
            </ul>

            {/* Pricing & Button Section */}
            <div className="flex flex-row justify-between items-center">
              <div>
                <div className="text-lg font-bold text-green-600">{pkg.price}</div>
                <div className="text-xl sm:text-2xl text-green-600 mb-1">({pkg.inrPrice})</div>
                <div className="text-xs text-gray-500">Total package cost</div>
              </div>
              <button className="bg-purple-600 text-white text-sm font-bold px-4 py-2 rounded flex items-center mt-3 sm:mt-0">
                <i className="fas fa-book mr-2"></i> View Tour
              </button>
            </div>

            {/* Contact Buttons */}
            <div className="grid grid-cols-4 gap-4 mt-3">
              <button className="border border-purple-600 text-purple-600 text-sm font-bold px-4 py-2 rounded flex items-center justify-center w-full">
                <i className="fab fa-whatsapp text-2xl"></i>
              </button>
              <button className="col-span-3 text-center border border-purple-600 text-purple-600 text-sm font-bold px-4 py-2 rounded flex items-center justify-center w-full">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Packages;
