import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Omar Al-Maktoum",
    image:
      "https://storage.googleapis.com/a1aa/image/-_PiRpXjSWaBjt3fpShyHFG9hCStwoLYCkpj9dCsCMA.jpg",
    feedback:
      "Amazing trip to Dubai with Rezmytour! From luxury shopping to thrilling desert adventures, every detail was taken care of. Outstanding service and professionalism!",
  },
  {
    id: 2,
    name: "Fatima Al-Farsi",
    image:
      "https://storage.googleapis.com/a1aa/image/-_PiRpXjSWaBjt3fpShyHFG9hCStwoLYCkpj9dCsCMA.jpg",
    feedback:
      "A wonderful experience with Rezmytour. The guides were very professional, and every aspect of our trip was seamless. Highly recommended!",
  },
  {
    id: 3,
    name: "Mohammed Al-Zayed",
    image:
      "https://storage.googleapis.com/a1aa/image/-_PiRpXjSWaBjt3fpShyHFG9hCStwoLYCkpj9dCsCMA.jpg",
    feedback:
      "Dubai was breathtaking, and Rezmytour made it even better! The desert safari and Burj Khalifa visit were unforgettable. Best travel service!",
  },
];

const TestimonialCard = ({ name, image, feedback }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <img
      src={image}
      alt={`Portrait of ${name}`}
      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600">“{feedback}”</p>
  </div>
);

const Testimonial = () => {
  return (
    <main className="bg-gray-100 flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto">
      <section className="text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say About Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ id, name, image, feedback }) => (
            <TestimonialCard key={id} name={name} image={image} feedback={feedback} />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="bg-gray-300 text-gray-600 rounded p-3 hover:bg-gray-400">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="bg-purple-600 text-white rounded p-3 hover:bg-purple-700">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-200 py-6 w-full text-center">
        <p className="text-lg font-semibold mb-4">Are you the next happy customer?</p>
        <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700">
          Get Offers
        </button>
      </section>
    </main>
  );
};

export default Testimonial;
