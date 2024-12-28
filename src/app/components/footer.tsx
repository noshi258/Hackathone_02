import React from "react";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa";





export default function footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 sm:px-12 md:px-28">
      <div className="mx-auto py-12">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex flex-col w-full md:w-[320px] items-start">
            <div className="flex items-center gap-2">
              <img
                src="/Logo Icon.png"
                alt="comforty logo"
                className="w-[40px] h-[40px]"
              />
              <span className="text-[#272343] text-[26px] font-bold">
                Comforty
              </span>
            </div>
            <p className="mt-4 text-gray-500">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 
                border-transparent rounded-full hover:border-[#007580]"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 
                border-transparent rounded-full hover:border-[#007580]"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 
                border-transparent rounded-full hover:border-[#007580]"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://pinterest.com"
                target="_blank"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 
                border-transparent rounded-full hover:border-[#007580]"
              >
                <FaPinterest />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 
                border-transparent rounded-full hover:border-[#007580]"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/4 lg:w-[105px]">
            <h4 className="text-lg font-semibold text-[#9A9CAA]">Category</h4>
            <ul className="mt-4 text-[#272343] space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Sofa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Armchair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Wing Chair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Desk Chair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Wooden Chair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Park Bench
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-[156px]">
            <h4 className="text-lg font-semibold text-[#9A9CAA]">Support</h4>
            <ul className="mt-4 text-[#272343] space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Help &amp; Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-[424px]">
            <h4 className="text-lg font-semibold text-[#9A9CAA]">Newsletter</h4>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border text-[#9A9CAA] border-gray-300 rounded-l-md focus:outline-none"
              ></input>
              <button className="bg-[#029FAE] text-white px-6 py-2 rounded-md hover:bg-teal-700">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap text-[#9A9CAA] border-t pt-8">
            <p>
            © 2024 - Developed by
            <a href="#" className="text-[#272343] hover:underline hover:text-[#029FAE]">Nosheen</a>
            </p>
            <div className="mt-4 flex justify-center space-x-4">
             <img src="/Logos.png" alt="PayPal" className="w-[227px] h-[27px]"/>
            </div>
        </div>
      </div>
    </footer>
  );
}
