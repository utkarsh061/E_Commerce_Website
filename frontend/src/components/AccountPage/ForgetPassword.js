"use client"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { resetPassword } from "@/app/apiCalls";
import { useRouter } from "next/navigation";

function ForgotPassword(props){
    const {handlePasswordHide,isHidePassword,setIsModalOpen,setForgotPasswordModal,setIsForgetPassword} = props
    const [emptyFields, setEmptyFields] = useState(false);
    const [isResetPasswordSuccessfull,setIsResetPasswordSuccessfull] = useState(true)
    const router = useRouter();
    const [forgotPasswordData, setForgotPasswordData] = useState({
        email: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    
    const handleFormSubmit = async () => {
        event.preventDefault();
         if([forgotPasswordData.email,
            forgotPasswordData.newPassword,
            forgotPasswordData.confirmNewPassword].some( item =>  item.trim() === "")) setEmptyFields(true)
            else {
              setEmptyFields(false)
              let isResetPasswordChanged = await resetPassword(forgotPasswordData,router)
              setIsResetPasswordSuccessfull(isResetPasswordChanged)
              isResetPasswordChanged && (
                setForgotPasswordModal(true),
                setIsForgetPassword(false),
                setIsModalOpen(true)
              )
            }
      };

      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setForgotPasswordData({
              ...forgotPasswordData,
              [name]: value,
            })
      };
    return (
        <>
          {(emptyFields || !isResetPasswordSuccessfull) && (
              <p className="text-red-600 font-medium text-xs mb-2 w-full flex justify-center">
                {emptyFields ? "All fields are required" : "Password should match"}
              </p>
            )}
          <form onSubmit={() => handleFormSubmit()}>
            <div>
              <input
                placeholder="Email"
                type="email"
                className={`border py-1 px-2 rounded w-full ${
                  emptyFields || !isResetPasswordSuccessfull ? "border-red-500" : "border-black"
                }`}
                id="forgotPasswordEmail"
                name="email"
                value={forgotPasswordData.email}
                onChange={handleInputChange}
              />
              <div className="relative flex items-center">
                <input
                  placeholder="New Password"
                  type={
                    isHidePassword.forgetPasswordPageNewPassword
                      ? "password"
                      : "text"
                  }
                  className={`border py-1 px-2 mt-4 rounded w-full  ${
                  emptyFields || !isResetPasswordSuccessfull ? "border-red-500" : "border-black"
                }`}
                  name="newPassword"
                  value={forgotPasswordData.newPassword}
                  onChange={handleInputChange}
                ></input>
                <button
                  type="button"
                  onClick={() =>
                    handlePasswordHide("forgetPasswordPageNewPassword")
                  }
                  className="absolute right-2"
                >
                  <FontAwesomeIcon
                    icon={
                      isHidePassword.forgetPasswordPageNewPassword
                        ? faEyeSlash
                        : faEye
                    }
                    className="mt-5 text-gray-500"
                  ></FontAwesomeIcon>
                </button>
              </div>
              <div className="relative flex items-center">
                <input
                  placeholder="Confirm New Password"
                  name="confirmNewPassword"
                  type={
                    isHidePassword.forgetPasswordPageConfirmNewPassword
                      ? "password"
                      : "text"
                  }
                  value={forgotPasswordData.confirmNewPassword}
                  onChange={handleInputChange}
                  className={`border py-1 px-2 mt-4 rounded w-full ${
                  emptyFields || !isResetPasswordSuccessfull ? "border-red-500" : "border-black"
                } `}
                ></input>
                <button
                  type="button"
                  onClick={() =>
                    handlePasswordHide("forgetPasswordPageConfirmNewPassword")
                  }
                  className="absolute right-2"
                >
                  <FontAwesomeIcon
                    icon={
                      isHidePassword.forgetPasswordPageConfirmNewPassword
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
                  value="Submit"
                  className="w-10/12 hover:cursor-pointer"
                ></input>
              </div>
            </div>
          </form>
          </>
    )
}

export default ForgotPassword