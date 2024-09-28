import React, { Fragment } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';
import 'swiper/css';
// import 'swiper/css/pagination';

const Cardplan = () => {
    const cardarry = [
        {
            Title: "Free",
            price: "$0",
            des: "Capture ideas and find them quickly",
            list: [
                "Sync unlimited devices",
                "10 GB monthly upload",
                "200 MB max note size",
                "Custom Home dashboard and extras",
                "Connect primarily Google Calendar account",
                "Add due date reminders and notifications to your tasks"
            ]
        },
        {
            Title: "Personal",
            price: "$11.99",
            des: "Keep home and family on track",
            list: [
                "Sync unlimited devices",
                "10 GB monthly upload",
                "200 MB max note size",
                "Custom Home dashboard and extras",
                "Connect primarily Google Calendar account",
                "Add due date reminders and notifications to your tasks"
            ]
        },
        {
            Title: "Organization",
            price: "$49.99",
            des: "Capture ideas and find them quickly",
            list: [
                "Sync unlimited devices",
                "10 GB monthly upload",
                "200 MB max note size",
                "Custom Home dashboard and extras",
                "Connect primarily Google Calendar account",
                "Add due date reminders and notifications to your tasks"
            ]
        },
    ];

    return (
        <Fragment>
            <div className="text-center p-5">
                <h1 className="text-5xl font-semibold mb-4">Choose Plan</h1>
                <p>Whether you want to organize, keep your personal life on track, or boost workplace productivity, Evernote has the right plan <br /> for you.</p>
            </div>

            
            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }} 
                // modules={[Pagination]} 
                breakpoints={{
                    640: {
                        slidesPerView: 1, 
                        centeredSlides: true,
                    },
                    768: {
                        slidesPerView: 1, 
                        centeredSlides: true, 
                    },
                    1024: {
                        slidesPerView: 3, 
                    },
                }}
                className="p-5"
            >
                {cardarry.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="group bg-white cursor-pointer hover:bg-blue-500 hover:text-white hover:scale-y-105 duration-500 shadow-lg flex flex-col justify-between items-start py-6 px-3 gap-3 border-yellow-400 border-[3px] rounded-lg m-auto h-auto max-w-xs md:max-w-sm lg:max-w-md">
                            <div className="flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold mb-2">{item.Title}</h2>
                                <p className="text-xl mb-4">{item.price}</p>
                                <p className="text-gray-600 mb-4 group-hover:text-white">{item.des}</p>
                                <div className="list-disc list-inside space-y-2">
                                    {item.list.map((listItem, i) => (
                                        <p key={i} className="flex items-center justify-start gap-2">
                                            <IoMdCheckmarkCircleOutline />
                                            {listItem}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center items-center mt-4 w-full">
                                <button className="px-8 py-2 rounded bg-blue-500 text-white transition duration-300 ease-in-out transform group-hover:bg-white group-hover:text-blue-500 group-hover:scale-105">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Fragment>
    );
};

export default Cardplan;
