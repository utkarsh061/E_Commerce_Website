"use client"

function Register(){
    return (
        <div className="mx-16 my-6">
                <div className="mt-12">
                    <input placeholder="Mobile Number" className={`border border-black py-1 px-2 rounded w-full`}></input>
                    <input placeholder="Email" className={`border border-black py-1 px-2 mt-4 rounded w-full`}></input>
                     <input placeholder="Password" className={`border border-black py-1 px-2 mt-4 rounded w-full`}></input>
                     <div className=" mt-6 text-white bg-gray-700  hover:bg-black px-6 py-2 w-full rounded-3xl flex justify-center">
                        <input type="button" value="Register" className="w-10/12 hover:cursor-pointer"></input>
                      </div>
                </div>
            </div>
    )
}
export default Register;