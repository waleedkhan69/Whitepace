import React, { Fragment } from 'react'
import pic1 from "../Image/apple.jpeg"
import pic2 from "../Image/microsoft.jpeg"
import pic3 from "../Image/slack.jpeg"
import pic4 from "../Image/google.jpeg"

const Sponser = () => {
  return (
    <Fragment>
      <div className='flex justify-center items-center '>
        <h1 className='font-bold text-3xl md:text-5xl'>Our Sponsors</h1>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap justify-center md:justify-evenly mt-6 items-center gap-4'>
        <div className='h-16 w-28 md:h-20 md:w-32'>
          <img src={pic1} alt="Apple" className='w-full h-full' />
        </div>
        <div className='h-16 w-28 md:h-28 md:w-32'>
          <img src={pic2} alt="Microsoft" className='w-full h-full' />
        </div>
        <div className='h-16 w-28 md:h-28 md:w-32'>
          <img src={pic3} alt="Slack" className='w-full h-full' />
        </div>
        <div className='h-16 w-28 md:h-28 md:w-32'>
          <img src={pic4} alt="Google" className='w-full h-full' />
        </div>
      </div>
    </Fragment>
  )
}

export default Sponser;
