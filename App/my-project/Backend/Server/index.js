/* eslint-disable no-undef */
 const express=require("express")
 const mongoose=require("mongoose")
//  const path=require("path")
 const cors=require("cors")
 const EmployeeModel=require("./Models/Headphone")
 const app=express();
 app.use(express.json()) //front-end to backend data

app.use(cors(
    {
        origin: ["http://127.0.0.1:5173/","https://mern-task-app.onrender.com"]
    }
))
app.use(express.urlencoded({extended:true}))
 mongoose.connect("mongodb://127.0.0.1:27017/headphone")

 app.get("/",(req,res)=>{
     res.send("hello")
 })
 app.post("/register",(req,res)=>{
     EmployeeModel.create(req.body)
     .then(employees=>res.json(employees))
     .catch(err=>res.json(err))
 })
  app.post("/login",(req,res)=>{
     const {email,password}=req.body;
     EmployeeModel.findOne({email:email})
     .then(user=>{
         if(user){
             if(user.password===password){
                 res.json("success")
             }else{
                 res.json("incorrect password")
             }
         }else{
             res.json("Wrong Email | No record")
         }
     })
 })


 app.listen(3008,()=>{
     console.log("server started")
 })

