import mongoose from "mongoose";


export const connectdb=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        "dbname":"portfolio",

    }).then(()=>console.log("Database Connect"))
    .catch((e)=>console.log(e))

}
