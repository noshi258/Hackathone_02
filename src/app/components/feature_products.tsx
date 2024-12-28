import React from "react";
import { PiShoppingCartLight } from "react-icons/pi";

export default function feature_products() {
  return (
    <div className=" container mx-auto px-4 py-20">
      <h1 className="text-3xl text-start font-semibold text-[#1C1B1F] tracking-tight  mb-8">
        Featured Products
      </h1>
      <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className=" group relative rounded-lg bg-white">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <div
              className="inline-flex items-center rounded-md border px-2.5 
                    py-0.5 text-xs font-semibold transition-colors focus:outline-none 
                    focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                    text-primary-foreground shadow absolute left-3 top-3 bg-emerald-500
                     hover:bg-emerald-600"
            >
              New
            </div>
            <a href="allPages/1">
              <img src="Image.png" alt="Chair"
              className="text-[#00B5A5] rounded-xl h-full w-full object-cover 
              transition-transform duration-300 group-hover:scale-105 hover:rounded-xl"/>
            </a>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm text-[#1C1B1F] hover:text-[#00B5A5]">
                Library Stool Chair
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-lg font-medium text-[#1C1B1F]">$2</span>
              </div>
            </div>
            <button
              className="rounded-xl bg-slate-200 p-2 text-black
               hover:text-white transition-colors hover:bg-[#00A294]"
            ><PiShoppingCartLight />
              <span className="sr-only">Add to cart</span>
            </button>
          </div>
        </div>
        <div className=" group relative rounded-lg bg-white">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <div
              className="inline-flex items-center rounded-md border px-2.5 
        py-0.5 text-xs font-semibold transition-colors focus:outline-none
         focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
         text-primary-foreground shadow absolute left-3 top-3 bg-orange-500 hover:bg-orange-600"
            >
              Sales
            </div>
            <a href="allPages/1">
              <img src="Image_1.png" alt="chair1"
                className="text-[#00B5A5] rounded-xl h-full w-full object-cover 
         transition-transform duration-300 group-hover:scale-105 hover:rounded-xl"
              />
            </a>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm text-[#1C1B1F] hover:text-[#00B5A5]">
                Library Stool Chair
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-lg font-medium text-[#1C1B1F]">$20</span>
                <span className="text-sm text-gray-500 line-through">$30</span>
              </div>
            </div>
            <button
              className="rounded-xl bg-slate-200 p-2 text-black
                     hover:text-white transition-colors hover:bg-[#00A294]"
            ><PiShoppingCartLight />

              <span className="sr-only">Add to cart</span>
            </button>
          </div>
        </div>
        <div className=" group relative rounded-lg bg-white">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <a href="allPages/1">
              <img src="Image_2.png"
                alt="Library Stool Chair"
                className="text-[#00B5A5] rounded-xl 
                         h-full w-full object-cover transition-transform 
                         duration-300 group-hover:scale-105 hover:rounded-xl"
              />
            </a>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm text-[#1C1B1F] hover:text-[#00B5A5]">
                Library Stool Chair
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-lg font-medium text-[#1C1B1F]">$20</span>
              </div>
            </div>
            <button
              className="rounded-xl bg-slate-200 p-2 text-black
         hover:text-white transition-colors hover:bg-[#00A294]"
            ><PiShoppingCartLight />

              <span className="sr-only">Add to cart</span>
            </button>
          </div>
        </div>
        <div className=" group relative rounded-lg bg-white">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <a href="allPages/1">
              <img src="Image_3.png"
                alt="Library Stool Chair"
                className="text-[#00B5A5] rounded-xl h-full w-full 
                    object-cover transition-transform duration-300 group-hover:scale-105 hover:rounded-xl"
              />
            </a>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm text-[#1C1B1F] hover:text-[#00B5A5]">
                Library Stool Chair
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-lg font-medium text-[#1C1B1F]">$20</span>
              </div>
            </div>
            <button
              className="rounded-xl bg-slate-200 p-2 text-black
                         hover:text-white transition-colors hover:bg-[#00A294]"
            > <PiShoppingCartLight />

              <span className="sr-only">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
