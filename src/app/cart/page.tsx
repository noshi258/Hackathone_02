"use client";

import React, { useEffect, useState } from "react";
import { Product } from "types/product";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Deleted!", "Your product has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item.id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item.id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Success!",
      text: "Your order has been placed",
      icon: "success",
      confirmButtonColor: "#3085d6",
    }).then(() => {
        router.push("/checkout");
      setCartItems([]);
    });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col bg-gray-100 rounded-lg p-4 shadow-md"
              >
                {/* Product Image */}
                <img
                  src={urlFor(item.image).url()}
                  alt="image"
                  className="w-full h-40 object-cover rounded-md"
                  width={500}
                  height={500}
                />

                {/* Product Details */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => item.id && handleDecrement(item.id)}
                    className="bg-gray-300 hover:bg-gray-400 text-black px-2 py-1 rounded-md"
                  >
                    ➖
                  </button>
                  <span className="text-lg font-bold">{item.inventory}</span>
                  <button
                    onClick={() => item.id && handleIncrement(item.id)}
                    className="bg-gray-300 hover:bg-gray-400 text-black px-2 py-1 rounded-md"
                  >
                    ➕
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => item.id && handleRemove(item.id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Total */}
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold">Total: ${calculatedTotal().toFixed(2)}</h2>
          </div>

          {/* Proceed Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleProceed}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg shadow-md transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
