import React from 'react'

const Contact = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-7xl mx-auto w-full my-10">
  <div className="grid grid-cols-2 h-full ">
    <div className="relative">
      <img
        alt="A beautiful mosque with its reflection in the water during sunset"
        className="w-full h-full absolute object-cover"
        src="https://storage.googleapis.com/a1aa/image/LYxsMwHoStMxpzReTI-91SiC605UDJakusmGksiFzfI.jpg"
      />
    </div>
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-2">Your Perfect Vacation</h2>
      <h3 className="text-xl text-purple-700 mb-6">Starts Here!</h3>
      <form>
        <div className="mb-4">
       
          <input
            className="w-full px-3 py-2 border rounded-lg"
            id="name"
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="mb-4">
   
          <input
            className="w-full px-3 py-2 border rounded-lg"
            id="email"
            placeholder="E-mail"
            type="email"
          />
        </div>
        <div className="mb-4 flex">
        
          <input
            className="w-full px-3 py-2 border rounded-r-lg"
            placeholder="+91 Phone Number"
            type="text"
          />
        </div>
        <div className="mb-4">
          
          <input
            className="w-full px-3 py-2 border rounded-lg"
            id="date"
            type="date"
          />
        </div>
        <div className="mb-4">
         
          <textarea
            className="w-full px-3 py-2 border rounded-lg"
            id="message"
            placeholder="Message"
            rows={3}
            defaultValue={""}
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-700">How should we contact you?</p>
          <div className="flex items-center gap-2">
            <input className="mr-2" id="whatsapp" name="contact" type="radio" />
            <label
              className="mr-4 flex items-center text-green-500 gap-2"
              htmlFor="whatsapp"
            >
              <i className="fab fa-whatsapp"></i>
              Whatsapp
            </label>
            <input className="mr-2" id="phone" name="contact" type="radio" />
            <label className="flex items-center gap-2 text-blue-500" htmlFor="phone">
              <i className="fas fa-phone rotate-90"></i>
              Phone Call
            </label>
          </div>
        </div>
        <button
          className="w-64 bg-purple-700 text-white py-2 rounded-lg font-bold"
          type="submit"
        >
          Plan My Trip
        </button>
      </form>
    </div>
  </div>
</div>

  )
}

export default Contact