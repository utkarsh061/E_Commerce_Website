"use client"

import { useState } from "react"

function Addresssection(props){
    const { handleNewAddressClick } = props
    const [addressRadio,setAddressRadio] = useState(null)
    const addressdetails = [
        {
            addressLine1:"Shivraj Nagar Colony",
            addressLine2:"Chittuput Lanka",
            city:"Varanasi",
            state:"UP",
            pinCode:"221005"
        },
        {
            addressLine1:"Shivraj Nagar Colony",
            addressLine2:"Chittuput Lanka",
            city:"Mirzapur",
            state:"UP",
            pinCode:"221005"
        },
        {
            addressLine1:"Shivraj Nagar Colony",
            addressLine2:"Chittuput Lanka",
            city:"Chunar",
            state:"UP",
            pinCode:"221005"
        }
    ]
    const handleRadioChange = (event) =>{
        setAddressRadio(event.target.value)
    }
    return (
        <div className="mx-72 my-12">
            {addressdetails?.map((item,index) => {
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
            })} 
            <p className="flex justify-end underline text-blue-600">
            <span onClick={handleNewAddressClick} className="cursor-pointer">Add New Address</span></p>
            <div className="flex justify-end mt-4">
            <input 
            type="button" 
             value="Place Order" 
            className="px-6 py-2 rounded-full text-white bg-gray-700  hover:bg-gray-800 cursor-pointer"/>
            </div>
            
        </div>
    )
}

export default Addresssection