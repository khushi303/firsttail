import React from 'react';
import Whitelayer2 from '../assets/images/png/whitelayer2.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlueHouse from '../assets/images/png/bluehouse.png';
import Flowerpot from '../assets/images/png/flowerpot1.png';
import Paintbrushimg from '../assets/images/png/paintbrushimg.png';
import Gallerylayer from '../assets/images/png/galllayer.png';

const Interior = () => {
    const settings = {
        dots: false,
        centerMode: true,
        centerPadding: "0",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: false,
                }
            }
        ]
    };
    return (
        <div className='bg-gradient-to-b from-slate-900 to-fuchsia-600 relative md:pt-36 pt-12 lg:pb-40 xl:pb-48 sm:pb-40 pb-28'>
            <div className='absolute xl:top-[-140px] md:top-[-69px] top-[-42px] start-0 end-0'>
                <img src={Whitelayer2} alt="whitelaye2" className='w-full' />
            </div>
            <div className='absolute sm:bottom-[-5%] bottom-[-3%] left-0 right-0'>
                <img src={Gallerylayer} alt="Gallerylayer" className='w-full' />
            </div>
            <div data-aos="zoom-in-up" className='container mx-auto pb-14 sm:pt-24 pt-16 lg:px-20 sm:px-14 px-4'>
                <Slider {...settings} className='transition'>
                    <div className='lg:px-0 px-4'>
                        <div className='design-card text-start transition-transform lg:px-11 lg:py-6 p-6 bg-white border border-solid border-[#888] rounded-[15px]'>
                            <h3 className='ff-poppins text-[28px] font-bold leading-[150%] text-[#888] lg:mb-7 mb-4 text-start'>Exterior </h3>
                            <div className=''>
                                <img src={BlueHouse} alt="BlueHouse" className='w-full transition' />
                            </div>
                            <button className='py-3 px-7 bg-[#888] rounded-[100px] mt-7 ff-poppins text-[16px] font-bold text-white transition'>MORE</button>
                        </div>
                    </div>
                    <div className='lg:px-0 px-4'>
                        <div className='design-card text-start transition-transform lg:px-11 lg:py-6 p-6 bg-white border border-solid border-[#888] rounded-[15px]'>
                            <h3 className='ff-poppins text-[28px] font-bold leading-[150%] text-[#888] lg:mb-7 mb-4 text-start'>Interior</h3>
                            <div className='pb-7'>
                                <img src={Flowerpot} alt="Flowerpot" className='w-full transition' />
                            </div>
                            <button className='py-3 px-7 bg-[#888] rounded-[100px] ff-poppins text-[16px] font-bold text-white transition'>MORE</button>
                        </div>
                    </div>
                    <div className='lg:px-0 px-4'>
                        <div className='design-card text-start transition-transform lg:px-11 lg:py-6 p-6 bg-white border border-solid border-[#888] rounded-[15px]'>
                            <h3 className='ff-poppins text-[28px] font-bold leading-[150%] text-[#888] lg:mb-7 mb-4 text-start'>Interior</h3>
                            <div className='pb-7'>
                                <img src={Paintbrushimg} alt="Paintbrushimg" className='w-full transition' />
                            </div>
                            <button className='py-3 px-7 bg-[#888] rounded-[100px] ff-poppins text-[16px] font-bold text-white transition'>MORE</button>
                        </div>
                    </div>
                    <div className='lg:px-0 px-4'>
                        <div className='design-card text-start transition-transform lg:px-11 lg:py-6 p-6 bg-white border border-solid border-[#888] rounded-[15px]'>
                            <h3 className='ff-poppins text-[28px] font-bold leading-[150%] text-[#888] lg:mb-7 mb-4 text-start'>Exterior </h3>
                            <div className='pb-7'>
                                <img src={Flowerpot} alt="Flowerpot" className='w-full transition' />
                            </div>
                            <button className='py-3 px-7 bg-[#888] rounded-[100px] ff-poppins text-[16px] font-bold text-white transition'>MORE</button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Interior