import { groq } from 'next-sanity';

export const categories = groq`*[_type == "categories"]`;
export const allproducts = groq`*[_type == "products"]{
  title, 
  price,
 description,
    "image":image.asset._ref,
    "id":_id,
    priceWithoutDiscount,
    inventory,
    tags
}`;
export const Products = groq`*[_type == "products" && "featured" in tags] | order(_createdAt desc){
  title, 
  price,
 description,
    "image":image.asset._ref,
    "id":_id,
    priceWithoutDiscount,
    inventory,
    tags
}`;
  