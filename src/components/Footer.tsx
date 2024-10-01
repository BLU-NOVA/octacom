import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <img src="/octacom-logo.svg" className="h-8" alt="Octacom Logo" />
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <nav className="flex flex-wrap justify-center md:justify-end">
              <a
                href="#home"
                className="mx-3 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#products"
                className="mx-3 text-gray-600 hover:text-gray-900"
              >
                Services
              </a>
              <a
                href="/calculator"
                className="mx-3 text-gray-600 hover:text-gray-900"
              >
                Loan calculator
              </a>
              <a
                href="/contact"
                className="mx-3 text-gray-600 hover:text-gray-900"
              >
                Contact
              </a>
            </nav>
          </div>
          {/* <div className="w-full md:w-auto">
            <button className="w-full md:w-[200px] p-3 h-[52px] rounded-[12px] text-white bg-[#FF9900] hover:bg-[#e68a00]">
              Get Started
            </button>
          </div> */}
        </div>
        <div className="mt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Octacom. All rights reserved.
        </div>
        <div className="mt-1 text-center text-xs  text-gray-500">
          Powered by blunovatech
        </div>
      </div>
    </footer>
  );
};

export default Footer;
