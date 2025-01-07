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

  const handleSubmit = async () => {
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
      let isQueryPlaced = await queryApiCall(formDetails);
      isQueryPlaced && setIsModalOpen(true)
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <div className="mx-auto h-fit max-w-6xl px-8 my-4 flex flex-col">
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
        <form className="flex flex-col items-center py-4">
          <div className="mb-5 w-full lg:w-1/2">
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formDetails.fullName}
              placeholder="Full Name"
              className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                emptyFields ? "border-red-500" : "border-gray-300"
              }`}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-5 w-full lg:w-1/2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formDetails.email}
              placeholder="Email"
              className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                emptyFields ? "border-red-500" : "border-gray-300"
              }`}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-5 w-full lg:w-1/2">
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formDetails.phoneNumber}
              placeholder="Phone Number"
              className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                emptyFields ? "border-red-500" : "border-gray-300"
              }`}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-5 w-full lg:w-1/2">
            <label
              htmlFor="query"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Query
            </label>
            <textarea
              id="query"
              name="query"
              value={formDetails.query}
              placeholder="Your Query"
              className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                emptyFields ? "border-red-500" : "border-gray-300"
              }`}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm w-full sm:w-auto px-12 py-2.5 text-center"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>

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
