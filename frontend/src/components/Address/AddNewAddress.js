"use client";

import Button from "../Buton";

function AddNewAddress(props) {
    const {handleNewAddressClick} = props
  return (
    <div className="flex flex-col mx-72 my-12">
      <div className="flex mt-2 justify-around">
        <label className="basis-1/4">Address Line 1: </label>
        <input
          type="text"
          placeholder=" Address Line 1"
          className="border-black border basis-2/4 rounded"
        ></input>
      </div>
      <div className="flex justify-around mt-2">
        <label className="basis-1/4">Address Line 2: </label>
        <input
          type="text"
          placeholder=" Address Line 2"
          className="border-black border basis-2/4 rounded"
        ></input>
      </div>
      <div className="flex justify-around mt-2">
        <label className="basis-1/4">City: </label>
        <input
          type="text"
          placeholder=" City"
          className="border-black border basis-2/4 rounded"
        ></input>
      </div>
      <div className="flex justify-around mt-2">
        <label className="basis-1/4">District: </label>
        <input
          type="text"
          placeholder=" District"
          className="border-black border basis-2/4 rounded"
        ></input>
      </div>
      <div className="flex justify-around mt-2">
        <label className="basis-1/4">State </label>
        <input
          type="text"
          placeholder=" State"
          className="border-black border basis-2/4 rounded"
        ></input>
      </div>
      <div className="flex justify-around mt-2">
        <label className="basis-1/4">Country: </label>
        <input
          type="text"
          placeholder=" Country"
          className="border-black border basis-2/4 rounded"
        ></input>
      </div>
      <div className="flex justify-around mt-2">
        <label className="basis-1/4">Pincode: </label>
        <input
          type="text"
          placeholder=" Pincode"
          className="border-black border basis-2/4 rounded"
        ></input>
      </div>
      <div className="flex flex-row justify-end mr-16 mt-8">
      <input 
      type="button" 
      value="Cancel" 
      onClick={handleNewAddressClick}
      className="border border-black px-4 py-1 rounded-full mr-4 cursor-pointer"/>
      <input 
      type="button" 
      value="Save Changes" 
      onClick={handleNewAddressClick}
      className="px-4 py-1 rounded-full text-white bg-gray-700  hover:bg-gray-800 cursor-pointer"></input>
      </div>
    </div>
  );
}

export default AddNewAddress;
