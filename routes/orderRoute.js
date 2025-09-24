import express from 'express'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, userOrders, updateStatus, allOrders } 
from '../controllers/orderController.js'

import adminAuth from '../middleware/adminauth.js'
import authUser from '../middleware/auth.js'

// Admin Features
const orderRouter = express.Router()
orderRouter.post('/list', adminAuth,allOrders)
orderRouter.post('/status', adminAuth, updateStatus)


// Payment Feature
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

// User Feature
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter;
