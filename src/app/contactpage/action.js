"use server";
import connectDB from "../../../lib/db";
import Usermodel from "@/models/User";
const submitContact = async (data) =>{
    try {
        await connectDB();
        await Usermodel.create(data)

        // console.log(data);

        return {status : "OK" , message  : "message sent successfully"}
        
    } catch (error) {
        console.log(error);
        return {status : "ERROR" , message  : "message not sent successfully"}
    }
}

export default submitContact;