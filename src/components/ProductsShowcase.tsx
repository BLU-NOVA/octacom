import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const products = [
  { name: "Octa Salary Advance Loan", image: "/salary-advance.jpg" },
  { name: "Octa Asset Finance Loan", image: "/asset-finance.jpg" },
  { name: "Octa Biashara Loan", image: "/woman.jpg" },
  { name: "Octa School Fees Loan", image: "/3.png" },
  { name: "Octa SME Loan", image: "/2.png" },
  { name: "Octa Emergency Loan", image: "/emergency-loan.jpg" },
];

const ProductShowcase = () => {
  return (
    <div id="products" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-60 relative mb-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <p className="text-center font-medium">{product.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="/contact"
            className="bg-[#FF9900] text-white py-4 px-6 rounded-lg flex items-center justify-between hover:bg-orange-600 transition-colors"
          >
            <span className="text-lg font-semibold">Loan Application</span>
            <div className="flex items-center">
              <span className="mr-2">
                Get Quick & Flexible Loans to Bridge Your Financial Needs
              </span>
              <ChevronRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
