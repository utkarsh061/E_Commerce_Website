"use client";
import Link from "next/link";

function Footer() {
  return (
      <div className="mx-auto my-0 w-full bg-black p-10 text-white absolute text-center sm:text-left">
        <div className="sm:flex sm:flex-wrap mx-auto my-0 max-w-6xl sm:items-center">
          <div className="basis-4/12">
            <h3 className="font-bold">Download Our App</h3>
            <p className="text-sm text-gray-600 mt-4">
              Download App for Android & IOS mobile phone.
            </p>
            <div className="flex mt-6 justify-center sm:justify-start">
              <Link className="mr-2 w-3/12" href={"https://www.apple.com/in/app-store/"} target="_blank">
                <img src="/Images/appstore.jpg" />
              </Link>
              <Link className="w-3/12" href={"https://play.google.com/"} target="_blank">
                <img src="/Images/playstore.jpg" />
              </Link>
            </div>
          </div>
        <div className="mt-8 sm:mt-0 basis-4/12 text-gray-500 flex flex-col justify-center items-center">
          <div className="border-4 border-double border-gray-600">
            <h2 className="py-1 px-2 font-bold font-sans text-center text-xl">
              Ur&apos;s Store
            </h2>
          </div>
          <p className="text-center mt-4">
            Our Purpose is to sustainly Make the pleasure & Benefits of Sports
            Accessible to the Many.
          </p>
        </div>
        <div className="basis-4/12 text-center mt-8 sm:mt-0">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <ul className="mt-4 text-sm text-gray-500 flex justify-evenly">
            <li className="mb-1">
              <Link href={"https://www.facebook.com/"} target="_blank">Facebook</Link>
            </li>
            <li className="mb-1">
              <Link href={"https://www.instagram.com/"} target="_blank">Instagram</Link>
            </li>
            <li className="mb-1">
              <Link href={"https://x.com/?lang=en"} target="_blank">Twitter</Link>
            </li>
            <li className="mb-1">
              <Link href={"https://www.youtube.com/"} target="_blank">Youtube</Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
  );
}
export default Footer;
