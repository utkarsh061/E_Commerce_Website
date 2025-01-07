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
    <form className="max-w-6xl mx-auto p-6 md:p-8 flex flex-col items-center">
      {isFieldEmpty && (
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-red-600">
            All (*) fields are mandatory
          </label>
        </div>
      )}
      <div className="mb-5 w-full lg:w-1/2">
        <label
          htmlFor="addressLine1"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Address Line 1*
        </label>
        <input
          type="text"
          id="addressLine1"
          name="addressLine1"
          value={addressDetailsObj.addressLine1}
          onChange={handleChange}
          placeholder="Address Line 1"
          className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isFieldEmpty && !addressDetailsObj.addressLine1.trim()
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required
        />
      </div>
      <div className="mb-5 w-full lg:w-1/2">
        <label
          htmlFor="addressLine2"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Address Line 2
        </label>
        <input
          type="text"
          id="addressLine2"
          name="addressLine2"
          value={addressDetailsObj.addressLine2}
          onChange={handleChange}
          placeholder="Address Line 2"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-5 w-full lg:w-1/2 flex gap-4">
          <div className="basis-1/2">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              City*
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={addressDetailsObj.city}
              onChange={handleChange}
              placeholder="City"
              className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                isFieldEmpty && !addressDetailsObj.city.trim()
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              required
            />
          </div>
          <div className="basis-1/2 ">
            <label
              htmlFor="district"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              District*
            </label>
            <input
              type="text"
              id="district"
              name="district"
              value={addressDetailsObj.district}
              onChange={handleChange}
              placeholder="District"
              className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                isFieldEmpty && !addressDetailsObj.district.trim()
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              required
            />
          </div>
      </div>
      <div className="mb-5 w-full lg:w-1/2">
        <label
          htmlFor="state"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          State*
        </label>
        <input
          type="text"
          id="state"
          name="state"
          value={addressDetailsObj.state}
          onChange={handleChange}
          placeholder="State"
          className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
            isFieldEmpty && !addressDetailsObj.state.trim()
              ? "border-red-500"
              : "border-gray-300"
          }`}
          required
        />
      </div>
      <div className="mb-5 w-full lg:w-1/2 flex gap-4">
        <div className="basis-1/2">
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Country*
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={addressDetailsObj.country}
            onChange={handleChange}
            placeholder="Country"
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
              isFieldEmpty && !addressDetailsObj.country.trim()
                ? "border-red-500"
                : "border-gray-300"
            }`}
            required
          />
        </div>
        <div className="basis-1/2">
          <label
            htmlFor="pinCode"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Pincode*
          </label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={addressDetailsObj.pinCode}
            onChange={handleChange}
            placeholder="Pincode"
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
              isFieldEmpty && !addressDetailsObj.pinCode.trim()
                ? "border-red-500"
                : "border-gray-300"
            }`}
            required
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleNewAddressClick}
          className="text-gray-900 border border-gray-300 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSaveAddressClick}
          className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Save Changes
        </button>
      </div>
    </form>

  );
}

export default AddNewAddress;
