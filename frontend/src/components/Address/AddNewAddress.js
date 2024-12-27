"use client";

import { useState } from "react";
import Button from "../Buton";
import { addDeliveryAddresApiCall } from "@/app/apiCalls";
import { useDispatch } from "react-redux";

function AddNewAddress(props) {
  const {
    handleNewAddressClick
  } = props;
  const dispatch = useDispatch();
  const [isFieldEmpty, setisFieldEmpty] = useState(false);
  const [addressDetailsObj, setaddressDetailsObj] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    district: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const handleSaveAddressClick = async () => {
    if (
      [
        addressDetailsObj.addressLine1,
        addressDetailsObj.city,
        addressDetailsObj.district,
        addressDetailsObj.state,
        addressDetailsObj.country,
        addressDetailsObj.pinCode,
      ].some((item) => Object.values(item).length === 0)
    ) {
      setisFieldEmpty(true);
    } else {
      let isNewAddressAdded = await addDeliveryAddresApiCall(addressDetailsObj,dispatch)
      if(isNewAddressAdded){
        handleNewAddressClick();
        setisFieldEmpty(false);
      }
    }
    console.log(addressDetailsObj);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setaddressDetailsObj({
      ...addressDetailsObj,
      [name]: value,
    });
  };
  return (
    <div className="flex flex-col mx-auto my-8 max-w-6xl px-8 ">
      {isFieldEmpty && (
        <div className="mt-2 flex justify-around">
          <label className="text-red-600 font-medium text-xs ">
            All (*) fields are Mandatory
          </label>
        </div>
      )}
      <div className="mt-2 flex justify-around">
        <label className="basis-1/4">Address Line 1* </label>
        <input
          type="text"
          name="addressLine1"
          value={addressDetailsObj.addressLine1}
          onChange={handleChange}
          placeholder=" Address Line 1"
          className={`border-black border basis-2/4 rounded ${isFieldEmpty && "border-2 border-red-500"}`}
        ></input>
      </div>
      <div className="flex justify-around mt-2">
        <label className="basis-1/4">Address Line 2</label>
        <input
          type="text"
          placeholder=" Address Line 2"
          name="addressLine2"
          value={addressDetailsObj.addressLine2}
          onChange={handleChange}
          className="border-black border basis-2/4 rounded"
        ></input>
      </div>
      <div className="flex justify-around mt-2">
        <label className="basis-1/4">City*</label>
        <input
          type="text"
          placeholder=" City"
          name="city"
          value={addressDetailsObj.city}
          onChange={handleChange}
          className={`border-black border basis-2/4 rounded ${isFieldEmpty && "border-2 border-red-500"}`}
        ></input>
      </div>
      <div className="flex justify-around mt-2">
        <label className="basis-1/4">District*</label>
        <input
          type="text"
          placeholder=" District"
          name="district"
          value={addressDetailsObj.district}
          onChange={handleChange}
          className={`border-black border basis-2/4 rounded ${isFieldEmpty && "border-2 border-red-500"}`}
        ></input>
      </div>
      <div className="flex justify-around mt-2">
        <label className="basis-1/4">State* </label>
        <input
          type="text"
          placeholder=" State"
          name="state"
          value={addressDetailsObj.state}
          onChange={handleChange}
          className={`border-black border basis-2/4 rounded ${isFieldEmpty && "border-2 border-red-500"}`}
        ></input>
      </div>
      <div className="flex justify-around mt-2">
        <label className="basis-1/4">Country*</label>
        <input
          type="text"
          placeholder=" Country"
          name="country"
          value={addressDetailsObj.country}
          onChange={handleChange}
          className={`border-black border basis-2/4 rounded ${isFieldEmpty && "border-2 border-red-500"}`}
        ></input>
      </div>
      <div className="flex justify-around mt-2">
        <label className="basis-1/4">Pincode*</label>
        <input
          type="text"
          placeholder=" Pincode"
          name="pinCode"
          value={addressDetailsObj.pinCode}
          onChange={handleChange}
          className={`border-black border basis-2/4 rounded ${isFieldEmpty && "border-2 border-red-500"}`}
        ></input>
      </div>
      <div className="flex flex-row justify-end mr-16 sm:mr-32 mt-8 w-full">
        <input
          type="button"
          value="Cancel"
          onClick={handleNewAddressClick}
          className="border border-black px-8 py-2 rounded-full mr-4 cursor-pointer hover:bg-gray-300"
        />
        <input
          type="button"
          value="Save Changes"
          onClick={handleSaveAddressClick}
          className="px-8 py-2 rounded-full text-white bg-black  hover:bg-gray-700 cursor-pointer sm:mr-10 lg:mr-16"
        ></input>
      </div>
    </div>
  );
}

export default AddNewAddress;
