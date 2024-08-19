"use client"

import AddNewAddress from "@/components/Address/AddNewAddress"
import Addresssection from "@/components/Address/AddressSection"
import { useState } from "react"

function AddressSectionMain(){
    const [addNewAddress,setNewAddress] = useState(false)
    const [isAllNewAddressFieldsSelected , setIsAllNewAddressFieldsSelected] = useState(false)

    const handleNewAddressClick = () => {
        setNewAddress(!addNewAddress)
    }
    return (
        <>
            {addNewAddress ? 
                <AddNewAddress
                    handleNewAddressClick={handleNewAddressClick}
                /> : 

                <Addresssection
                    handleNewAddressClick ={handleNewAddressClick}
                    isAllNewAddressFieldsSelected={isAllNewAddressFieldsSelected}
                    setIsAllNewAddressFieldsSelected={setIsAllNewAddressFieldsSelected}
                />
                }
        </>
        
    )
}

export default AddressSectionMain