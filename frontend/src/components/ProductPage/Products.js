"use client"
import {products} from "./AllProductsConstant";
import IndividualItem from "../ShoppingRow/IndividualItem";
import Link from "next/link";
import { setIndividualPageItem } from "@/app/redux/applicationSlice";
import { useDispatch } from "react-redux";

function Products(){
    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(setIndividualPageItem(item))
    }

    return (
        <div className="md:my-4">
            <div className="md:flex md:flex-wrap">
                {products?.map((item) => (
                        <IndividualItem
                            key={item.id}
                            imgURL={item.imgURL}
                            title={item.title}
                            rating={item.rating}
                            review={item.review}
                            price={item.price}
                            handleClick={() => handleClick(item)}
                        />
                    ))}
            </div>
            <div className="flex justify-center my-8">
                <Link href={"/products"}><div className="px-3 py-1 border-2 border-black mx-1 hover:bg-black hover:text-white text-black rounded-md">1</div></Link>
                <Link href={"/products"}><div className="px-3 py-1 border-2 border-black mx-1 hover:bg-black hover:text-white text-black rounded-md">2</div></Link>
                <Link href={"/products"}><div className="px-3 py-1 border-2 border-black mx-1 hover:bg-black hover:text-white text-black rounded-md">3</div></Link>
                <Link href={"/products"}><div className="px-3 py-1 border-2 border-black mx-1 hover:bg-black hover:text-white text-black rounded-md">4</div></Link>
                <Link href={"/products"}><div className="px-3 py-1 border-2 border-black mx-1 hover:bg-black hover:text-white text-black rounded-md">&#8594;</div></Link>
            </div>
        </div>
    )
}
export default Products;