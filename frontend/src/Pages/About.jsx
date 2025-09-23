import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>

        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At FOREVER, we’re more than just an e-commerce platform — we’re a team driven by innovation, passion, and a vision to transform the way people shop online. Our journey started with a simple idea: to create a space where quality products, seamless technology, and customer satisfaction come together. Every feature we build is designed to make your shopping experience smarter, faster, and more personal.</p>
          <p>We’re not here to just sell products; we’re here to build trust. By combining curated collections, secure payments, and responsive service, we ensure that every step of your journey with us feels smooth and reliable. Our commitment is simple — to make online shopping less about transactions and more about creating delightful experiences.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our commitment goes beyond just delivering products; we’re here to deliver value. Every decision we make, from product selection to customer service, is guided by our promise to put people first. By combining innovation with integrity, we aim to build an e-commerce platform that doesn’t just meet expectations but consistently exceeds them.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>“Every product is handpicked and verified for authenticity.
            Because quality isn’t just our standard — it’s our promise.”</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>“Shopping made effortless and hassle-free.
            From browse to checkout, everything is just a click away.”</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>“We’re here to listen, help, and resolve every concern.
            Because your satisfaction is our top priority.”</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
