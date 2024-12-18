"use client"

import { useEffect, useState } from "react"
import NoData from "../NoData"
import { useDispatch, useSelector } from "react-redux"
import { getDeliveryAddress, placeOrderApiCall } from "@/app/apiCalls"
import { placeOrder } from "@/app/apiEndPoints"

function Addresssection(props){
    const { handleNewAddressClick } = props
    const [addressRadio,setAddressRadio] = useState("0")
    const dispatch = useDispatch()
    const applicationData = useSelector((state) => state.application)
    const { addressDetails,cartItems } = applicationData
    
    useEffect(() => {
        getDeliveryAddress(dispatch);
    },[])

    const handleRadioChange = (event) =>{
        setAddressRadio(event.target.value)
    }

    const handlePlaceOrder = () => {
        let data = {}
        data.orders = cartItems,
        data.deliveryAddress = addressDetails[addressRadio]
        placeOrderApiCall(data)
    }

    return (
        <div className="mx-auto my-8 max-w-6xl px-8">
            { addressDetails?.length != 0 ? addressDetails?.map((item,index) => {
                return (
                    <div className="px-2 py-2 flex flex-row">
                    <input
                        type="radio"
                        className="mx-4"
                        name= "address"
                        value={index}
                        onChange={handleRadioChange}
                        checked={addressRadio === index.toString()}
                    />
                    <span className="basis-3/4">
                    <p>{`${item?.addressLine1},${item?.addressLine2}`}
                    </p>
                    <p>{`${item?.city}, ${item?.state}, ${item?.pinCode}`}
                    </p>
                    </span>
                </div>
                )
            }): 
            <NoData text="No Saved Address" height="h-72 mb-2"/>} 
            <p className="flex justify-end underline text-blue-600">
            <span onClick={handleNewAddressClick} className="cursor-pointer">Add New Address</span></p>
            <div className="flex justify-end mt-4">
            <input 
            type="button" 
            value="Place Order" 
            className="px-6 py-2 rounded-full text-white bg-gray-700  hover:bg-gray-800 cursor-pointer"
            onClick={handlePlaceOrder}
            />
            </div>
            
        </div>
    )
}

export default Addresssection