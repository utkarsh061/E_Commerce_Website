"use client"

import { useEffect, useState } from "react";
import OrderHistory from "./OrderHistory";
import { useDispatch, useSelector } from "react-redux";
import { getAccountDetails, LogOutUser,getOrderDetails, updateAccountDetailsApiCall } from "@/app/apiCalls";
import { useRouter } from "next/navigation";
import { setAddressDetails } from "@/app/redux/applicationSlice";
import Modal from "@/components/Modal/Modal.js";

function AccountDetails(){
    const [ inputDisabled,setInputDisabled] = useState(true)
    const [ isModalOpen , setIsModalOpen ] = useState(false)
    const [ isUpdateAccountModalOpen, setIsUpdatedAccountModalOpen ] = useState(false)
    const applicationData = useSelector((state) => state.application)
    const { accoutDetails } = applicationData;
    const [ localAccountDetails, setLocalAccountDetails ] = useState({
        username:accoutDetails.username,
        fullName:accoutDetails.fullName,
        email:accoutDetails.email,
        phoneNumber:accoutDetails.phoneNumber
    })
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        getAccountDetails(dispatch);
        getOrderDetails(dispatch)
    },[])

    const handleEditClick = async (event) => {
        const { name } = event.target;
        if(name === "save"){
            let detailsUpdated = await updateAccountDetailsApiCall(localAccountDetails)
            detailsUpdated && setIsUpdatedAccountModalOpen(true)
        }
       setInputDisabled(!inputDisabled)
    }
    const handleCancelClick = () => {
        setLocalAccountDetails({
            username:accoutDetails.username,
            fullName:accoutDetails.fullName,
            email:accoutDetails.email,
            phoneNumber:accoutDetails.phoneNumber
        })
        setInputDisabled(true)
    }
    const handleLogOut = () => {
        setIsModalOpen(!isModalOpen)
    }
    const handleLogoutConfirm = () => {
        LogOutUser(dispatch,router)
        setIsModalOpen(false)
    }

    const AccountModalClose = () => {
        setIsUpdatedAccountModalOpen(false)
    }

    const handleInputChange = (event) => {
        const { name , value } = event.target;
        setLocalAccountDetails((prevState) => ({
            ...prevState,
            [name] : value
        }));
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
                    value={localAccountDetails.username}
                    className="border border-black py-1 px-2 rounded w-full" 
                    disabled={true}
                    />
                    <input 
                    type="text" 
                    placeholder="Full Name" 
                    name="fullName"
                    value={localAccountDetails.fullName}
                    className="border mt-4 border-black py-1 px-2 rounded w-full" 
                    disabled={inputDisabled}
                    onChange={handleInputChange}
                    />
                    <input 
                    type="text" 
                    placeholder="Email Id"
                    name="email"
                    value={localAccountDetails.email} 
                    className="border mt-4 border-black py-1 px-2 rounded w-full" 
                    disabled={inputDisabled}
                    onChange={handleInputChange}
                    />
                    <input 
                    type="text" 
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={localAccountDetails.phoneNumber} 
                    className="border mt-4 border-black py-1 px-2 rounded w-full" 
                    disabled={inputDisabled}
                    onChange={handleInputChange}
                    />
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
                        name={inputDisabled ? "edit" : "save"}
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
            {isUpdateAccountModalOpen &&
            <Modal 
               description="Account Details Updated Successfully" 
               handleMainbuttonClick={AccountModalClose}
               handleCancelButtonClick={AccountModalClose}
               buttonTitle="Okay"
            />
            }
        </div>
    )
}

export default AccountDetails;