import React from "react";
import { useRouter } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="min-h-[20vh] px-10 lg:px-20 py-16 relative bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-10 text-white">
        <div className="flex flex-col gap-6">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <span className="text-xl uppercase font-medium">Logo...</span>
          </div>
          <p className="text-sm text-gray-300">
            Explore curated tours with our travel app. Discover, compare, and
            book flights, hotels, and tours for your next adventure, powered by
            Next.js.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-medium text-green-500">Destinations</h3>
          <ul className="flex flex-col gap-1">
            <li className="cursor-pointer text-gray-300">USA</li>
            <li className="cursor-pointer text-gray-300">India</li>
            <li className="cursor-pointer text-gray-300">France</li>
            <li className="cursor-pointer text-gray-300">United Kingdom</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-medium text-green-500">Adventures</h3>
          <ul className="flex flex-col gap-1">
            <li className="cursor-pointer text-gray-300">Extreme</li>
            <li className="cursor-pointer text-gray-300">In the air</li>
            <li className="cursor-pointer text-gray-300">
              Nature and Wildlife
            </li>
            <li className="cursor-pointer text-gray-300">Winter Sports</li>
            <li className="cursor-pointer text-gray-300">Outdoor Parks</li>
            <li className="cursor-pointer text-gray-300">Water Sports</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-medium text-green-500">Get in Touch</h3>
          <ul className="flex gap-5 mt-2">
            <li className="bg-black bg-opacity-30 rounded-lg text-slate-300 text-3xl p-3 cursor-pointer hover:bg-opacity-50 transition-all duration-300">
              <FaFacebookF />
            </li>
            <li className="bg-black bg-opacity-30 rounded-lg text-slate-300 text-3xl p-3 cursor-pointer hover:bg-opacity-50 transition-all duration-300">
              <FaInstagram />
            </li>
            <li className="bg-black bg-opacity-30 rounded-lg text-slate-300 text-3xl p-3 cursor-pointer hover:bg-opacity-50 transition-all duration-300">
              <FaLinkedinIn />
            </li>
            <li className="bg-black bg-opacity-30 rounded-lg text-slate-300 text-3xl p-3 cursor-pointer hover:bg-opacity-50 transition-all duration-300">
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
