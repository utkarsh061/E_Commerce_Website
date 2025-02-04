"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setCartItems } from "@/app/redux/applicationSlice";
import NoData from "../NoData";
import { NumberToString } from "../../app/globalUtils";
import { useRouter } from "next/navigation";
import Modal from "../Modal/Modal";

function Cart(){
    const {cartItems,isUserLoggedIn} = useSelector((state) => state.application)
    const dispatch = useDispatch()
    const router = useRouter();
    const [total,setTotal] = useState("0")
    const [ isModalOpen , setIsModalOpen ] = useState(false);

    useEffect(() => {
        let sum = 0;
        cartItems?.map((item) => {
            sum=sum+(item.quantity*item.totalItemPrice);
        })
        setTotal(sum)
    },[cartItems])

    const handleRemoveClick = (index) => {
        let data=[]
        data=cartItems?.filter((item,key) => (
            key != index
        ))
        dispatch(setCartItems(data))
    }

    const handleIncrementInput = (id) => {
        let index = cartItems?.findIndex( item => item.id === id); 
        let quantityValue = cartItems[index].quantity
        let updatedObj = {
            ...cartItems[index],
            "quantity": ++quantityValue
        }
        let updatedCartItems = [
            ...cartItems.slice(0,index),
            updatedObj,
            ...cartItems.slice(index+1)
        ]
        dispatch(setCartItems(updatedCartItems))
    }

    const handleDecrementInput = (id) => {
        let index = cartItems?.findIndex( item => item.id === id); 
        let quantityValue = cartItems[index].quantity
        let updatedObj = {
            ...cartItems[index],
            "quantity": quantityValue == 1 ? 1 : --quantityValue
        }
        let updatedCartItems = [
            ...cartItems.slice(0,index),
            updatedObj,
            ...cartItems.slice(index+1)
        ]
        dispatch(setCartItems(updatedCartItems))
    }

    const handleCheckoutClick = () => {
        if(isUserLoggedIn) router.push("/addressdetails")
            else setIsModalOpen(true)
    }

    const handleModalMainClick = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
    <section className="bg-white my-6 antialiased">
        <div className="mx-auto max-w-6xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>

            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            {/* Cart Items Section */}
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-3xl">
                <div className="space-y-6">
                {cartItems?.length === 0 ? (
                    <NoData text="No Items In Cart" height="h-52" />
                ) : (
                    cartItems?.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6"
                    >
                        <div className="space-y-4 flex md:items-center md:justify-between gap-6 md:space-y-0">
                            <Link href="#" className="shrink-0 md:order-1">
                                <img
                                className="h-full w-20"
                                src={item.imgURL}
                                alt={item.title}
                                />
                            </Link>
                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                <Link
                                href="#"
                                className="text-base font-medium text-gray-900 hover:underline"
                                >
                                {item.title}
                                </Link>
                                <div className="flex items-center gap-4">
                                <button
                                    type="button"
                                    className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                                    onClick={() => handleRemoveClick(index)}
                                >
                                    Remove
                                </button>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center md:order-3 md:justify-end">
                                <div className="flex items-center">
                                    <button
                                        type="button"
                                        onClick={() => handleDecrementInput(item.id)}
                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                                    >
                                        <svg
                                        className="h-2.5 w-2.5 text-gray-900"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 2"
                                        >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 1h16"
                                        />
                                        </svg>
                                    </button>
                                    <input
                                        type="text"
                                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                                        value={item.quantity}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleIncrementInput(item.id)}
                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                                    >
                                        <svg
                                        className="h-2.5 w-2.5 text-gray-900"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                        >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                        />
                                        </svg>
                                    </button>
                                </div>
                                <div className="text-end md:order-4 md:w-32 mt-4 sm:mt-0 sm:ml-8">
                                <p className="text-base font-bold text-gray-900">
                                    {NumberToString(item.totalItemPrice)}
                                </p>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    ))
                )}
                </div>
            </div>

            {/* Order Summary Section */}
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-semibold text-gray-900">
                    Order Summary
                </p>

                <div className="space-y-4">
                    <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                        Original Price
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                        {NumberToString(total)}
                        </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500">
                        Tax(18%)
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                        {NumberToString(total*(18/100))}
                        </dd>
                    </dl>
                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-base font-bold text-gray-900">
                        Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900">
                        {NumberToString(total+(total*(18/100)))}
                    </dd>
                    </dl>
                </div>
                    <button
                     className="flex w-full items-center justify-center rounded-lg bg-black hover:bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                     onClick={handleCheckoutClick}
                    >
                    Proceed to Checkout
                    </button>

                <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-500">
                    or
                    </span>
                    <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-sm font-medium text-black underline hover:no-underline"
                    >
                    Continue Shopping
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        {isModalOpen &&
            <Modal 
               description="Unable to Proceed !! Please Login to Continue"
               handleMainbuttonClick={handleModalMainClick}
               handleCancelButtonClick={handleModalMainClick}
               buttonTitle="Okay"
            />
            }
        </section>

    )
}

export default Cart;