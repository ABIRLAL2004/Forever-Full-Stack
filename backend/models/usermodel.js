import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: { type: String, requied: true },
    email: { type: String, requied: true, using: true },
    password: { type: String, requied: true },
    cartData: { type: Object, default: {} }

}, { minimize: false })

const userModel = mongoose.models.user || mongoose.model('user', usersSchema);

export default userModel;

