"use client"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../redux/applicationSlice";
import Link from "next/link";

function CartPage(){
    const {cartItems} = useSelector((state) => state.application)
    const dispatch = useDispatch()
    const [subTotal,setSubTotal] = useState("")
    const [tax,setTax] = useState("0")
    const [total,setTotal] = useState("0")

    useEffect(() => {
        let sum = 0;
        cartItems?.map((item) => {
            let parts = item.totalItemPrice.split(" ");
            let amount = parseFloat(parts[1].replace(/,/g, ''));
            sum=sum+amount;
        })
        let result = `Rs ${sum.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        let tax= sum*0.01
        let taxAmount = `Rs ${tax.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        let totalAmount = `Rs ${(tax+sum).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        setSubTotal(result)
        setTax(taxAmount)
        setTotal(totalAmount)
    },[cartItems])

    const getPrice = (price,multiplyNumber) => {
        let parts = price.split(" ");
        let amount = parseFloat(parts[1].replace(/,/g, ''));
        let multipliedAmount = amount * multiplyNumber ;
        let result = `Rs ${multipliedAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        return result
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
        <div className="mx-72 my-12">
            <div className="bg-black text-white flex px-2 py-0.5 text-center rounded">
                <h1 className="basis-3/5">Product</h1>
                <h1 className="basis-1/5">Quantity</h1>
                <h1 className="basis-1/5">Subtotal</h1>
            </div>
            {cartItems?.map((item,index) => {
                return (
                    <div className="flex">
                        <div className="basis-3/5 flex">
                            <img src={item.imgURL} className="w-24 h-24 my-1 mx-2"></img>
                            <div className="flex-col justify-center my-4">
                                <div className="flex">
                                    <h2>{item.title}</h2>
                                    <h3 className="ml-1">({item.categorySelected})</h3>   
                                </div>
                                <h3>{item.price}</h3>
                                <p className="text-red-600 hover:cursor-pointer"
                                onClick={() => handleRemoveClick(index)}
                                >Remove</p>
                            </div>
                        </div>
                        <div className="basis-1/5">
                            <input 
                            type="number" 
                            value ={item.numberOfItems}
                            className="border border-black flex items-center my-8 w-10 px-1"
                            name="numberOfItems"
                            onChange={(e) => handleChange(e,item.id)}
                            />
                        </div>
                        <div className="basis-1/5 my-8">{item.totalItemPrice}</div>
                    </div>
                ) 
            })
            }
            <div className="flex">
                <div className="basis-3/5"></div>
                <div className="basis-2/5 border-t-2 border-black">
                    <div className="mx-2 my-2 flex">
                        <h1 className="basis-1/2">Sub Total</h1>
                        <p className="basis-1/2">{subTotal}</p>
                    </div>
                    <div className="mx-2 my-2 flex">
                        <h1 className="basis-1/2">Tax</h1>
                        <p className="basis-1/2">{tax}</p>
                    </div>
                    <div className="mx-2 my-2 flex">
                        <h1 className="basis-1/2">Total</h1>
                        <p className="basis-1/2">{total}</p>
                    </div>
                    <div className="pt-6 flex justify-end mr-12">
                        <Link href={"/"} className="text-white bg-black  hover:bg-gray-700 px-12 py-2 rounded-3xl">
                            <span>
                                <input type="button" value="Place Order"></input>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartPage;