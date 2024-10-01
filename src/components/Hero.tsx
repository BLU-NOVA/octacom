"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const products = [
  { name: "OCTA SME LOAN", image: "/woman.png" },
  { name: "OCTA BIASHARA LOAN", image: "/2.png" },
  { name: "OCTA SCHOOL FEES LOAN", image: "/3.png" },
];

const Hero = () => {
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        id="home"
        className="relative w-full h-[80vh] bg-cover bg-top brightness-75"
      >
        <Image
          src={products[currentProduct].image}
          alt={products[currentProduct].name}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:px-32">
          <div className="flex items-end h-full">
            <Link href="/contact">
              <button className="bg-[#FF9900] text-white px-6 py-2 rounded-full text-lg font-semibold h-fit">
                {products[currentProduct].name}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#FF9900] text-white p-6 sm:px-32">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-2 space-y-4 sm:space-y-0">
          {/* Social Media Icons */}
          <div className="flex text-black text-3xl space-x-4">
            <Facebook size={30} />
            <Twitter size={30} />
            <Linkedin size={30} />
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
            <span className="text-sm">
              3 River Plaza - Kiminini Eastern Bypass, Buru
            </span>
            <span className="text-sm">octacompanylimited@gmail.com</span>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-sm">0105488147</span>
              <span className="text-sm">0705328700</span>
              <span className="text-sm">0740574991</span>
              <span className="text-sm">0105288013</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
