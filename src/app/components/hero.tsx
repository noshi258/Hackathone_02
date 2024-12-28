import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function hero() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-full max-w-screen-xl h-auto bg-[#F0F2F3] rounded-bl-[48] full flex 
                flex-col sm:flex-row justify-center items-center px-6 sm:px-10 lg:px-16 py-24"
      >
        <div
          className="relative bottom-24 flex flex-col justify-center items-center 
                        sm:items-start w-full sm:w-1/2 space-y-4 sm:space-y-6 "
        >
          <h1 className="text-[14px] pt-[70px] sm-pt-[119px] font-normal text-[#272343] text-center sm:text-left">
            WELCOME TO CHAIRY
          </h1>
          <p className="w-full sm:w-[557px] text-[40px] sm:text-[60px] text-center sm:text-left mb-auto font-bold leading-tight">
            Best Furniture Collection for your interior.
          </p>
          <Link
            href={"#products"}
            className="bg-[#029FAE] w-[171px] text-white py-3 px-6 rounded-[8px] flex items-center gap-[20px] hover:b-blue-7-- mx-auto sm:mx-0"
          >
            Shop Now
            <FaArrowRight />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-[130px] flex justify-center">
          <img
            src="/Product Image.png"
            alt="chair"
            className="w-[434px] h-[584px]"
          />
        </div>
      </div>
    </div>
  );
}
