"use client"

import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

function NavBar(){

    const { cartItems } = useSelector((state) => state.application)
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const dropdownRef = useRef(null)

    const toggleMenu = () => { 
        setIsMenuVisible(!isMenuVisible);
    }

    const NavMenuClicked = () => {
        setIsMenuVisible(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsMenuVisible(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    return (
        <nav className="bg-white border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src="/Images/logo.jpg"
        className="h-12"
        alt="Ur's Store Logo"
      />
    </Link>
    <button
      data-collapse-toggle="navbar-dropdown"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="navbar-dropdown"
      aria-expanded="false"
      onClick={toggleMenu}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div
      className={`${
        isMenuVisible ? 'block' : 'hidden'
      } w-full md:block md:w-auto`}
      id="navbar-dropdown"
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
        <li>
          <Link
            href="/"
            className="block py-2 px-3 hover:bg-black md:hover:bg-transparent hover:text-white text-gray-900 rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="block py-2 px-3 text-gray-900 hover:text-white hover:bg-black md:hover:bg-transparent rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block py-2 px-3 text-gray-900 hover:text-white hover:bg-black md:hover:bg-transparent rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block py-2 px-3 text-gray-900 rounded hover:text-white hover:bg-black md:hover:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="block py-2 px-3 text-gray-900 rounded hover:text-white hover:bg-black md:hover:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
          >
            Account
          </Link>
        </li>
        <li>
          <Link
            href="/cart"
            className="block py-2 px-3 text-gray-900 rounded hover:text-white hover:bg-black md:hover:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
          >
            Cart
            {cartItems?.length > 0 && (
              <span className="ml-2 bg-black text-white rounded-full text-xs px-2 py-0.5">
                {cartItems?.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default NavBar;