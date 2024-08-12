"use client"

import { useDispatch } from "react-redux";
import IndividualItem from "./IndividualItem";
import { specialEdition,newArrival } from "@/components/ShoppingRow/shoppingItemConstant.js"
import { setIndividualPageItem } from "@/app/redux/applicationSlice";
function ShoppingRow(props){
    const {heading,isSpecialEdition} = props
    const data = isSpecialEdition ? specialEdition: newArrival
    const dispatch = useDispatch()
    return(
        <div>
            <div className="justify-self-center">
                <h2 className="font-extrabold text-4xl text-center">{heading}</h2>
                <div class="bg-red-600 border-solid text-red-600 h-2 text-xs rounded">*</div>
            </div>
            <div className="flex flex-wrap my-8">
                {data?.map((item) => (
                    <IndividualItem
                        key={item.id}
                        imgURL={item.imgURL}
                        title={item.title}
                        rating={item.rating}
                        review={item.review}
                        price={item.price}
                        handleClick= {() => dispatch(setIndividualPageItem(item))}
                    />
                ))}
            </div>
        </div>
    )
}

export default ShoppingRow;