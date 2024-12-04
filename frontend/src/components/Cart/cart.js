"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setCartItems } from "@/app/redux/applicationSlice";
import NoData from "../NoData";
import { NumberToString } from "../../app/globalUtils";

function Cart(){
    const {cartItems} = useSelector((state) => state.application)
    const dispatch = useDispatch()
    const [total,setTotal] = useState("0")

    useEffect(() => {
        let sum = 0;
        cartItems?.map((item) => {
            // let parts = item.totalItemPrice.split(" ");
            // let amount = parseFloat(parts[1].replace(/,/g, ''));
            sum=sum+item.totalItemPrice;
        })
        setTotal(sum)
    },[cartItems])

    const getPrice = (price,multiplyNumber) => {
        // let parts = price.split(" ");
        // let amount = parseFloat(parts[1].replace(/,/g, ''));
        let multipliedAmount = price * multiplyNumber ;
        // let result = `Rs ${multipliedAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        return multipliedAmount
    }

    const handleChange = (e,id) => {
        let index = cartItems?.findIndex( item => item.id === id);
        let newPrice = getPrice(cartItems[index].price,e.target.value)
            let updatedObj = {
                ...cartItems[index], 
                [e.target.name] : e.target.value,
                "totalItemPrice": newPrice
            }
        let updatedCartItems = [
            ...cartItems.slice(0,index),
            updatedObj,
            ...cartItems.slice(index+1)
        ]
        dispatch(setCartItems(updatedCartItems))
    }
    const handleRemoveClick = (index) => {
        let data=[]
        data=cartItems?.filter((item,key) => (
            key != index
        ))
        dispatch(setCartItems(data))
    }

    return (
        <div className="mx-auto my-8 max-w-6xl px-8">
            <div className="bg-black text-white flex px-2 py-0.5 text-center rounded">
                <h1 className="basis-3/5 mx-2 flex">Product</h1>
                <h1 className="basis-1/5 mx-2 hidden sm:flex sm:justify-center">Quantity</h1>
                <h1 className="basis-1/5 mx-2 pl-4 pr-2 sm:pl-0">Subtotal</h1>
            </div>
            { cartItems?.length === 0 ? <NoData text="No Items In Cart" height="h-52"/>
            : cartItems?.map((item,index) => {
                return (
                    <div className="flex text-black border-b-2 py-1">
                        <div className="basis-3/5 flex">
                            <div>
                                <img src={item.imgURL} className="w-24 h-24 my-1 mx-2"></img>
                                <input 
                                type="number" 
                                value ={item.quantity}
                                min="1"
                                className="border border-black flex text-black items-center w-10 mx-2 px-1 sm:hidden"
                                name="quantity"
                                onChange={(e) => handleChange(e,item.id)}
                                />
                            </div>
                            <div className="flex-col justify-center ml-4 text-sm sm:text-base">
                                <div className="flex">
                                    <h2 className="w-fit">{item.title}</h2>  
                                </div>
                                <h3>({item.categorySelected})</h3> 
                                <h3>{NumberToString(item.price)}</h3>
                                <p className="text-red-600 hover:cursor-pointer"
                                onClick={() => handleRemoveClick(index)}
                                >Remove</p>
                            </div>
                        </div>
                        <div className="basis-1/5 hidden sm:flex sm:justify-center">
                            <input 
                            type="number" 
                            value ={item.quantity}
                            min="1"
                            className="border border-black flex items-center my-8 w-10 px-1"
                            name="quantity"
                            onChange={(e) => handleChange(e,item.id)}
                            />
                        </div>
                        <div className="basis-2/5 sm:basis-1/5 my-8 flex justify-center text-sm sm:text-base">{NumberToString(item.totalItemPrice)}</div>
                    </div>
                ) 
            })
            }
            { cartItems?.length != 0 && <div className="flex text-black">
                <div className="basis-3/5"></div>
                <div className="basis-2/5 border-t-2 border-black">
                    <div className="mx-2 my-2 flex justify-end xl:pr-6 text-sm sm:text-base">
                        <h1 className="pr-4">Total</h1>
                        <p>{NumberToString(total)}</p>
                    </div>
                    <div className="pt-2 flex justify-end">
                        <Link href={"/addressdetails"} className="text-white bg-black hover:bg-gray-700 px-12 py-2 rounded-3xl">
                            <span>
                                <input type="button" value="Place Order"></input>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Cart;