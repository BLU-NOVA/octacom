import React from 'react';
import { RefreshCw, HandCoins, Award } from 'lucide-react';

const features = [
  {
    icon: <RefreshCw className="w-12 h-12 text-white" />,
    title: 'Quick & Efficient',
    description: 'Applications and approvals within 72 hours'
  },
  {
    icon: <HandCoins className="w-12 h-12 text-white" />,
    title: 'Low Interest Rate',
    description: 'We have the best interest rate'
  },
  {
    icon: <Award className="w-12 h-12 text-white" />,
    title: 'TrustWorthy',
    description: 'We have no hidden fees or application fees'
  }
];

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why People Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-[#FF9900] rounded-full p-4 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;