import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "../../styles.css"; // If you have any custom styles
import { EffectCoverflow } from 'swiper/modules';
import { testimonyItems } from '../../data';
import { Quote } from 'lucide-react';

export const Testimonies = () => {
    return (
        <div className="w-full p-8 h-max py-10 bg-[#F36600]">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow]}
                className="mySwiper"
            >
                {testimonyItems.map((item, idx) => (
                    <SwiperSlide key={idx} className="bg-[#C6E9FF] p-4 rounded-lg flex flex-col justify-between">
                        <Quote color="#F36600" fill="#F36600" size={40} />
                        <h4 className='font-bold md:text-lg text-md'>{item.quote}</h4>
                        <div className="flex items-center gap-3">
                            <div className="w-20 h-20 rounded-lg overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.author}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className='gap-x-2'>
                                <p className='font-medium'>{item.author}</p>
                                <p>{item.position}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
