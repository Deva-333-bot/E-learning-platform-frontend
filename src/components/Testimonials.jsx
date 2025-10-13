import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback: "TechRica’s courses helped me land my first developer job! Highly recommend.",
    },
    {
      name: "John Smith",
      feedback: "The interactive exercises make learning programming so much easier and fun.",
    },
    {
      name: "Mary Johnson",
      feedback: "I love the flexible schedule and the quality of the instructors.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-700 italic mb-4">"{testi.feedback}"</p>
              <h3 className="text-lg font-semibold text-primary">{testi.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
