/* eslint-disable no-undef */
const mongoose=require("mongoose")
const headphoneSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
    },
    password:String
})



const HeadphoneModel=mongoose.model("employees",headphoneSchema)
module.exports=HeadphoneModel;