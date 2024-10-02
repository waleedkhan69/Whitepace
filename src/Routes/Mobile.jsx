import React, { Fragment } from 'react';
import pic1 from '../Image/mob1.avif';
import pic2 from '../Image/mob2.avif';
import pic3 from '../Image/mob3.avif';

const Mobile = () => {
  const mobiledata = [
    { image: pic1, Title: 'iPhone 15', Price: 1120, des: 'This is an iPhone 15, which is more expensive compared to other mobiles.' },
    { image: pic2, Title: 'iPhone 15', Price: 1120, des: 'This is an iPhone 15, which is more expensive compared to other mobiles.' },
    { image: pic3, Title: 'iPhone 15', Price: 1120, des: 'This is an iPhone 15, which is more expensive compared to other mobiles.' }
  ];

  return (
    <Fragment>
      <h1 className="font-bold text-center text-4xl md:text-5xl my-6 md:my-10">Mobile Store</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {mobiledata.map((item, index) => {
          return (
            <div key={index} className="shadow-xl w-full sm:w-[45%] lg:w-[25%] min-h-[60vh] p-6 flex flex-col justify-between items-center bg-white rounded-lg">
              <div className="h-40 w-40 mb-4">
                <img src={item.image} alt={item.Title} className="h-full w-full object-cover rounded-lg" />
              </div>
              <h1 className="font-semibold text-lg mb-2">Title: {item.Title}</h1>
              <h1 className="font-semibold text-lg mb-2">Price: ${item.Price}</h1>
              <p className="text-gray-600 mb-6 text-center">{item.des}</p>
              <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
                Buy Now
              </button>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Mobile;
