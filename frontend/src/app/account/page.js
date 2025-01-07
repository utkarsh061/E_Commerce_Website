"use client";
import AccountDetails from "@/components/AccountPage/AccountDetails/AccountDetails";
import Login from "@/components/AccountPage/Login";
import Register from "@/components/AccountPage/Register";
import Modal from "@/components/Modal/Modal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function AccountPage() {
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const [ isModalOpen , setIsModalOpen ] = useState(false);
  const applicationData = useSelector((state) => state.application);
  const { isUserLoggedIn } = applicationData;


  const handleClick = (data) => {
    if (data === "Login") {
      setIsRegisterPage(false);
    }
    if (data === "Register") {
      setIsRegisterPage(true);
    }
  }; 
  const handleModalMainClick = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {isUserLoggedIn ? (
        <AccountDetails />
      ) : (
        <div>
          <div className="bg-gradient-to-l from-black to-gray-700">
            <div className="sm:flex mx-auto my-0 sm:justify-center max-w-6xl px-8">
              <div className="py-12 flex justify-center sm:justify-center  ">
                <div className="bg-white w-full rounded-xl sm:rounded-l-xl sm:rounded-r-none">
                  <div className="flex">
                    <h3
                      className={`basis-1/2 flex justify-center rounded-ss-xl hover:cursor-pointer ${
                        !isRegisterPage && "border-b-2 border-black"
                      } hover:bg-black hover:text-white text-black py-2`}
                      onClick={() => handleClick("Login")}
                    >
                      Login
                    </h3>
                    <h3
                      className={`basis-1/2 flex justify-center rounded-se-xl sm:rounded-none hover:cursor-pointer ${
                        isRegisterPage && "border-b-2 border-black"
                      } hover:bg-black hover:text-white text-black py-2`}
                      onClick={(e) => handleClick("Register")}
                    >
                      Register
                    </h3>
                  </div>
                  {isRegisterPage ? <Register handleClick={handleClick} setIsModalOpen={setIsModalOpen} /> : <Login setIsModalOpen={setIsModalOpen} setForgotPasswordModal={setForgotPasswordModal}/>}
                </div>
              </div>
              <div className={`${isRegisterPage ? "w-full" : "w-1/2"} hidden sm:block my-12`}>
                <img src="/Images/laptop1.jpg" className="h-full rounded-r-md" />
              </div>
            </div>
          </div>
        {isModalOpen &&
            <Modal 
               description={forgotPasswordModal ? "Password Updated Successfully" : "User Registered Successfully, Please Log In" }
               handleMainbuttonClick={handleModalMainClick}
               buttonTitle="Okay"
            />
            }
        </div>
      )}
    </>
  );
}

export default AccountPage;
