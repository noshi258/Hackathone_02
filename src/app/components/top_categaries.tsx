'use client'

import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import { categories } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
// import { Category } from "@/types/products"

export default function top_categaries() {

  const [categorie, setCategory] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCategory() {
      const fetchedCategory = await client.fetch(categories);
      setCategory(fetchedCategory);
    }
    fetchCategory();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Top Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {categorie.map((category) => (
        <div key={category._id}
        className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out">
          
          {category.image && (
            <img 
            src={urlFor (category.image).url()}
            alt='image'
            width={600}
            height={600}
            // sizes="100vw"
            className="transition-transform duration-300 group-hover:scale-105"
                sizes="100vw"
            />
          )}
          {category.title} <br />
          {category.products} 

     </div>
      ))} 
      </div>
    </div>
  );
}
