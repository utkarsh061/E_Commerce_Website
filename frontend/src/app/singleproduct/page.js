"use client"

import IndividualItem from "@/components/ShoppingRow/IndividualItem";
import SingleProductInfo from "@/components/SingleProduct/singleProductSection";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { newArrival } from "@/components/ShoppingRow/shoppingItemConstant.js"
import { setIndividualPageItem } from "../redux/applicationSlice";


function SingleProduct(){
    const applicationData = useSelector((state) => state.application)
    const { individualPageItem} = applicationData
    const dispatch = useDispatch()
    return(
        <>
            <SingleProductInfo
                individualPageItem={individualPageItem}
            />
            <div className="mx-52 my-12">
                <div className="flex">
                    <div className="basis-1/2 font-bold text-2xl"><h1>More Products</h1></div>
                    <div className="basis-1/2 flex justify-end">
                        <Link href={"/products"}>
                            View More
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap my-8">
                    {newArrival?.map((item) => (
                        <IndividualItem
                            key={item.id}
                            imgURL={item.imgURL}
                            title={item.title}
                            rating={item.rating}
                            review={item.review}
                            price={item.price}
                            handleClick={() => dispatch(setIndividualPageItem(item))}
                        />
                    ))}
                </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct;