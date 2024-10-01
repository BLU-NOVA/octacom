import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-between p-3">
      <Link href="/">
        <img src="/octacom-logo.svg" className="" alt="" />
      </Link>
      <Link href="/contact">
        <button className="max-md:w-fit sm:w-[200px] p-3 max-md:h-fit h-[52px] rounded-[12px] hover:bg-[#e68a00] text-white bg-[#FF9900]">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
