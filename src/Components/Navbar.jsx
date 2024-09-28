import React, { Fragment } from 'react';
import { TbArrowBadgeUp } from "react-icons/tb";
import { VscArrowSmallRight } from "react-icons/vsc";
import { MdMenu, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleChange = () => {
        setNav(!nav);
    };

    const navArray = [
        { title: "Product" },
        { title: "Solution" },
        { title: "Resources" },
        { title: "Pricing" },
    ];

    return (
        <Fragment>
            {/* Navbar Container */}
            <nav className='flex justify-between fixed z-10 top-0 shadow-lg w-full items-center p-4 text-white bg-[#043873]'>
                <div className='flex items-center text-3xl'>
                    <TbArrowBadgeUp className='text-5xl' />
                    WhitePace
                </div>
                
                {/* Desktop View: Login and Try Buttons */}
                <div className='hidden lg:flex justify-center gap-8 items-center'>
                    <Link to={"/Login"}>
                        <button className='rounded px-6 py-3 bg-[#FFE492] text-blue-700'>Login</button>
                    </Link>
                    <div>
                        <button className='flex rounded justify-center px-6 py-3 items-center bg-[#4F9CF9]'>
                            Try Whitepace free
                            <VscArrowSmallRight />
                        </button>
                    </div>
                    <div className='b'> {/* This hides the menu icon on lg and larger screens */}
                        <MdMenu onClick={handleChange} className='text-5xl cursor-pointer' />
                    </div>
                </div>

                {/* Menu Icon for Mobile/Tablet */}
                <div className='lg:hidden'>
                    <MdMenu onClick={handleChange} className='text-5xl cursor-pointer' />
                </div>

                {/* Sidebar for Mobile/Tablet */}
                <div
                    className={`fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg text-blue-800 transform transition-transform duration-300 ease-in-out ${nav ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className='p-6'>
                        <button onClick={handleChange} className='text-2xl'>X</button>
                        <div className='mt-6 space-y-8'>
                            {/* Navigation Items */}
                            {navArray.map((item, index) => (
                                <div key={index} className='flex justify-between items-center px-4 py-2 rounded shadow'>
                                    <p>{item.title}</p>
                                    <MdKeyboardArrowDown />
                                </div>
                            ))}
                            {/* Login and Try Buttons for Mobile/Tablet Only */}
                            <div className='mt-8 space-y-4 lg:hidden'>
                                <Link to={"/Login"}>
                                    <button className='w-full rounded px-6 py-3 bg-[#FFE492] text-blue-700'>Login</button>
                                </Link>
                                <button className='flex w-full rounded justify-center px-6 py-3 items-center bg-[#4F9CF9] text-white'>
                                    Try Whitepace free
                                    <VscArrowSmallRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
