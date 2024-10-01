import { FaRegUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Dennis Kiptum",
    role: "Small Business Owner",
    content:
      "Thanks to this Octacom capital, I was able to secure a loan quickly and expand my business. Their efficient services and personalized support have been invaluable to my growth.",
    imageUrl: "/dennis.jpg",
  },
  {
    name: "Oscar Mwirigi",
    role: "Freelancer",
    content:
      "I managed to improve my cash flow through Octacom's affordable loan options. The process was smooth, and their team is always ready to assist whenever needed.",
    imageUrl: "/woman.png",
  },
  {
    name: "Emily Wacuka",
    role: "Entrepreneur",
    content:
      "Octacom helped me take control of my finances and secure funding for my new venture. Their support and easy application process made all the difference.",
    imageUrl: "/2.png",
  },
];

const Reviews = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What Our Customers Are Saying.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <div className="w-24 h-24 relative mb-4">
                <FaRegUserCircle className=" text-gray-500 w-24 h-24 relative mb-4" />
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
