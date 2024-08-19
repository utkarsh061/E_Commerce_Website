"use client";

import { useState } from "react";
import Button from "../Buton";

function AddNewAddress(props) {
  const {
    handleNewAddressClick,
    setIsAllNewAddressFieldsSelected,
    isAllNewAddressFieldsSelected,
  } = props;
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

  const handleClick = () => {
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
      handleNewAddressClick();
      setisFieldEmpty(false);
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
    <div className="flex flex-col mx-72 my-12">
      {isFieldEmpty && (
        <div className="mt-2 flex justify-around">
          <label className="text-red-500 font-medium">
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
      <div className="flex flex-row justify-end mr-16 mt-8">
        <input
          type="button"
          value="Cancel"
          onClick={handleNewAddressClick}
          className="border border-black px-4 py-1 rounded-full mr-4 cursor-pointer"
        />
        <input
          type="button"
          value="Save Changes"
          onClick={handleClick}
          className="px-4 py-1 rounded-full text-white bg-gray-700  hover:bg-gray-800 cursor-pointer"
        ></input>
      </div>
    </div>
  );
}

export default AddNewAddress;
