"use client"

import { useState } from "react";
import OrderHistory from "./OrderHistory";

function AccountDetails(){
    const [ inputDisabled,setInputDisabled] = useState(true)

    const handleEditClick = () => {
        
        if(inputDisabled) setInputDisabled(false)
        else setInputDisabled(true)
    }

    return (
        <div className="mx-64 my-16 flex">
            <div className="basis-1/2">
            <h1 className="font-bold flex justify-center text-2xl font-serif my-4">
                Account Details
            </h1>
                <input
                    type="text"
                    placeholder="Utkarsh"
                    className="border mt-4 border-black py-1 px-2 rounded w-full"
                    disabled={inputDisabled}
                />
                <input
                    type="text"
                    placeholder="Utkarsh"
                    className="border mt-4 border-black py-1 px-2 rounded w-full"
                    disabled={inputDisabled}
                />
                <input
                    type="text"
                    placeholder="Utkarsh"
                    className="border mt-4 border-black py-1 px-2 rounded w-full"
                    disabled={inputDisabled}
                />
                <input
                    type="text"
                    placeholder="Utkarsh"
                    className="border mt-4 border-black py-1 px-2 rounded w-full"
                    disabled={inputDisabled}
                />
                <div className="flex justify-end mt-6">
                    <input
                    type="submit"
                    value="Cancel"
                    className="hover:cursor-pointer border border-black rounded-3xl hover:bg-gray-300 mr-4 px-6 py-2"
                    />
                    <input
                    type="submit"
                    value={inputDisabled ? "Edit" : "Save Changes"}
                    className="hover:cursor-pointer text-white bg-gray-700 hover:bg-black px-6 py-2 rounded-3xl flex justify-center"
                    onClick={handleEditClick}
                    />
                </div>
            </div>  
            <div className="basis-1/2">   
                <OrderHistory/>
            </div>
        </div>
    )
}

export default AccountDetails;