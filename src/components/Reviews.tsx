import React from 'react';
import Image from 'next/image';
import { FaRegUserCircle } from "react-icons/fa";

const testimonials = [
    {
      name: 'Dennis Kiptum',
      role: 'Software Engineer',
      content: 'This platform has completely transformed how I manage my tasks. It’s user-friendly, efficient, and has improved my productivity immensely.',
      imageUrl: '/dennis.jpg'
    },
    {
      name: 'John Smith',
      role: 'Freelancer',
      content: 'Ive been able to connect with new clients and streamline my workflow with ease. I highly recommend this service to all professionals!',
      imageUrl: '/woman.png'
    },
    {
      name: 'Emily Zhang',
      role: 'Small Business Owner',
      content: 'Using this tool has simplified how I run my business. It’s intuitive and has helped me save both time and money.',
      imageUrl: '/2.png'
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
                < FaRegUserCircle className='w-24 h-24 relative mb-4'/>
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