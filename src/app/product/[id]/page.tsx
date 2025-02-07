import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
// import { Products } from "@/sanity/lib/queries";

interface Product {
    id: null | undefined;
    badge: string;
    image: any;
    title: string;
    description: string;
    price: number;
        priceWithoutDiscount: number;
    }

    const Page = async ({params:{id}}:{params:{id:string}}) => {
        const query = `*[_type == "products" && _id == $id] {
            title, 
            price,
           description,
              "image":image.asset._ref,
              "id":_id,
              priceWithoutDiscount,
              inventory,
              tags
          }[0]`

          const product: Product | null = await client.fetch(query, {id})
        //   const featuredProduct : Product | null = await client.fetch(Products, {id})


            if(!product){
                return (
                    <div>
                        <h1>Product not found</h1>
                    </div>
                )
            }

            return (
                <div key={product.id} className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-col-1 md:grid-cols-2 gap-12">
                        <div className="aspect-square">
                            {product.image && (
                            <img
                            src={ urlFor(product.image).url()}
                            alt={product.title}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-md" 
                            />
                            )}
                        </div>
                        <div className="flex flex-col gap-8">
                        <h1 className=" text-4xl font-bold">
                            {product.title}
                            </h1>
                            <p className="text-2xl font-sans">
                                ${product.price}
                                </p>
                                <p className="text-2xl font-sans">
                                {product.description}
                                </p>
                        </div>
                    </div>
                    

                </div>
            )
        }

        export default Page;


    
