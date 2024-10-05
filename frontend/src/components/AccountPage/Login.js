"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ForgotPassword from "./ForgetPassword";
import { LoginUser } from "@/app/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function Login() {
  const [emptyFields, setEmptyFields] = useState(false);
  const [isValidCredentials , setIsValidCredentials] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  useRouter
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState({
    loginPagePassword: true,
    forgetPasswordPageNewPassword: true,
    forgetPasswordPageConfirmNewPassword: true,
  });
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleForgoetPassword = () => {
    setIsForgetPassword(true);
  };
  const handleFormSubmit = () => {
    event.preventDefault();
    if([loginFormData.email,loginFormData.password].some(item => item.trim() === "")) setEmptyFields(true)
      else {
        setEmptyFields(false)
        setIsValidCredentials(LoginUser(loginFormData,dispatch,router)) 
      }
  };

  const handlePasswordHide = (name) => {
    setIsHidePassword((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };
  return (
    <div className="mx-16 my-6">
      <div className="mt-12">
        {isForgetPassword ? (
          <ForgotPassword
            isHidePassword={isHidePassword}
            handlePasswordHide={handlePasswordHide}
          />
        ) : (
          <>
            {(emptyFields || isValidCredentials) && (
              <p className="text-red-600 font-medium text-xs my-2 w-full flex justify-center">
                {isValidCredentials ? (emptyFields ? "All fields are required" : "Invalid Credentials") : "All fields are required"}
              </p>
            )}
            <form onSubmit={() => handleFormSubmit()}>
              <input
                placeholder="Email Id"
                type="email"
                className={`border ${
                  (emptyFields || isValidCredentials) ? "border-red-500" : "border-black"
                } py-1 px-2 rounded w-full`}
                id="loginEmail"
                name="email"
                value={loginFormData.email}
                onChange={handleInputChange}
              />
              <div className="relative flex items-center">
                <input
                  type={isHidePassword.loginPagePassword ? "password" : "text"}
                  placeholder="Password"
                  name="password"
                  id="loginPassword"
                  value={loginFormData.password}
                  onChange={handleInputChange}
                  className={`border ${
                    (emptyFields || isValidCredentials) ? "border-red-500" : "border-black"
                  } py-1 px-2 mt-4 rounded w-full`}
                />
                <button
                  type="button"
                  className="absolute right-2"
                  onClick={() => handlePasswordHide("loginPagePassword")}
                >
                  <FontAwesomeIcon
                    icon={isHidePassword.loginPagePassword ? faEyeSlash : faEye}
                    className="mt-5 text-gray-500"
                  ></FontAwesomeIcon>
                </button>
              </div>
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
