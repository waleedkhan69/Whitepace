import React from "react";
import pic1 from "../Image/man1.avif";
import pic2 from "../Image/man2.webp";
import pic3 from "../Image/man3.avif";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

const Crousalcard = () => {
  const Crousaldata = [
    {
      para: "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
      imge: pic1,
      title: "Oberon Shaw MCH",
      des: "Head of Talent Acquisition, North America",
    },
    {
      para: "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
      imge: pic2,
      title: "Oberon Shaw MCH",
      des: "Head of Talent Acquisition, North America",
    },
    {
      para: "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
      imge: pic3,
      title: "Oberon Shaw MCH",
      des: "Head of Talent Acquisition, North America",
    },
  ];

  return (
    <>
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-5xl text-black font-bold">What Your Clients Say</h1>
      </div>
      <Swiper
        slidesPerView={1.2} 
        centeredSlides={true}
        spaceBetween={30}
        breakpoints={{
          // Breakpoints for different screen sizes
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {Crousaldata.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-auto w-full md:w-[70%] lg:w-[40%] rounded bg-blue-300 mx-auto p-6 md:p-8"> {/* Adjusted padding for larger screens */}
              <div className="flex flex-col p-5">
                <h1 className="text-white text-3xl md:text-5xl p-3">
                  <FaQuoteLeft />
                </h1>
                <p className="text-white text-lg md:text-2xl">{item.para}</p>
              </div>
              <div className="text-center flex justify-center">
                <hr className="w-[80%]" />
              </div>
              <div className="flex justify-center items-end h-32 p-4 gap-3">
                <div className="h-16 w-16 md:h-20 md:w-20">
                  <img
                    src={item.imge}
                    alt=""
                    className="w-full object-cover rounded-full h-full"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg md:text-2xl">{item.title}</p>
                  <p className="text-white text-sm md:text-base">{item.des}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Crousalcard;
