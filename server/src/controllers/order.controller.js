import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { Order } from "../models/order.model.js";
import mongoose from "mongoose";

const placeOrder = asyncHandler(async (req,res) => {
    const {orders,deliveryAddress} = req.body  //expecting orders in an array

    if(orders?.length == 0  ){
        throw new ApiError(400,"Order Details Not found")
    }

    orders?.map((item) => {
        if(!(item?.productCode && item?.quantity && item?.price && item?.categorySelected && deliveryAddress.length != 0)){
            throw new ApiError(500,"All Mandatory Fields are not present")
        }
    })

     for(let i=0;i<orders?.length;i++){
        try {
            await Order.create({
                productCode:orders[i]?.productCode,
                title:orders[i]?.title,
                orderPrice:orders[i]?.price,
                quantity:orders[i]?.quantity,
                category:orders[i]?.categorySelected,
                deliveryAddress:deliveryAddress._id,
                deliveryStatus:"Order Placed",
                userId:req.user._id
             })
        } catch (error) {
            throw new ApiError(500,`Internal server Error !! Error While Placing ${orders[i].title}`)
        }
     }

    res.status(200).json(
        new ApiResponse(
            200,
            {},
            "Order Placed Successfully"
        )
    )
})

const orderHistory = asyncHandler(async (req,res) => {
    const orders = await Order.aggregate([
        {
            $match:{
                userId:new mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $project:{
                title:1,
                orderPrice:1,
                quantity:1,
                category:1
            }
        }
    ])

    res.status(200).json(
        new ApiResponse(
            200,
            orders,
            "Order History Fetched Successfully"
        )
    )
})

export { placeOrder,orderHistory }