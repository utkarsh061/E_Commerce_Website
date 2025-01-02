import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
},{timestamps:true})

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = async function(){
    const token = jwt.sign(
        {
            id:this._id,
            fullName:this.fullName,
            username:this.username,
            email:this.email
        },
        process.env.JWT_KEY,
        {
            expiresIn:"1d"
        }
    )
    return token
}

export const User = mongoose.model("User",userSchema)