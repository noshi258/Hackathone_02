import React from "react";

export default function popular_style() {
  return (
    <div className=" container mx-auto px-4 py-12 lg:py-16">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] items-center">
        <div className="relative top-8 md:text-[12px] sm:transform sm:-translate-y-1/2 sm:-rotate-90 lg:transform lg:-translate-y-1/2 lg:-rotate-90 writing-mode-vertical hidden md:block lg:text-xl font-medium tracking-wider text-zinc-900 md:pt-6 ">
          EXPLORE NEW AND POPULAR STYLES
        </div>
        <div className="text-xl text-center font-medium tracking-wider text-zinc-900 md:hidden">
          EXPLORE NEW AND POPULAR STYLES
        </div>
        <div className="flex flex-col md:flex-row md:gap-8 items-center">
          <div className="w-full md:w-[48%] aspect-square">
            <img
            src="/Image_2.png"
              alt="Orange modern chair"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square ">
              <img
                src="/Image_3.png"
                alt="White tufted chair"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="aspect-square">
              <img
                src="/Image.png"
                alt="Gray upholstered chair"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="aspect-square">
              <img
                src="/Image_7.png" 
              alt="Vintage white chair" 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="aspect-square">
              <img
                src="/Image.png"
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
