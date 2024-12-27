"use client"

import { useEffect, useState } from "react";
import OrderHistory from "./OrderHistory";
import { useDispatch, useSelector } from "react-redux";
import { getAccountDetails, LogOutUser,getOrderDetails } from "@/app/apiCalls";
import { useRouter } from "next/navigation";
import { setAddressDetails } from "@/app/redux/applicationSlice";
import Modal from "@/components/Modal/Modal.js";

function AccountDetails(){
    const [ inputDisabled,setInputDisabled] = useState(true)
    const [ isModalOpen , setIsModalOpen ] = useState(false)
    const applicationData = useSelector((state) => state.application)
    const {accoutDetails} = applicationData
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        getAccountDetails(dispatch);
        getOrderDetails(dispatch)
    },[])

    const handleEditClick = () => {
        if(inputDisabled) setInputDisabled(false)
        else {
            setInputDisabled(true)
        }
    }
    const handleCancelClick = () => {
        setInputDisabled(true)
    }
    const handleLogOut = () => {
        setIsModalOpen(!isModalOpen)
    }
    const handleLogoutConfirm = () => {
        LogOutUser(dispatch,router)
        setIsModalOpen(false)
    }

    const handleInputChange = (event) => {
        console.log(event.target)
    }

    return (
        <div>
            <div className="mx-auto my-12 max-w-6xl px-8 sm:flex text-black">
                <div className="basis-1/2">
                <h1 className="font-bold flex justify-center text-2xl font-serif my-4">
                    Account Details
                </h1>
                    <input 
                    type="text"
                    placeholder="Username" 
                    value={accoutDetails.username}
                    className="border border-black py-1 px-2 rounded w-full" 
                    disabled={inputDisabled}
                    onChange={handleInputChange}
                    />
                    <input 
                    type="text" 
                    placeholder="Full Name" 
                    value={accoutDetails.fullName}
                    className="border mt-4 border-black py-1 px-2 rounded w-full" 
                    disabled={inputDisabled}/>
                    <input 
                    type="text" 
                    placeholder="Email Id"
                    value={accoutDetails.email} 
                    className="border mt-4 border-black py-1 px-2 rounded w-full" 
                    disabled={inputDisabled}/>
                    <input 
                    type="text" 
                    placeholder="Phone Number"
                    value={accoutDetails.phoneNumber} 
                    className="border mt-4 border-black py-1 px-2 rounded w-full" 
                    disabled={inputDisabled}/>
                    <div className={`${inputDisabled ? "flex sm:mt-4" : "sm:flex"} justify-between items-baseline`}>
                        <input
                        type="submit"
                        value="Log Out"
                        className={`${inputDisabled ? "w-1/2 h-fit" : "w-full mt-4"} sm:w-fit hover:cursor-pointer text-white bg-gray-700 hover:bg-black px-8 py-2 rounded-3xl flex justify-center`}
                        onClick={handleLogOut}
                        />
                        <div className={`flex ${inputDisabled ? "justify-end" : "justify-between sm:justify-end"} w-full mt-4 sm:mt-0`}>
                        <input
                        type="submit"
                        value="Cancel"
                        className= {`w-fit hover:cursor-pointer border border-black rounded-3xl hover:bg-gray-300 sm:ml-8 sm:mr-2 px-8 py-2 ${inputDisabled && "hidden"}`}
                        onClick={handleCancelClick}
                        />
                        <input
                        type="submit"
                        value={inputDisabled ? "Edit Details" : "Save Changes"}
                        className="w-fit hover:cursor-pointer text-white bg-gray-700 hover:bg-black px-8 py-2 rounded-3xl flex justify-center"
                        onClick={handleEditClick}
                        />
                        </div>
                    </div>
                </div>  
                <div className="basis-1/2">   
                    <OrderHistory/>
                </div>
            </div>
            {isModalOpen &&
            <Modal 
               description="Are You Sure you want to Log Out?" 
               handleMainbuttonClick={handleLogoutConfirm}
               handleCancelButtonClick={handleLogOut}
               buttonTitle="Confirm"
               doubleButton = {true}
            />
            }
        </div>
    )
}

export default AccountDetails;