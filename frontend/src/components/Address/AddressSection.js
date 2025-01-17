"use client"

import { useEffect, useState } from "react"
import NoData from "../NoData"
import { useDispatch, useSelector } from "react-redux"
import { getDeliveryAddress, placeOrderApiCall } from "@/app/apiCalls"
import Modal from "../Modal/Modal"
import { useRouter } from "next/navigation"
import { setCartItems } from "@/app/redux/applicationSlice"

function Addresssection(props){
    const { handleNewAddressClick } = props
    const [addressRadio,setAddressRadio] = useState("0")
    const [ isModalOpen , setIsModalOpen ] = useState(false) 
    const dispatch = useDispatch()
    const router = useRouter();
    const applicationData = useSelector((state) => state.application)
    const { addressDetails,cartItems,isUserLoggedIn } = applicationData
    
    useEffect(() => {
        getDeliveryAddress(dispatch);
    },[])

    const handleRadioChange = (event) =>{
        setAddressRadio(event.target.value)
    }
    const handleModalClick = () => {
        setIsModalOpen(false)
    } 
    const handleModalMainClick = () => {
        router.push("/")
    }

    const handlePlaceOrder = () => {
        let data = {}
        data.orders = cartItems,
        data.deliveryAddress = addressDetails[addressRadio]
        let isOrderPlacedSuccessfully = placeOrderApiCall(data)
        isOrderPlacedSuccessfully && (
            setIsModalOpen(!isModalOpen),
            dispatch(setCartItems([]))
        )
    }

    return (
        <div>
            <div className="mx-auto my-8 max-w-6xl px-8">
                { addressDetails?.length != 0 ? addressDetails?.map((item,index) => {
                    return (
                        <div className="px-2 py-2 flex flex-row" key={index}>
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
                <p className="flex justify-end text-sm font-medium text-black underline hover:no-underline">
                <span onClick={handleNewAddressClick} className="cursor-pointer">Add New Address</span></p>
                <div className="flex justify-end mt-4">
                <input 
                type="button" 
                value="Place Order" 
                className={`px-12 py-2 rounded-xl text-white bg-black  hover:bg-gray-800 ${!isUserLoggedIn ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={handlePlaceOrder}
                disabled={!isUserLoggedIn}
                />
                </div>
            </div>
            {isModalOpen &&
            <Modal 
               description="Order Have been Placed Successfully" 
               handleMainbuttonClick={handleModalMainClick}
               handleCancelButtonClick={handleModalClick}
               buttonTitle="Okay"
            />
            }
        </div>
    )
}

export default Addresssection