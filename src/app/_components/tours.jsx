import React from "react";

const tourData = [
  {
    id: 1,
    image: "https://storage.googleapis.com/a1aa/image/ycj5DE55WJodN-m6BEiQr2VxxzFk1OWlBmraobsJO5c.jpg",
    title: "Dhow Cruise with Dinner - Dubai Creek",
    price: "AED 55.00 / ₹1265",
    alt: "Interior of a dhow cruise with dinner setup",
  },
  {
    id: 2,
    image: "https://storage.googleapis.com/a1aa/image/ePs0vj5IHJmuAYWzIMnErINej5XoDNGDJezgfiGS-mk.jpg",
    title: "Luxury Yacht Ride - Dubai Marina",
    price: "AED 210.00 / ₹4830",
    alt: "Luxury yacht ride in Dubai Marina",
  },
  {
    id: 3,
    image: "https://storage.googleapis.com/a1aa/image/KbsF2h9BvQtk4EKBTglkN1O0m3aGaNShWdoT-tBbFbQ.jpg",
    title: "Desert Safari",
    price: "AED 157.50 / ₹3622.5",
    alt: "Desert safari with a car driving through sand dunes",
  },
  {
    id: 4,
    image: "https://storage.googleapis.com/a1aa/image/cJhZ83LbQosioPykK9434jS0zcIscLyKNpMR9Yd-OfM.jpg",
    title: "Atlantis Aquaventure Water Park",
    price: "AED 135.00 / ₹3105",
    alt: "Atlantis Aquaventure Water Park with water slides and pools",
  },
];

const Tours = () => {
  return (
  <div className="bg-white">
    <div className="max-w-6xl mx-auto px-4 py-8 relative">
      {/* ✅ Section Title (Updated to match Figma Spec) */}
      <h1 className="text-[2.5rem] font-bold text-[#1E1E1E] leading-[130%] font-montserrat text-center mb-8">
        Our Tours
      </h1>
  
      {/* ✅ Navigation Buttons */}
      <div className="flex justify-center md:justify-end mb-4 space-x-2">
      <button className="bg-gray-200 p-2 rounded">
        <i className="fas fa-chevron-left text-gray-600"></i>
      </button>
      <button className="bg-purple-600 p-2 rounded">
        <i className="fas fa-chevron-right text-white"></i>
      </button>
    </div>
  
      {/* ✅ Tour Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tourData.map((tour) => (
          <div
            key={tour.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-[1.05]"
          >
            {/* ✅ Tour Image */}
            <img
              src={tour.image}
              alt={tour.alt}
              className="w-full h-48 object-cover"
            />
  
            {/* ✅ Tour Details */}
            <div className="p-4">
              <h2 className="text-[18px] font-semibold text-[#1E1E1E] leading-[130%] font-montserrat mb-2">
                {tour.title}
              </h2>
              <p className="text-[14px] font-normal text-gray-500 leading-[150%] mb-2">
                Starting from only
              </p>
              <p className="text-xl font-semibold text-[#27AE60] leading-[130%] font-montserrat mb-4">
                {tour.price}
              </p>
  
              {/* ✅ Contact Buttons */}
              <div className="grid grid-cols-4 gap-4 mt-3">
                {/* WhatsApp Button */}
                <button className="border border-[#301C7B] text-[#301C7B] text-sm font-bold px-4 py-2 rounded flex items-center justify-center w-full hover:bg-[#301C7B] hover:text-white transition">
                  <i className="fab fa-whatsapp text-2xl"></i>
                </button>
                {/* Get Offers Button */}
                <button className="col-span-3 text-center border border-[#301C7B] text-[#301C7B] text-sm font-bold px-4 py-2 rounded flex items-center justify-center w-full hover:bg-[#301C7B] hover:text-white transition">
                  Get Offers
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Tours;
