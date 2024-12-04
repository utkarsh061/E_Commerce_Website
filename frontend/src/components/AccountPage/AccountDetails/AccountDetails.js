"use client"

import { useEffect, useState } from "react";
import OrderHistory from "./OrderHistory";
import styles from "./AccountDetails.module.css"
import Input from "@/components/InputField/Input";
import { setIsUserLoggedIn } from "@/app/redux/applicationSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAccountDetails, LogOutUser,getOrderDetails } from "@/app/apiCalls";

function AccountDetails(){
    const [ inputDisabled,setInputDisabled] = useState(true)
    const applicationData = useSelector((state) => state.application)
    const {accoutDetails} = applicationData
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
        dispatch(setIsUserLoggedIn(false))
    }

    return (
        <div className="mx-auto my-12 max-w-6xl px-8 sm:flex text-black">
            <div className="basis-1/2">
            <h1 className="font-bold flex justify-center text-2xl font-serif my-4">
                Account Details
            </h1>
                <Input 
                type="text"
                placeholder="Username" 
                value={accoutDetails.username}
                className="border mt-4 border-black py-1 px-2 rounded w-full" 
                isDisabled={inputDisabled}/>
                <Input 
                type="text" 
                placeholder="Full Name" 
                value={accoutDetails.fullName}
                className="border mt-4 border-black py-1 px-2 rounded w-full" 
                isDisabled={inputDisabled}/>
                <Input 
                type="text" 
                placeholder="Email Id"
                value={accoutDetails.email} 
                className="border mt-4 border-black py-1 px-2 rounded w-full" 
                isDisabled={inputDisabled}/>
                <Input 
                type="text" 
                placeholder="Phone Number"
                value={accoutDetails.phoneNumber} 
                className="border mt-4 border-black py-1 px-2 rounded w-full" 
                isDisabled={inputDisabled}/>
                <div className={`${styles.button} mt-6`}>
                    <input
                    type="submit"
                    value="Log Out"
                    className="w-1/2 sm:w-7/12 hover:cursor-pointer text-white bg-gray-700 hover:bg-black px-6 py-2 rounded-3xl flex justify-center"
                    onClick={handleLogOut}
                    />
                    <div className="flex justify-end w-full">
                    <input
                    type="submit"
                    value="Cancel"
                    className= {`w-1/2 sm:w-7/12 hover:cursor-pointer border border-black rounded-3xl hover:bg-gray-300 mr-4 px-6 py-2 ${inputDisabled && "hidden"}`}
                    onClick={handleCancelClick}
                    />
                    <input
                    type="submit"
                    value={inputDisabled ? "Edit" : "Save Changes"}
                    className="w-1/2 sm:w-7/12 hover:cursor-pointer text-white bg-gray-700 hover:bg-black px-6 py-2 rounded-3xl flex justify-center"
                    onClick={handleEditClick}
                    />
                    </div>
                </div>
            </div>  
            <div className="basis-1/2">   
                <OrderHistory/>
            </div>
        </div>
    )
}

export default AccountDetails;