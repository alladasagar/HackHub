import mongoose from "mongoose";

const dealerSchema = new mongoose.Schema({
    id: { type: String,required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    comapny: { type: String, required: true },
    phone:{type:String,required:true},
})

const Dealer = mongoose.models.Dealer || mongoose.model("Dealer", dealerSchema);