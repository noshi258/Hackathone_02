import React from "react";

export default function top_categaries() {
  return (
    <div>
      <section className=" w-full px-4 py-[7rem] md:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Top Categories
          </h2>
          <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              className="group aspect-square relative overflow-hidden rounded-lg"
              href="/categories/wing-chair"
            >
              <img
              src="/Image_4.png"
                alt="Wing Chair"
                className="transition-transform duration-300 group-hover:scale-105"
                sizes="100vw"
              />
              <div className=" absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="mb-2 font-inter text-xl font-medium text-white">
                    Wing Chair
                  </h3>
                  <p className="font-inter text-sm text-gray-200">
                    3,584 Products
                  </p>
                </div>
              </div>
            </a>
            <a
              className="group aspect-square relative overflow-hidden rounded-lg"
              href="/categories/wooden-chair"
            >
              <img
                src="/Image_5.png"
                alt="Wooden Chair"
                className="transition-transform duration-300 group-hover:scale-105"
                sizes="100vw"
              />
              <div className=" absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="mb-2 font-inter text-xl font-medium text-white">
                    Wooden Chair
                  </h3>
                  <p className="font-inter text-sm text-gray-200">
                    157 Products
                  </p>
                </div>
              </div>
            </a>
            <a
              className="group aspect-square relative overflow-hidden rounded-lg"
              href="/categories/desk-chair"
            >
              <img
                src="Image_6.png"
                alt="Desk Chair"
                className="transition-transform duration-300 group-hover:scale-105"
                sizes="100vw"
              ></img>
              <div className=" absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="mb-2 font-inter text-xl font-medium text-white">
                    Desk Chair
                  </h3>
                  <p className="font-inter text-sm text-gray-200">
                    154 Products
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
