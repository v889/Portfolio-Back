import {Contact} from "../models/contact.js";
import { sendmail } from "../utils/sendmail.js";
 export const newcontact=async(req,res,next)=>{
    try{
        const {name,email,message}=req.body;
        await Contact.create({
            name,
            email,
            message
    });
    sendmail(email,name);
    res.status(201).json({
        sucess:true,
        message:"Your Message sent sucessfully"
    });


    }
    catch(error){
        next(error);
    }

 };