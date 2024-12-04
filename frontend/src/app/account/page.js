"use client";
import AccountDetails from "@/components/AccountPage/AccountDetails/AccountDetails";
import Login from "@/components/AccountPage/Login";
import Register from "@/components/AccountPage/Register";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function AccountPage() {
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
  return (
    <>
      {isUserLoggedIn ? (
        <AccountDetails />
      ) : (
        <div className="bg-gradient-to-l from-black to-gray-700">
          <div className="sm:flex mx-auto my-0 max-w-6xl px-8">
          <div className="sm:basis-1/2 py-12 flex justify-center">
            <div className="bg-white w-8/12 sm:w-4/6 rounded">
              <div className="flex">
                <h3
                  className={`basis-1/2 flex justify-center hover:cursor-pointer ${
                    !isRegisterPage && "border-b-2 border-black"
                  } hover:bg-black hover:text-white py-2`}
                  onClick={() => handleClick("Login")}
                >
                  Login
                </h3>
                <h3
                  className={`basis-1/2 flex justify-center hover:cursor-pointer ${
                    isRegisterPage && "border-b-2 border-black"
                  } hover:bg-black hover:text-white py-2`}
                  onClick={(e) => handleClick("Register")}
                >
                  Register
                </h3>
              </div>
              {isRegisterPage ? <Register /> : <Login/>}
            </div>
          </div>
          <div className="w-1/2 h-1/2 sm:basis-1/2 hidden sm:block my-12 lg:my-0">
            <img src="/Images/laptop1.jpg" className="py-12 h-full  " />
          </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AccountPage;
