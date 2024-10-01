import React, { Fragment } from 'react';
import { TbArrowBadgeUp } from "react-icons/tb";
import { VscArrowSmallRight } from "react-icons/vsc";

const Bottom = () => {
  const bottomdata = [
    { title: "Products", p1: "Overview", p2: "Pricing", p3: "Customer Stories" },
    { title: "Resources", p1: "Overview", p2: "Pricing", p3: "Customer Stories" },
    { title: "Company", p1: "Overview", p2: "Pricing", p3: "Customer Stories" },
  ];

  return (
    <Fragment>
      <div className='flex flex-col md:flex-col lg:flex-row items-start justify-evenly h-auto text-white bg-[rgb(3,54,113)] p-6'>
        {/* Logo and Description */}
        <div className='w-full lg:w-[20%] p-4'>
          <h1 className='flex items-center justify-start text-2xl font-semibold'>
            <TbArrowBadgeUp className='text-5xl' />
            Whitepace
          </h1>
          <p className='text-sm md:text-base mt-2'>
            Whitepace was created for the new way to live and work. We make a better workspace around the world.
          </p>
        </div>

        {/* Links Section */}
        <div className='flex flex-col md:flex-row lg:flex-row lg:w-[50%] justify-evenly w-full'>
          {bottomdata.map((item, index) => (
            <div key={index} className='flex flex-col items-start mb-4 md:mb-0'>
              <h1 className='font-semibold hover:underline cursor-pointer text-lg md:text-xl'>
                {item.title}
              </h1>
              <p className='text-sm md:text-base'>{item.p1}</p>
              <p className='text-sm md:text-base'>{item.p2}</p>
              <p className='text-sm md:text-base'>{item.p3}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='w-full lg:w-[20%] text-center lg:text-left'>
          <h1 className='text-2xl font-semibold'>
            Try it <br /> Today
          </h1>
          <p className='text-sm md:text-base mt-2'>
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className='flex rounded justify-center items-center px-4 py-2 md:px-6 md:py-3 mt-4 bg-[#4F9CF9] text-sm md:text-base'>
            Start Today
            <VscArrowSmallRight className='ml-1 text-lg md:text-xl' />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Bottom;
