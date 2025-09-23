import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32 ' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 '>Discover what everyone’s talking about! Our bestsellers aren’t just products – they’re customer favorites loved for their quality, style, and reliability. Each item has been carefully chosen and trusted by thousands, making them the perfect choice if you’re looking for something that combines value with excellence. Shop our top-rated collection today and experience why these picks never go out of demand.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivary</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>
                        GET IN TOUCH 
                    </p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-121-456-7890</li>
                        <li> Contact@foreveryou.com</li>
                    </ul>
                </div>
            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@forever.com -All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
