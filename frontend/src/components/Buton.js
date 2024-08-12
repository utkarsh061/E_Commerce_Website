"use client"

import Link from "next/link";

function Button(props){
    const {text} = props;
    return(
        <div className="pt-6">
            <Link href={"/products"} className="text-white bg-gray-700  hover:bg-gray-800 px-4 py-2 rounded-3xl">
                <span>
                    <input type="button" value={text+" "}></input>
                     &#8594;
                </span>
            </Link>
        </div>
    )
}
export default Button;