import React from 'react'

const Blogs = () => {
    const tourData = ["","","",""]
  return (
    <div className="bg-white">
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Blogs</h1>
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
        
    <div className="bg-white rounded-lg shadow-lg">
    <img
      alt="Interior of a luxurious restaurant with neatly arranged tables and chairs, set for dining"
      className="rounded-t-lg w-full h-40"
      src="https://storage.googleapis.com/a1aa/image/BYmNTZiiRGWIMECYeVeh8lDgSrvte5V7aksWvJyot0Q.jpg"
    />
    <div className="p-4">
      <p className="text-gray-500 text-sm">Dubai Travel Guide</p>
      <h2 className="text-2xl font-bold text-purple-800">Dubai Travel Guide</h2>
      <p className="text-gray-700 mt-2">
        Discover the iconic landmarks, luxurious resorts, and adventure-filled
        activities that make Dubai a top tourist destination.
      </p>
    </div>
  </div>
        ))}
      </div>

      {/* Navigation Buttons */}
    
    </div>

    </div>

  )
}

export default Blogs