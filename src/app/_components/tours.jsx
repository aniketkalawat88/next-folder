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
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Tours</h1>
      <div className="flex justify-end absolute top-10 right-0 mb-8">
        <button className="bg-gray-300 text-gray-700 rounded p-2 mx-2">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="bg-purple-600 text-white rounded p-2 mx-2">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      {/* Tour Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tourData.map((tour) => (
          <div key={tour.id} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={tour.image} alt={tour.alt} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{tour.title}</h2>
              <p className="text-sm text-gray-500 mb-2">Starting from only</p>
              <p className="text-green-600 text-xl font-bold mb-4">{tour.price}</p>
              <div className="grid grid-cols-4 gap-4 mt-3">
              <button className="border border-purple-600 text-purple-600 text-sm font-bold px-4 py-2 rounded flex items-center justify-center w-full">
                <i className="fab fa-whatsapp text-2xl"></i>
              </button>
              <button className="col-span-3 text-center border border-purple-600 text-purple-600 text-sm font-bold px-4 py-2 rounded flex items-center justify-center w-full">
                Get Offers
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
    
    </div>

    </div>
  );
};

export default Tours;
