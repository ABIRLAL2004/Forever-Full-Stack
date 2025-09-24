// import userModel from "../models/usermodel.js"

// // add products to user cart

// const addToCart = async (req, res) => {
//     try {

//         const { userId, itemId, size } = req.body

//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData;

//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1
//             }
//             else {
//                 cartData[itemId][size] = 1
//             }
//         } else {
//             cartData[itemId] = {}
//             cartData[itemId]
//             [size] = 1
//         }
//         await userModel.findByIdAndUpdate(userId, { cartData })
//         res.json({ success: true, message: "Added To Cart" })
//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error })
//     }
// }
// // update user cart
// const UpdateCart = async (req, res) => {
//     try {

//         const { userId, itemId, size, quantity } = req.body
//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData;

//         cartData[itemId][size] = quantity

//         await userModel.findByIdAndUpdate(userId, { cartData })
//         res.json({ success: true, message: "Cart Updated" })

//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }
// // get ser cart

// const getUserCart = async (req, res) => {
//     try {

//         const { userId } = req.body
//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData;

//         res.json({ success: true, cartData })
//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })

//     }

// }

// export { addToCart, UpdateCart, getUserCart }


import userModel from "../models/usermodel.js";

// Add product to user cart
const addToCart = async (req, res) => {
    try {
        const { itemId, size } = req.body; // ✅ only itemId & size come from body
        const userId = req.userId;         // ✅ userId comes from auth middleware

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Added To Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Update user cart
const UpdateCart = async (req, res) => {
    try {
        const { itemId, size, quantity } = req.body; // ✅ only these from body
        const userId = req.userId;                  // ✅ from auth middleware

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData;

        if (cartData[itemId]) {
            cartData[itemId][size] = quantity;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Cart Updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Get user cart
const getUserCart = async (req, res) => {
    try {
        const userId = req.userId; // ✅ from auth middleware

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({ success: true, cartData: userData.cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addToCart, UpdateCart, getUserCart };
