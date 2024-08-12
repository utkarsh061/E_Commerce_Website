"use client"

import Link from "next/link";
import { useSelector } from "react-redux";

function NavBar(){

    const { cartItems } = useSelector((state) => state.application)
    return (
       <div className="w-full my-4 flex">
         <div className="bg-black border-4 border-double border-white min-w-44 min-h-12">
            <h1 className="text-white px-2 py-1 font-bold font-sans text-center text-3xl">Ur's Store</h1>
         </div>
         <div className="w-4/5 text-white">
            <nav className="bg-gradient-to-r from-gray-400 to-black">
                <ul className="flex flex-wrap justify-end max-h-7 my-2.5">
                    <li className="px-4 py-1">
                        <Link className="mb-2" href={'/'}>Home</Link>
                    </li>
                    <li className="px-4 py-1">
                        <Link href={"/products"}>Products</Link>
                    </li>
                    <li className="px-4 py-1">
                         <Link href={'/about'}>About</Link>
                    </li>
                    <li className="px-4 py-1">
                        <Link href={'/contact'}>Contact Us</Link>
                    </li>
                    <li className="px-4 py-1">
                        <Link href={'/account'}>Account</Link>
                    </li>
                </ul>
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