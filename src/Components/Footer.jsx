import React, { Fragment } from 'react';
import { TbWorld } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <Fragment>
            <div className='flex flex-col md:flex-row bg-[rgb(3,54,113)] h-auto md:h-[20vh] items-center text-white justify-around py-6 md:py-0'>
                {/* Language Selector Section */}
                <div className='flex justify-center items-center gap-2 mb-4 md:mb-0'>
                    <div className='cursor-pointer'><TbWorld /></div>
                    <div><p>English</p></div>
                    <div className='cursor-pointer text-2xl'><RiArrowDropDownLine /></div>
                </div>
                
                {/* Links Section */}
                <div className='flex flex-col md:flex-row items-center gap-4 md:gap-7 mb-4 md:mb-0'>
                    <h1 className='hover:underline cursor-pointer'>Terms & Conditions</h1>
                    <h1 className='hover:underline cursor-pointer'>Security</h1>
                    <h1 className='hover:underline cursor-pointer'>Status</h1>
                    <h1 className='hover:underline cursor-pointer'>©2024 Whitepace LLC</h1>
                </div>
                
                {/* Social Media Section */}
                <div className='flex justify-center gap-6'>
                    <div className='cursor-pointer'><FaFacebookF /></div>
                    <div className='cursor-pointer'><FaTwitter /></div>
                    <div className='cursor-pointer'><FaLinkedinIn /></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Footer;
