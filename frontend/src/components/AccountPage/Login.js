"use client";
import { useState } from "react";

function Login() {
  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword:""
  });

  const handleForgoetPassword = () => {
    setIsForgetPassword(true);
  };
  const handleFormSubmit = () => {
    event.preventDefault();
    isForgetPassword ? console.log("Forgot Pass word Form data:", forgotPasswordData) :
    console.log("Login Form data:", loginFormData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    isForgetPassword ? setForgotPasswordData({
        ...forgotPasswordData,
        [name]:value
     }) : 
     setLoginFormData({
        ...loginFormData,
        [name]: value,
      });
  };
  return (
    <div className="mx-16 my-6">
      <div className="mt-12">
        {/* Forgot Password Code */}

        {isForgetPassword && (
          <form onSubmit={() => handleFormSubmit()}>
            <div>
              <input
                placeholder="Email"
                className={`border border-black py-1 px-2 rounded w-full`}
                id="forgotPasswordEmail"
                name="email"
                value={forgotPasswordData.email}
                onChange={handleInputChange}
              />
              <input
                placeholder="New Password"
                className={`border border-black py-1 px-2 mt-4 rounded w-full`}
                name="newPassword"
                value={forgotPasswordData.newPassword}
                onChange={handleInputChange}
              ></input>
              <input
                placeholder="Confirm New Password"
                name="confirmNewPassword"
                value={forgotPasswordData.confirmNewPassword}
                onChange={handleInputChange}
                className={`border border-black py-1 px-2 mt-4 rounded w-full`}
              ></input>
              <div className=" mt-6 text-white bg-gray-700  hover:bg-black px-6 py-2 w-full rounded-3xl flex justify-center">
                <input
                  type="submit"
                  value="Submit"
                  className="w-10/12 hover:cursor-pointer"
                ></input>
              </div>
            </div>
          </form>
        )}

        {/* Login Code */}

        {!isForgetPassword && (
          <>
            {isInvalidCredentials && (
              <p className="text-red-600 font-medium text-xs my-2 w-full flex justify-center">
                Invalid Credentials
              </p>
            )}
            <form onSubmit={() => handleFormSubmit()}>
              <input
                placeholder="Email Id"
                className={`border ${
                  isInvalidCredentials ? "border-red-500" : "border-black"
                } py-1 px-2 rounded w-full`}
                id="loginEmail"
                name="email"
                value={loginFormData.email}
                onChange={handleInputChange}
              />
              <input
                placeholder="Password"
                name="password"
                id="loginPassword"
                value={loginFormData.password}
                onChange={handleInputChange}
                className={`border ${
                  isInvalidCredentials ? "border-red-500" : "border-black"
                } py-1 px-2 mt-4 rounded w-full`}
              />
              <div className=" mt-6 text-white bg-gray-700  hover:bg-black px-6 py-2 w-full rounded-3xl flex justify-center">
                <input
                  type="submit"
                  value="Login"
                  className="w-10/12 hover:cursor-pointer"
                />
              </div>
            </form>
            <p
              className="mt-4 flex justify-end hover:cursor-pointer"
              onClick={() => handleForgoetPassword()}
            >
              Forget Password
            </p>
          </>
        )}
      </div>
    </div>
  );
}
export default Login;
