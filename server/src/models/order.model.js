import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    productCode:{
        type:String,
        required:true,
    },
    title:{
        type:String 
    },
    orderPrice:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    deliveryAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address",
    },
    deliveryStatus:{
        type:String,
        enum:["Order Placed","Order in Shippment","Order Delievered"],
        default:"Order Placed"
    }
},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)