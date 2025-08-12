import React from "react";
import { Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex">
      {/* Left icons column */}
      <div className="fixed top-0 left-0 flex flex-col items-center bg-[#f7e6d2] w-12 h-screen border-r-2 border-black py-4 mt-4 mb-4 ">
        <button className="p-2">
          <Menu size={20} />
        </button>
        <button className="p-2 mt-2">
          <Search size={20} />
        </button>
      </div>

      {/* Right header section */}
      <div className="ml-12 flex-1 flex items-center justify-between bg-[#f7e6d2] border-t-4 border-[#a04a16] px-4 py-2 ">
        {/* Logo */}
        <img src="/fujifilm-logo.png" alt="FUJIFILM" className="h-6" />

        {/* Buy Button */}
        <button className="bg-[#a04a16] text-white px-4 py-1 rounded hover:bg-[#82390f] transition">
          BUY NOW
        </button>
      </div>
    </header>
  );
};

export default Header;
