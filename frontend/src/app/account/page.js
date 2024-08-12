"use client"
import Login from "@/components/AccountPage/Login";
import Register from "@/components/AccountPage/Register";
import Link from "next/link";
import { useState } from "react";

function AccountPage(){
    const [isRegisterPage,setIsRegisterPage] = useState(false)

    const handleClick = (data) => {
        if(data === "Login"){
            setIsRegisterPage(false)
        }
        if(data === "Register"){
            setIsRegisterPage(true)
        }
    }
    return(
        <div className="my-12 bg-gradient-to-l from-black to-gray-700 flex flex-wrap">
            <div className="basis-1/2 my-12 flex justify-center">
                <div className="bg-white w-1/2 rounded">
                    <div className="flex">
                       <h3 className={`basis-1/2 flex justify-center hover:cursor-pointer ${ !isRegisterPage && "border-b-2 border-black"} hover:bg-black hover:text-white py-2`} 
                            onClick={() => handleClick("Login")}>
                            Login</h3>
                       <h3 className={`basis-1/2 flex justify-center hover:cursor-pointer ${ isRegisterPage && "border-b-2 border-black"} hover:bg-black hover:text-white py-2`} 
                            onClick={(e) => handleClick("Register")}>
                            Register</h3>
                    </div>
                    {isRegisterPage ? <Register/> : <Login/> }
                </div>
            </div>
            <div className="w-1/2 h-1/2 basis-1/2">
                <img src="/Images/laptop1.jpg" className="px-20 py-12"/>
            </div>
        </div>
    )
}

export default AccountPage;