"use client";

function ContactUs() {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold flex justify-center text-4xl font-serif tracking-wider">
        Contact Us
      </h1>
      <p className="flex justify-center">
        Please Fill out this Form as per your request
      </p>
      <p className="flex justify-center mt-2">Full Name </p>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder=" Full Name"
          className="border-black border rounded w-1/3"
        />
      </div>

      <p className="flex justify-center mt-2">Email </p>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder=" Email"
          className="border-black border rounded w-1/3"
        />
      </div>

      <p className="flex justify-center mt-2">Phone Number </p>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder=" Phone Number"
          className="border-black border rounded w-1/3"
        ></input>
      </div>

      <p className="flex justify-center mt-2">Message </p>
      <div className="flex justify-center">
        <textarea
          type="text"
          placeholder=" Message"
          className="border-black border rounded w-1/3"
        ></textarea>
      </div>
      <div className="flex justify-center mt-4 mb-8">
      <input 
      type="submit" 
      value="Submit" 
      className="px-8 py-2 rounded-full text-white bg-gray-700  hover:bg-gray-800 cursor-pointer"></input>
      </div>
    </div>
  );
}

export default ContactUs;
