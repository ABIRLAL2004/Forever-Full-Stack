// import express from "express";
// import connectDB from "./config/mongodb.js";
// import dotenv from "dotenv";
// import connectCloudinary from './config/Cloudinary.js';
// import userRouter from './routes/userRoute.js';
// import productRouter from "./routes/productRoute.js";
// import mongoose from "mongoose";
// import cors from "cors";   // ✅ import at the top
// import cartRouter from './routes/cartRoute.js'
// import orderRouter from "./routes/orderRoute.js";


// dotenv.config();

// // App Config
// const app = express();
// app.use(express.json());

// // Enable CORS ✅ (place this before routes)
// app.use(cors());

// const PORT = process.env.PORT || 4000;

// // connect database
// connectDB();
// connectCloudinary();

// // API endpoints
// app.use('/api/user', userRouter);
// app.use('/api/product', productRouter);
// app.use('/api/cart', cartRouter);
// app.use('/api/order', orderRouter)


// app.get('/', (req, res) => {
//   res.send("API Working");
// });
// app.get('/',(req,res)=>{
//   res.send({
//     activeStatus:true,
//     error:false,
//   })
// })

// app.listen(PORT, () => {
//   console.log(`🚀 Server started on PORT : ${PORT}`);
// });
 





import express from "express";
import connectDB from "./config/mongodb.js";
import dotenv from "dotenv";
import connectCloudinary from "./config/Cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import mongoose from "mongoose";
import cors from "cors";

// Load environment variables
dotenv.config();

// App Config
const app = express();
app.use(express.json());
app.use(cors());

// Define PORT (✅ Fix for Render)
const PORT = process.env.PORT || 4000;

// Connect to database and Cloudinary
connectDB();
connectCloudinary();

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Root route
app.get("/", (req, res) => {
  res.send({
    message: "✅ API Working",
    activeStatus: true,
    error: false,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server started on PORT: ${PORT}`);
});
