"use client";

import { useState } from "react";

function Register() {
  const [registerUserData, setRegisterUserData] = useState({
    fullName: "",
    username: "",
    password: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterUserData({
      ...registerUserData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    event.preventDefault();
    console.log("Register form data:", registerUserData);
  };
  return (
    <div className="mx-16 my-6">
      <div className="mt-8">
        <form onSubmit={() => handleRegister()}>
          <input
            placeholder="Full Name"
            className={`border border-black py-1 px-2  rounded w-full`}
            name="fullName"
            value={registerUserData.fullName}
            onChange={handleInputChange}
          />
          <input
            placeholder="Username"
            className={`border border-black py-1 px-2 mt-4 rounded w-full`}
            name="username"
            value={registerUserData.username}
            onChange={handleInputChange}
          />
          <input
            placeholder="Mobile Number"
            className={`border border-black py-1 px-2 mt-4 rounded w-full`}
            name="phoneNumber"
            value={registerUserData.phoneNumber}
            onChange={handleInputChange}
          />
          <input
            placeholder="Email"
            className={`border border-black py-1 px-2 mt-4 rounded w-full`}
            name="email"
            value={registerUserData.email}
            onChange={handleInputChange}
          />
          <input
            placeholder="Password"
            className={`border border-black py-1 px-2 mt-4 rounded w-full`}
            name="password"
            value={registerUserData.password}
            onChange={handleInputChange}
          />
          <div className=" mt-6 text-white bg-gray-700  hover:bg-black px-6 py-2 w-full rounded-3xl flex justify-center">
            <input
              type="submit"
              value="Register"
              className="w-10/12 hover:cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
