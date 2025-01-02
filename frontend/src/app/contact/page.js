"use client";

import { useState } from "react";
import { queryApiCall } from "../apiCalls";
import Modal from "@/components/Modal/Modal";

function ContactUs() {
  const [emptyFields, setEmptyFields] = useState(false);
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    query: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (
      [
        formDetails.fullName,
        formDetails.email,
        formDetails.phoneNumber,
        formDetails.query,
      ].some((item) => item.trim() === "")
    )
      setEmptyFields(true);
    else {
      setEmptyFields(false);
      let isQueryPlaced = queryApiCall(formDetails);
      isQueryPlaced && setIsModalOpen(true)
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <div className="mx-auto h-fit max-w-6xl px-8 flex flex-col">
        <h1 className="font-bold flex justify-center text-4xl font-serif tracking-wider">
          Contact Us
        </h1>
        <p className="flex justify-center text-center text-black text-sm sm:text-base">
          Please Fill out this Form as per your request
        </p>
        {emptyFields && (
          <p className="text-red-600 font-medium text-xs my-2 w-full flex justify-center">
            All fields are required
          </p>
        )}
        <p className="flex justify-center mt-2">Full Name </p>
        <div className="flex justify-center">
          <input
            type="text"
            name="fullName"
            value={formDetails.fullName}
            placeholder=" Full Name"
            className={`${
              emptyFields ? "border-red-500" : "border-black"
            } border rounded w-full sm:w-1/2`}
            onChange={handleInputChange}
          />
        </div>

        <p className="flex justify-center mt-2">Email </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder=" Email"
            name="email"
            value={formDetails.email}
            className={`${
              emptyFields ? "border-red-500" : "border-black"
            } border rounded w-full sm:w-1/2`}
            onChange={handleInputChange}
          />
        </div>

        <p className="flex justify-center mt-2">Phone Number </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder=" Phone Number"
            value={formDetails.phoneNumber}
            name="phoneNumber"
            className={`${
              emptyFields ? "border-red-500" : "border-black"
            } border rounded w-full sm:w-1/2`}
            onChange={handleInputChange}
          ></input>
        </div>

        <p className="flex justify-center mt-2">Query</p>
        <div className="flex justify-center">
          <textarea
            type="text"
            name="query"
            value={formDetails.query}
            placeholder=" Query"
            className={`${
              emptyFields ? "border-red-500" : "border-black"
            } border rounded w-full sm:w-1/2`}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex justify-center mt-4 mb-8">
          <input
            type="submit"
            value="Submit"
            className="px-8 py-2 rounded-full text-white bg-gray-700  hover:bg-gray-800 cursor-pointer w-full sm:w-fit"
            onClick={handleSubmit}
          />
        </div>
      </div>
      {isModalOpen &&
          <Modal 
           description="Query Have been Places SuccessFully, Our Executive will connect with you Shortly." 
           handleMainbuttonClick={handleModalClose}
           handleCancelButtonClick={handleModalClose}
           buttonTitle="Okay"
            />
          }
    </div>
  );
}

export default ContactUs;
