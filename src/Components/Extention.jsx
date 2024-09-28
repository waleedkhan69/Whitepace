import React, { Fragment } from 'react';
import pic from "../Image/exten.webp";
import { VscArrowSmallRight } from "react-icons/vsc";

const Extention = () => {
    return (
        <Fragment>
            <div className='h-auto lg:h-[80vh]  bg-white flex flex-col lg:flex-row justify-evenly items-center py-8'>

                {/* Text Content */}
                <div className='lg:w-[40%] w-[50%] h-auto  lg:text-start  flex flex-col gap-5 justify-between items-start  lg:items-start '>
                    <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold '>
                        Use as Extention
                    </h1>
                    <p className='font-medium text-black'>
                        Project Management Software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
                    </p>
                    <button className='flex rounded justify-center px-6 py-3 items-center bg-[#4F9CF9] text-white'>
                        Let's Go
                        <VscArrowSmallRight />
                    </button>
                </div>

                {/* Image Content */}
                <div className='flex justify-center overflow-hidden lg:w-[30%] w-[70%] h-[40vh] mt-8 lg:mt-0 rounded'>
                    <img src={pic} alt="Project Meeting" className='w-full hover:scale-110 cursor-pointer duration-500 h-full  rounded' />
                </div>

            </div>
        </Fragment>
    );
}

export default Extention;
