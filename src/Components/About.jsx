import React, { Fragment } from 'react';
import pic from "../Image/projectmeeting.avif";
import { VscArrowSmallRight } from "react-icons/vsc";

const About = () => {
  return (
    <Fragment>
      <div className='h-auto lg:h-[80vh] mt-20 bg-[#043873] flex flex-col lg:flex-row justify-evenly items-center py-8'>
        
        {/* Text Content */}
        <div className='lg:w-[40%] w-[50%] h-auto lg:text-start flex flex-col gap-5 justify-between items-center text-start  lg:items-start '>
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold text-white'>
            Get More Done with Whitepace
          </h1>
          <p className='text-white'>
            Project Management Software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>
          <button className='flex rounded justify-center px-5 lg:px-6 py-3 items-center bg-[#4F9CF9] text-white'>
            Try Whitepace free
            <VscArrowSmallRight />
          </button>
        </div>

        {/* Image Content */}
        <div className='flex justify-center lg:w-[30%] w-[80%] h-[40vh] mt-8 lg:mt-0 rounded'>
          <img src={pic} alt="Project Meeting" className='w-full h-full object-contain ' />
        </div>

      </div>
    </Fragment>
  );
}

export default About;
