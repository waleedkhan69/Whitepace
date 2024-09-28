import React, { Fragment } from 'react';
import pic from "../Image/project.webp";
import { VscArrowSmallRight } from "react-icons/vsc";

const ProjectManage = () => {
    return (
        <Fragment>
            <div className='h-auto lg:h-[80vh]  bg-white flex flex-col lg:flex-row justify-evenly items-center py-8'>

                {/* Text Content */}
                <div className='lg:w-[40%] w-[50%] h-auto  lg:text-start  flex flex-col gap-5 justify-between items-start  lg:items-start '>
                    <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold '>
                        Project Management
                    </h1>
                    <p className='font-medium text-black'>
                        Image , vedio.PDF and audio file are supported craet math experiance and diagrame directly from the app. Take photo with the mobile app. Take photo with mobile app and save the to note
                    </p>
                    <button className='flex rounded justify-center px-6 py-3 items-center bg-[#4F9CF9] text-white'>
                        Get Free
                        <VscArrowSmallRight />
                    </button>
                </div>

                
                <div className='flex justify-center overflow-hidden lg:w-[30%] w-[70%] h-[40vh] mt-8 lg:mt-0 rounded'>
                    <img src={pic} alt="Project Meeting" className='w-full hover:scale-110 cursor-pointer duration-500 h-full  rounded' />
                </div>

            </div>
        </Fragment>
    );
}

export default ProjectManage;
