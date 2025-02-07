"use client";

import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import { allproducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PiShoppingCartLight } from "react-icons/pi";
import Link from "next/link";
import SearchFilter from "../components/SearchFilter";  // Import SearchFilter component
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";
import { Product } from 'types/product';


// interface Product {
//   id: string;
//   badge: string;
//   image: string;
//   title: string;
//   _type: "categories";
//   price: number;
//   priceWithoutDiscount: number;
//   product: string;
//   inventory: number;
// }

export default function Ourproducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allproducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product :Product ) => {
    e.preventDefault()
    Swal.fire({
      position: "top-right",
      icon : "success",
      title : `${product.title} added to cart `,
      showConfirmButton : false,
      timer : 1000
    })
    addToCart(product);
    
  }

  // Filtering products based on search and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMinPrice = minPrice === "" || product.price >= parseFloat(minPrice);
    const matchesMaxPrice = maxPrice === "" || product.price <= parseFloat(maxPrice);
    return matchesSearch && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-semibold text-[#1C1B1F] tracking-tight mb-8">
        Our Products
      </h1>

      {/* Search and Filter Component */}
      <SearchFilter
        onSearch={setSearchTerm}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative rounded-lg bg-white">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <div className="absolute left-3 top-3 bg-orange-500 text-white px-2.5 py-0.5 text-xs font-semibold rounded-md">
                {product.badge}
              </div>
              <Link href={`/product/${product.id}`}>
                {product.image && (
                  <img
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#1C1B1F] hover:text-[#00B5A5]">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">${product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.priceWithoutDiscount}</span>
                </div>
              </div>
              <button
               className="rounded-xl bg-slate-200 p-2 text-black hover:text-white transition-colors hover:bg-[#00A294]"
               onClick={(e) => handleAddToCart(e, product)}>
                <PiShoppingCartLight />
                <span className="sr-only" >Add to cart</span>
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
