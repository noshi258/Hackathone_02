import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu"; 
import Link from "next/link";

export default function navbar() {
  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col">
      <div className="w-full bg-[#272343] py-2 sm:py-3">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 gap-y-2">
          <p className="text-white flex items-center space-x-2 font-normal text-[10px] sm:text-[12px]">
          <FaCheck />
            <span>Free shipping on all orders over $50</span>
          </p>
          <ul className="flex items-center flex-wrap gap-4 text-white font-normal text-[10px] sm:text-[12px]">
            <li className="flex items-center space-x-1 cursor-pointer">
              <span>Eng</span>
              <FaAngleDown />

            </li>
            <li>
              <Link className="cursor-pointer hover:underline" href="/faq">
                FAQs
              </Link>
            </li>
            <li className="flex items-center space-x-1 cursor-pointer">
            <FiAlertCircle />
              <span>Need Help</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-[#F0F2F3] pt-[20px] pb-[20px] h-[84px]">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <img
              src="/Logo Icon.png"
              alt="comforty logo"
              className="w-[50px] h-[50px]"
            />
            <h2 className="text-[26px] font-medium">Comforty</h2>
          </div>
          <div className="flex items-center space-w-4">
            <Link href="#">
              <button className="rounded-xl flex items-center space-x-2 bg-white py-2 px-4 hover:shadow-md">
              <LuShoppingCart />

                <span className="hidden sm:inline">Cart</span>
                <div className="flex items-center justify-center w-6 h-6 bg-[#007580] text-white text-sm rounded-full">
                  2
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <nav className=" w-full bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 py-4">
          <div className="hidden md:flex gap-8 ml-3">
            <Link className="text-[#007580] text-[14px] font-medium" href="/">
              Home
            </Link>
            <Link

              className="text-[14px] font-medium hover:text-[#007580] "
              href="/product"
            >
              Shop
            </Link>
            <Link

              className="text-[14px] font-medium hover:text-[#007580]"
              href="/product"
            >
              Product
            </Link>
            <Link

              className="text-[14px] font-medium hover:text-[#007580]"
              href="/product"
            >
              Pages
            </Link>
            <Link
              className="text-[14px] font-medium hover:text-[#007580]"
              href="/about"
            >
              About
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <span className="font-normal text-[#636270] text-[14px]">
              Contact:
            </span>
            <span className="font-medium text-[#272343] text-[14px]">
              (808) 555-0111
            </span>
          </div>
          
        </div>  
      </nav>
    </header>
  );
}
