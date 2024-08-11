import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    addressLine1:{
        type: String,
        required:true
    },
    addressLine2:{
        type: String,
    },
    city:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    pinCode:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{ timestamps:true })

export const Address = mongoose.model("Address",addressSchema)