"use client"

import Link from "next/link";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
       <div className="w-full my-4 flex relative">
         <div className="bg-black border-4 border-double border-white min-w-44 max-h-12">
            <h1 className="text-white px-2 font-bold font-sans text-center text-3xl">Ur's Store</h1>
         </div>
         <div className="w-4/5 text-white">
            <nav className="my-2.5 bg-gradient-to-r from-gray-400 to-black text-right px-2 relative">
                <button onClick={toggleMenu} className="md:hidden">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#f5f5f5" }} />
                </button>
                <div className="flex justify-end md:max-h-7" ref={dropdownRef}>
                <ul className={`absolute md:relative md:px-0 text-right text-xs md:text-base md:flex md:justify-end md:py-1 ${isMenuVisible ? "block" : "hidden"}`}>
                    <li className="md:px-4 py-2.5 px-2 md:py-0 bg-black md:bg-opacity-0 hover:bg-gray-700 md:hover:bg-opacity-0">
                        <Link href={'/'} onClick={NavMenuClicked}>Home</Link>
                    </li>
                    <li className="md:px-2 py-2.5 px-2 md:py-0 bg-black md:bg-opacity-0 hover:bg-gray-700 md:hover:bg-opacity-0">
                        <Link href={"/products"} onClick={NavMenuClicked}>Products</Link>
                    </li>
                    <li className="md:px-4 py-2.5 px-2 md:py-0 bg-black md:bg-opacity-0 hover:bg-gray-700 md:hover:bg-opacity-0">
                         <Link href={'/about'} onClick={NavMenuClicked}>About</Link>
                    </li>
                    <li className="md:px-4 py-2.5 px-2 md:py-0 bg-black md:bg-opacity-0 hover:bg-gray-700 md:hover:bg-opacity-0">
                        <Link href={'/contact'} onClick={NavMenuClicked}>Contact Us</Link>
                    </li>
                    <li className="md:px-4 py-2.5 px-2 md:py-0 bg-black md:bg-opacity-0 md:hover:bg-opacity-0 hover:bg-gray-700">
                        <Link href={'/account'} onClick={NavMenuClicked}>Account</Link>
                    </li>
                </ul>
                </div>
	        </nav>
         </div>
         <div>
            <Link href={'/cart'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                { cartItems?.length != 0 &&
                <p className="-mt-8 ml-3 bg-black text-white rounded-full text-xs pl-0.5">{cartItems?.length}</p> }
            </Link>
        </div>
       </div>
    )
}
export default NavBar;