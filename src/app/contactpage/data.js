"use server";
import connectDB from "@/lib/db";
import Usermodel from "@/models/User";
const submitData = async (data) =>{
    try {
        await connectDB();

        await Usermodel.create(data);

        return{ status : "OK", message : "sent"}
    } catch (error) {
        return{ status : "ERROR", message : "not sent"}
    }
}

export default submitData;