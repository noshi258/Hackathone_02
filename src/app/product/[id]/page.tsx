import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";

// Define the expected product type
interface Product {
  id: string;
  badge?: string;
  image: string;
  title: string;
  description: string;
  price: number;
  priceWithoutDiscount: number;
}

// Define the PageProps type for better clarity
interface PageProps {
  params: { id: string };
}

// Ensure the function receives the correct type
const Page = async ({ params }: PageProps) => {
  const query = `*[_type == "products" && _id == $id] {
    title, 
    price,
    description,
    "image": image.asset._ref,
    "id": _id,
    priceWithoutDiscount,
    inventory,
    tags
  }[0]`;

  // Fetch product data
  const product: Product | null = await client.fetch(query, { id: params.id });

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div key={product.id} className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <img
              src={urlFor(product.image).url()}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-2xl font-sans">${product.price}</p>
          <p className="text-2xl font-sans">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
