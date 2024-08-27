"use client";

import { useState } from "react";

function ContactUs() {
  const [emptyFields, setEmptyFields] = useState(false);
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
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
        formDetails.message,
      ].some((item) => item.trim() === "")
    )
      setEmptyFields(true);
    else setEmptyFields(false);

    console.log(formDetails);
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-bold flex justify-center text-4xl font-serif tracking-wider">
        Contact Us
      </h1>
      <p className="flex justify-center">
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
          } border rounded w-1/3`}
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
          } border rounded w-1/3`}
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
          } border rounded w-1/3`}
          onChange={handleInputChange}
        ></input>
      </div>

      <p className="flex justify-center mt-2">Message </p>
      <div className="flex justify-center">
        <textarea
          type="text"
          name="message"
          value={formDetails.message}
          placeholder=" Message"
          className={`${
            emptyFields ? "border-red-500" : "border-black"
          } border rounded w-1/3`}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="flex justify-center mt-4 mb-8">
        <input
          type="submit"
          value="Submit"
          className="px-8 py-2 rounded-full text-white bg-gray-700  hover:bg-gray-800 cursor-pointer"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default ContactUs;
