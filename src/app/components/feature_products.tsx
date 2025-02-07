'use client'

import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import { Products } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PiShoppingCartLight } from "react-icons/pi";
import Link from "next/link";


interface Product {
  id: string;
  _id: string;
  badge: string;
  image: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;

  // Add other properties of the product here
}

export default function Featureproducts() {
  const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      async function fetchProducts() {
        const fetchedProducts:Product[] = await client.fetch(Products);
        setProducts(fetchedProducts);
      }
      fetchProducts();
    }, []);
  
  return (
    <div className=" container mx-auto px-4 py-20">
      
      <h1 className="text-3xl text-start font-semibold text-[#1C1B1F] tracking-tight  mb-8">
        Featured Products
      </h1>
      <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      
        {products.map((product) => (
          <div key={product._id} 
          className=" group relative rounded-lg bg-white">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <div
                className="inline-flex items-center rounded-md border px-2.5 
          py-0.5 text-xs font-semibold transition-colors focus:outline-none
           focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
           text-primary-foreground shadow absolute left-3 top-3 bg-orange-500 hover:bg-orange-600"
              >
                {product.badge}
              </div>
              <Link href= {`/product/${product.id}`}>
              {product.image && (
                <img
                src={urlFor(product.image).url()}
                  alt="product"
                  className="transition-transform duration-300 group-hover:scale-105"
                  sizes="100vw"
                />
              )}
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#1C1B1F] hover:text-[#00B5A5]">
                  {product.title}
                </h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">${product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.priceWithoutDiscount}</span>
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
        ))}
        </div>  
    </div>
  );
}
