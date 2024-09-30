import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Dennis Kiptum',
    role: 'Customer',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
  },
  {
    name: 'Dennis Kiptum',
    role: 'Customer',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
  },
  {
    name: 'Dennis Kiptum',
    role: 'Customer',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
  }
];

const Reviews = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Are Saying.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <div className="w-24 h-24 relative mb-4">
                <Image
                  src="/api/placeholder/96/96"
                  alt={testimonial.name}
                  layout="fill"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.role}</p>
              <p className="text-center text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;