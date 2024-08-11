import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";

const placeOrder = asyncHandler(async (req,res) => {
    const { orders } = req.body  //expecting orders in an array

    if(orders?.length == 0  ){
        throw new ApiError(400,"Order Details Not found")
    }

    orders?.map((item) => {
        if(!(item?.productCode && item?.quantity && item?.orderPrice && item?.category && item?.deliveryAddress)){
            throw new ApiError(500,"All Mandatory Fields are not present")
        }
    })

     for(let i=0;i<orders?.length;i++){
        try {
            await Order.create({
                productCode:orders[i]?.productCode,
                title:orders[i]?.title,
                orderPrice:orders[i]?.orderPrice,
                quantity:orders[i]?.quantity,
                category:orders[i]?.category,
                deliveryAddress:orders[i]?.deliveryAddress._id,
                deliveryStatus:"Order Placed",
                user:req.user._id
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

export { placeOrder }