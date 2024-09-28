import React, { Fragment } from 'react';
import { VscArrowSmallRight } from "react-icons/vsc";

const Everywherepage = () => {
  return (
    <Fragment>
      <div className='h-[70vh] p-4 bg-blue-900 flex flex-col justify-center items-center text-white md:flex-row md:justify-start md:items-center'>
        <div className='w-full md:w-1/2 flex flex-col gap-4 justify-between p-4'>
          <h1 className='text-3xl md:text-4xl font-semibold text-center md:text-left'>Your work, everywhere you are</h1>
          <p className='text-center md:text-left'>
            Access your notes from your computer, phone, or tablet by synchronizing with various services, including Whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
          </p>
          
          <div className='flex justify-center md:justify-start'>
            <button className='flex rounded justify-center px-5 lg:px-6 py-3 items-center bg-[#4F9CF9] text-white hover:bg-[#3B7CC8] transition duration-300'>
              Try Taskey
              <VscArrowSmallRight className='ml-2' />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Everywherepage;
