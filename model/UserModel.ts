import mongoose from "mongoose";

interface User{
    name:string,
    email:string,
    password:string,
    phoneNumber:number,
    amount:number,
    Address:string,
    profileImage:string,
    shopImage:string,
    balance:number,
    message:{}[],
    isAdmin:boolean,
    bottleWater:{}[],
    pureWater:{}[],
    Totalprice:number,
    TotalSumOfTheDay:number,
    Records:{}[],
    status:boolean,
    history:{}[],
    Product:{}[],
}
interface Iuser extends User,mongoose.Document{}
const userSchema =new mongoose.Schema({
   name:{
    type:String,
    required:[true,"please enter your name"]
   },
   profileImage:{
    type:String,

   },
   shopImage:{
    type:String,
   },
   email:{
    type:String,
    required:[true,"please enter your email"],
    unique:true,
    lowercase:true,
    trim:true
   },
   password:{
    type:String,
    required:[true,"please enter your password"],
    unique:true,
   },
   phoneNumber:{
    type:Number,
    required:[true,"please enter your phoneNumber"]
   },
   amount:{
    type:Number,
   },
   Address:{
    type:String,
    required:[true,"please enter your Address"]
   },
   bottleWater:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"bottleWater"
   }],
   pureWater:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"purewater"

   }],
   
   pureWaterQty:{
    type:Number,
    // required:[true,"please enter your pureWaterQty"]
   },
   pureWaterAmount:{
    type:Number,
    // required:[true,"please enter your pureWaterQty"]
   },
   Totalprice:{
    type:Number,
    // required:[true,"please enter your pureWaterQty"]
   },
   balance:{
    type:Number,
    // required:[true,"please enter your pureWaterQty"]
   },
   TotalSumOfTheDay:{
    type:Number,
    // required:[true,"please enter your pureWaterQty"]
   },
   isAdmin:{
    type:Boolean,
    default :false,
   },
   status:{
    type:Boolean,
    default :true,
   },
   message:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"message"
    }
   ],
   history:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"history"
    }
   ],
   product:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    }
   ],
   Records:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"records"
    }
   ],
},{timestamps:true})
const userModel = mongoose.model<Iuser>("userModel",userSchema)
export default userModel