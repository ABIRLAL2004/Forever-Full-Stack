// // import React, { useContext } from 'react'
// // import { ShopContext } from '../Context/ShopContext'
// // import Title from './Title';

// // const CartTotal = () => {

// //     const {currency,delivery_fee,getCartAmount}= useContext(ShopContext);


// //   return (
// //     <div className='w-full'>
// //         <div className='text-2xl'>
// //             <Title text1={'CART'} text2={'TOTALS'} />
// //         </div>
// //       <div className='flex flex-col gap-2 mt-2 text-sm'>
// //     <div className='flex justify-between'>
// //         <p>Subtotal</p>
// //         <p>{currency}{getCartAmount()}.00</p>
// //     </div>
// //     <hr />
// //     <div className='flex justify-between'>
// //         <p>Shiping Fee</p>
// //         <p>{currency} {delivery_fee}</p>
// //     </div>
// //     <hr />
// //     <div className='flex justify-between'>
// //         <b>Total</b>
// //         <b>{currency}{getCartAmount()===0 ? 0 : getCartAmount()+delivery_fee}</b>
// //     </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default CartTotal

// import React, { useContext } from 'react'
// import { ShopContext } from '../Context/ShopContext'
// import Title from './Title';
// import { useNavigate } from 'react-router-dom';

// const CartTotal = () => {
//   const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const subtotal = getCartAmount();
//   const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

//   return (
//     <div className='w-full'>
//       <div className='text-2xl mb-4'>
//         <Title text1={'CART'} text2={'TOTALS'} />
//       </div>

//       {/* Totals Section */}
//       <div className='flex flex-col gap-2 text-sm mb-4'>
//         <div className='flex justify-between'>
//           <p>Subtotal</p>
//           <p>{currency}{subtotal}.00</p>
//         </div>
//         <hr />
//         <div className='flex justify-between'>
//           <p>Shipping Fee</p>
//           <p>{currency}{delivery_fee}</p>
//         </div>
//         <hr />
//         <div className='flex justify-between'>
//           <b>Total</b>
//           <b>{currency}{total}</b>
//         </div>
//       </div>

//       {/* Checkout Button */}
//       <button
//         className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
//         onClick={() => navigate('/checkout')}
//       >
//         Proceed to Checkout
//       </button>
//     </div>
//   )
// }

// export default CartTotal;

import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className='w-full'>
      <div className='text-2xl mb-4'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      {/* Totals Section */}
      <div className='flex flex-col gap-2 text-sm mb-4'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{subtotal}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency}{total}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal;
