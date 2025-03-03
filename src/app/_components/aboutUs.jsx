import React from 'react'

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-14 overflow-hidden bg-white rounded-lg shadow-lg my-10 relative">
        <div className="grid grid-cols-2 items-center justify-center">
            <div className="relative">
                <div className=' h-[40rem] w-56 mx-auto bg-purple-800/50 absolute left-1/4 -top-28 rotate-12' />
            <img
                alt="Dubai Frame with a clear blue sky in the background"
                className="rounded-lg z-10 w-full mx-auto h-[26rem] relative"
                src="https://storage.googleapis.com/a1aa/image/vb_bZYRvgplqS-l4Lh4E8A3wqNT0fhiCxznL6a49AXM.jpg"
            />
            </div>
            <div className="md:pl-8 my-6 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-800">
                Discover Dubai with Experts
            </h2>
            <p className="text-gray-600 mt-4">
                Whether it’s the Burj Khalifa, desert safaris, or dhow cruises, we
                ensure every moment is magical. Let us plan, so you can explore
                stress-free.
            </p>
            <h3 className="text-xl font-bold text-gray-800 mt-6">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>
                <a className="text-purple-600 font-medium" href="#">
                    Handpicked Experiences
                </a>{" "}
                – From iconic landmarks to hidden gems
                </li>
                <li>
                <a className="text-purple-600 font-medium" href="#">
                    Seamless Travel Planning
                </a>{" "}
                – We handle the details, so you don’t have to
                </li>
                <li>
                <a className="text-purple-600 font-medium" href="#">
                    Trusted by Travelers
                </a>{" "}
                – 10+ years of expertise in curated tours
                </li>
                <li>
                <a className="text-purple-600 font-medium" href="#">
                    Exclusive Deals &amp; Packages
                </a>{" "}
                – Best prices for unforgettable memories
                </li>
            </ul>
            <button className="mt-6 bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800">
                Plan My Trip
            </button>
            </div>
        </div>
    </div>

  )
}

export default AboutUs