import React, { Fragment } from 'react'
import { VscArrowSmallRight } from "react-icons/vsc";
import { FaApple } from "react-icons/fa";
import { IoLogoWindows } from "react-icons/io5";
import { BsAndroid2 } from "react-icons/bs";




const Bottompace = () => {
    return (
        <Fragment>
            <div className='h-[70vh] bg-[rgb(3,54,113)] items-center flex justify-center'>
                <div className='flex justify-center flex-col gap-3  text-white items-center'>
                    <h1 className='text-3xl font-semibold'>Try whitepace Today</h1>
                    <p className='text-2xl font-semibold'>Get started For free </p>
                    <p>Add your whole teams as your needs grow</p>
                    <button className='flex  rounded justify-center px-6 py-3 items-center bg-[#4F9CF9] text-white'>
                        Try Whitepace free
                        <VscArrowSmallRight />
                    </button>
                    <p>On a big team? contact Sale</p>
                    <div className='flex justify-evenly gap-8 items-center  text-white'>
                        <div className='text-5xl cursor-pointer'><FaApple /></div>

                        <div className='text-5xl cursor-pointer'><IoLogoWindows /></div>
                        
                        <div className='text-5xl cursor-pointer'><BsAndroid2 />
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Bottompace