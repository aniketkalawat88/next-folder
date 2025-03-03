import React from "react";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative flex flex-col md:flex-row items-center justify-center min-h-screen  bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://bemyguestimagesnew.s3.ap-south-1.amazonaws.com/images/2024-10-04T09-35-29.103Z56.337553290265085.jpg")',
        }}
      >
        <div className="w-full bg-black bg-opacity-50">
          <div className="relative z-10  p-6 rounded-lg grid grid-cols-4 items-center justify-center max-w-7xl mx-auto">
            <p className="text-4xl md:text-6xl text-white font-bold mb-[50%]">
              Discover{" "}
              <span className="text-purple-500 md:text-8xl font-semibold">DUBAI</span>
            </p>
            <div className="col-span-3 flex">
              <div className="bg-gradient-to-b from-purple-600 to-purple-800 text-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl pl-4">
                <div className=" p-4 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex-1">
                  <h2 className="text-xl font-semibold mb-4">
                    Get best offers on Dubai Packages
                  </h2>
                  <img
                    alt="Scenic view of Dubai with Burj Al Arab in the background"
                    className="rounded-lg mb-4 h-60 w-full"
                    src="https://storage.googleapis.com/a1aa/image/cFfNaKYqmCDHKPRkTgfVVLgWifoqaLT9zq8D0DvGGrU.jpg"
                  />
                  <p className="mb-6">Plans starting ₹1265 only/-</p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <i className="fas fa-trophy text-3xl mt-4 mr-4"></i>
                      <div>
                        <p className="font-semibold">10+ Years of Experience</p>
                        <p>
                          A decade of crafting unforgettable travel experiences
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-book text-3xl mt-4 mr-4"></i>
                      <div>
                        <p className="font-semibold">100+ Expert Tour Guides</p>
                        <p>
                          Local experts ensuring the best insights and
                          adventures.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-handshake text-3xl mt-4 mr-4"></i>
                      <div>
                        <p className="font-semibold">
                          500+ Travelers Connected
                        </p>
                        <p>
                          Bringing wanderers together for seamless journeys.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 bg-white text-gray-700 rounded-xl">
                  <h2 className="text-2xl font-semibold mb-2">
                    Let's Make Your Travel Easy
                  </h2>
                  <h3 className="text-xl text-purple-700 mb-6">Talk to Us</h3>
                  <form className="space-y-4">
                    <div className="flex items-center border rounded-lg p-2">
                      <i className="fas fa-user text-gray-400 mr-2"></i>
                      <input
                        className="w-full outline-none"
                        placeholder="Name"
                        type="text"
                      />
                    </div>
                    <div className="flex items-center border rounded-lg p-2">
                      <i className="fas fa-envelope text-gray-400 mr-2"></i>
                      <input
                        className="w-full outline-none"
                        placeholder="E-mail"
                        type="email"
                      />
                    </div>
                    <div className="flex items-center border rounded-lg p-2">
                      <img
                        alt="India flag"
                        className="mr-2"
                        height={20}
                        src="https://storage.googleapis.com/a1aa/image/fTJahwXtJaRktGkJgRyHKi4ao2U_hjJG0FCT-m012gU.jpg"
                        width={20}
                      />
                      <span className="mr-2">+91</span>
                      <input
                        className="w-full outline-none"
                        placeholder="Phone Number"
                        type="text"
                      />
                    </div>
                    <div className="flex items-center border rounded-lg p-2">
                      <i className="fas fa-calendar-alt text-gray-400 mr-2"></i>
                      <input
                        className="w-full outline-none"
                        placeholder="Travel Date"
                        type="date"
                      />
                    </div>
                    <div className="border rounded-lg p-2">
                      <textarea
                        className="w-full outline-none h-24"
                        placeholder="Message:"
                        defaultValue={""}
                      />
                    </div>

                    <div className=" items-center space-x-4">
                      <p className="">How should we contact you?</p>
                      <div className="flex items-center">
                        <input
                          className="mr-2"
                          id="whatsapp"
                          name="contact"
                          type="radio"
                        />
                        <label className="flex items-center" htmlFor="whatsapp">
                          <i className="fab fa-whatsapp text-green-500 mr-1"></i>
                          Whatsapp
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="mr-2"
                          id="phone"
                          name="contact"
                          type="radio"
                        />
                        <label className="flex items-center" htmlFor="phone">
                          <i className="fas fa-phone-alt text-blue-500 mr-1"></i>
                          Phone Call
                        </label>
                      </div>
                    </div>
                    <button
                      className="w-full bg-purple-700 text-white py-2 rounded-lg"
                      type="submit"
                    >
                      Plan My Trip
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
