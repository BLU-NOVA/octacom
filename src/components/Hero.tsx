"use client";

import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const products = [
    { name: 'OCTA SME LOAN', image: '/woman.png' }, // Assuming images are in /public folder
    { name: 'OCTA SALARY ADVANCE', image: '/2.png' },
    { name: 'OCTA ASSET FINANCE', image: '/3.png' },
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
                className="relative w-full h-[80vh] bg-cover bg-top brightness-75"
                style={{
                    backgroundImage: `url(${products[currentProduct].image})`, // Dynamically setting background image
                }}
            >
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:px-32">
                    <div className="flex items-end h-full">
                        <button className="bg-[#FF9900] text-white px-6 py-2 rounded-full text-lg font-semibold h-fit">
                            {products[currentProduct].name}
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-[#FF9900] text-white p-6 sm:px-32">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex text-black text-3xl space-x-4">
                        <Facebook size={35} />
                        <Twitter size={35} />
                        <Linkedin size={35} />
                    </div>
                    <div className="flex justify-between items-center gap-8">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <MapPin className="text-black" size={25} />
                                <span className="text-sm">3 River Plaza - Kiminini Eastern Bypass, Buru</span>
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <Mail className="text-black" size={25} />
                                <span className="text-sm">octacompanylimited@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="text-black" size={25} />
                            <div className='flex flex-col'>
                                <span className='text-sm'>0105488147</span>
                                <span className='text-sm'>0705328700</span>
                                <span className='text-sm'>0740574991</span>
                                <span className="text-sm">0105288013</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
