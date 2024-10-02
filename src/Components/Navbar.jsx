import React, { Fragment, useState } from 'react';
import { TbArrowBadgeUp } from "react-icons/tb";
import { VscArrowSmallRight } from "react-icons/vsc";
import { MdMenu, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null); // Track the active dropdown index

    const handleChange = () => {
        setNav(!nav);
    };

    const toggleDropdown = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Collapse if the same item is clicked
        } else {
            setActiveIndex(index); // Expand the clicked item
        }
    };

    const navArray = [
        {
            title: "Product", id: 1,
            productdetails: [{ p1: "Mobile", p2: "Tablet", p3: "Laptop" }]
        },
        {
            title: "Solution", id: 2,
            productdetails: [{ p1: "Earn Money", p2: "Sold Laptop", p3: "Get Money" }],
            // productdetails: [{ pa: "Earn Money", pb: "Sold Laptop", pc: "Get Money" }]
        },
        {
            title: "Resources", id: 3,
            productdetails: [{ p1: "Earn Money", p2: "Sold Laptop", p3: "Get Money" }]
        },
        {
            title: "Pricing", id: 4,
            productdetails: [{ p1: "$120 to $180", p2: "$200 to $300", p3: "$599 to $899" }]
        },
    ];

    return (
        <Fragment>

            <nav className='flex justify-between fixed z-10 top-0 shadow-lg w-full items-center p-4 text-white bg-[#043873]'>
                <div className='flex items-center text-3xl'>
                    <TbArrowBadgeUp className='text-5xl' />
                    WhitePace
                </div>


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
                    <div className='b'>
                        <MdMenu onClick={handleChange} className='text-5xl cursor-pointer' />
                    </div>
                </div>


                <div className='lg:hidden'>
                    <MdMenu onClick={handleChange} className='text-5xl cursor-pointer' />
                </div>

                <div
                    className={`fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg text-blue-800 transform transition-transform duration-300 ease-in-out ${nav ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className='p-6'>
                        <button onClick={handleChange} className='text-2xl'>x</button>
                        <div className='mt-6 space-y-8'>

                            {navArray.map((item, index) => (
                                <div key={index} className=''>
                                    <div
                                        className='flex justify-between items-center px-4 py-2 rounded shadow cursor-pointer'
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        <p>{item.title}</p>
                                        <MdKeyboardArrowDown />
                                    </div>

                                    {activeIndex === index && (
                                        <div className='pl-8 pt-2 '>
                                            <ul>
                                               <Link to={'/Mobile'}><li className='cursor-pointer p-2'>{item.productdetails[0].p1}</li></Link>
                                                <Link to={'/Tablet'}><li className='cursor-pointer p-2'>{item.productdetails[0].p2}</li></Link>
                                                 <Link to={'/laptop'}><li className='cursor-pointer p-2'>{item.productdetails[0].p3}</li></Link> 
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}

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
