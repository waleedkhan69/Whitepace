import React, { Fragment } from 'react';
import pic from "../Image/custom.avif";
import { VscArrowSmallRight } from "react-icons/vsc";

const Customize = () => {
  return (
    <Fragment>
      <div className='h-auto lg:h-[70vh] mt-20  flex flex-col lg:flex-row justify-evenly items-center py-8'>
        
        

        
        <div className='flex justify-center overflow-hidden lg:w-[35%] w-[80%] h-[40vh] mt-8 lg:mt-0 rounded'>
          <img src={pic} alt="Project Meeting" className='w-full h-full object-contain rounded hover:scale-110 duration-500 ' />
        </div>
        <div className='lg:w-[40%] w-[50%] h-auto lg:text-start flex flex-col gap-5 justify-between items-center text-start  lg:items-start '>
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold text-black'>
            Customize it to your needs
          </h1>
          <p className='text-black'>
            Customize the app with plugins, custom theme and multipul text editor (Rich Text or Markup). or create your own script and plugin using the Extention with api
          </p>
          <button className='flex rounded justify-center px-5 lg:px-6 py-3 items-center bg-[#4F9CF9] text-white'>
            Let's Go
            <VscArrowSmallRight />
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Customize;
