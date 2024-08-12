"use client"
import { useState } from "react";


function Login(){
    const [isInvalidCredentials,setIsInvalidCredentials] = useState(false)
    const [isForgetPassword,setIsForgetPassword] = useState(false)

    const handleForgoetPassword = () => {
        setIsForgetPassword(true)
    }
    return (
        <div className="mx-16 my-6">
            <div className="mt-12">
                    { isForgetPassword && (
                        <div>
                            <input placeholder="Mobile Number" className={`border border-black py-1 px-2 rounded w-full`}></input>
                            <input placeholder="New Password" className={`border border-black py-1 px-2 mt-4 rounded w-full`}></input>
                            <input placeholder="Confirm Password" className={`border border-black py-1 px-2 mt-4 rounded w-full`}></input>
                            <div className=" mt-6 text-white bg-gray-700  hover:bg-black px-6 py-2 w-full rounded-3xl flex justify-center">
                                <input type="button" value="Submit" className="w-10/12 hover:cursor-pointer"></input>
                            </div>
                        </div>
                    )}
                    { !isForgetPassword && (
                        <>
                        {isInvalidCredentials && (
                        <p className="text-red-600 font-medium text-xs my-2 w-full flex justify-center">Invalid Credentials</p>
                    )}
                        <input placeholder="Mobile Number" className={`border ${isInvalidCredentials ? 'border-red-500' : 'border-black'} py-1 px-2 rounded w-full`}></input>
                        <input placeholder="Password" className={`border ${isInvalidCredentials ? 'border-red-500' : 'border-black'} py-1 px-2 mt-4 rounded w-full`}></input>
                        <div className=" mt-6 text-white bg-gray-700  hover:bg-black px-6 py-2 w-full rounded-3xl flex justify-center">
                            <input type="button" value="Login" className="w-10/12 hover:cursor-pointer"></input>
                        </div>
                    <p className="mt-4 flex justify-end hover:cursor-pointer" onClick={() => handleForgoetPassword()}>Forget Password</p>
                        </>
                    )}
            </div>
        </div>
    )
}
export default Login;