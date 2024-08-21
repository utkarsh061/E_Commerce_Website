"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Register() {
  const [isHidePassword,setIsHidePassword] = useState(true)
  const [emptyFields, setEmptyFields] = useState(false);
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

    if([registerUserData.email,
      registerUserData.fullName,
      registerUserData.password,
      registerUserData.phoneNumber,
      registerUserData.username
    ].some( item => item.trim() === "")) setEmptyFields(true) 
    else setEmptyFields(false)

    console.log("Register form data:", registerUserData);
  };
  return (
    <div className="mx-16 my-6">
      <div className="mt-8">
      {emptyFields && (
              <p className="text-red-600 font-medium text-xs my-2 w-full flex justify-center">
                All fields are required
              </p>
            )}
        <form onSubmit={() => handleRegister()}>
          <input
            placeholder="Full Name"
            className={`border mt-4 ${
                  emptyFields ? "border-red-500" : "border-black"
                } py-1 px-2 rounded w-full`}
            name="fullName"
            value={registerUserData.fullName}
            onChange={handleInputChange}
          />
          <input
            placeholder="Username"
            className={`border mt-4 ${
                  emptyFields ? "border-red-500" : "border-black"
                } py-1 px-2 rounded w-full`}
            name="username"
            value={registerUserData.username}
            onChange={handleInputChange}
          />
          <input
            placeholder="Mobile Number"
            className={`border mt-4 ${
                  emptyFields ? "border-red-500" : "border-black"
                } py-1 px-2 rounded w-full`}
            name="phoneNumber"
            value={registerUserData.phoneNumber}
            onChange={handleInputChange}
          />
          <input
            placeholder="Email"
            className={`border mt-4 ${
                  emptyFields ? "border-red-500" : "border-black"
                } py-1 px-2 rounded w-full`}
            name="email"
            value={registerUserData.email}
            onChange={handleInputChange}
          />
          <div className="relative flex items-center">
          <input
            placeholder="Password"
            type={isHidePassword ? "password" : "text"}
            className={`border mt-4 ${
                  emptyFields ? "border-red-500" : "border-black"
                } py-1 px-2 rounded w-full`}
            name="password"
            value={registerUserData.password}
            onChange={handleInputChange}
          />
          <button
                  type="button"
                  onClick={ () => setIsHidePassword(!isHidePassword)}
                  className="absolute right-2"
                >
                  <FontAwesomeIcon
                    icon={
                      isHidePassword
                        ? faEyeSlash
                        : faEye
                    }
                    className="mt-5 text-gray-500"
                  ></FontAwesomeIcon>
                </button>
                </div>
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
