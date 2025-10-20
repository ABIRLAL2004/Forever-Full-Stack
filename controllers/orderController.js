import { response } from "express";
import orderModel from "../models/oderModel.js";
import userModel from "../models/usermodel.js";

// Place order using COD
// export const placeOrder = async (req, res) => {
//     try {
//         const { items, amount, address } = req.body;


//         const orderData = {
//             userId,
//             items,
//             address,
//             amount,
//             paymentMethod: "COD",
//             payment: false,
//             date: Date.now()
//         };
//         console.log("userId",userId);

//         console.log("req.body:", req.body);
//         console.log("1");

//         const newOrder = new orderModel(orderData);
//         await newOrder.save();
// console.log("2");

//         await userModel.findByIdAndUpdate(userId, { cartData: {} });
// console.log("3");

//         res.json({ success: true, message: "Order Placed" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };
export const placeOrder = async (req, res) => {
  try {
    // destructure userId from body
    const { items, amount, address } = req.body;
    const userId = items[0]._id
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    // console.log("this is userId from items",items[0]._id);

    // console.log("userId:", userId);
    // console.log("req.body:", req.body);

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// Placing order using Stripe
export const placeOrderStripe = async (req, res) => { };

// Placing order using Razorpay
export const placeOrderRazorpay = async (req, res) => { };

// All Orders Data for Admin Panel


export const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({})
    res.json({ success: true, orders })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }
};



// User Order Data For Frontend
export const userOrders = async (req, res) => {

  try {
    const { userId } = req.body

    const orders = await orderModel.find({ userId })
    response.json({ success: true, orders })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });

  }
}


// Update order Status for admin panel
export const updateStatus = async (req, res) => { };
