import React from 'react';
import Livingroomimg from '../assets/images/png/livingroomimg.png';
import Kitchenimg from '../assets/images/png/kitchenimg.png';
import Workroomimg from '../assets/images/png/workroomimg.png';
import Washroomimg from '../assets/images/png/washroomimg.png';
import Bedroomimg from '../assets/images/png/bedroomimg1.png';
import Designlayer1 from '../assets/images/png/designlayer1.png';

const Gallery = () => {
    return (
        <div className='relative'>
            <div className='absolute bottom-0 left-0 right-0'>
                <img src={Designlayer1} alt="designlayer1" className='w-full' />
            </div>
            <div id='Gallery' className='container mx-auto relative z-[3] sm:px-10 px-3 xl:px-16 lg:px-12'>
                <h3 className='ff-poppins text-[32px] font-bold text-center bg-clip-text text-transparent bg-gradient-to-tr from-[#F16D92] to-[#281AC8] pb-14'>Gallery</h3>
                <div className=''>
                    <div className="flex flex-row flex-wrap items-center">
                        <div className="lg:w-3/6 w-full flex flex-col items-center lg:gap-32 gap-14 sm:px-0 px-4">
                            <div data-aos="zoom-out-up">
                                <div className='bg-clip-padding overflow-hidden p-[8px] bg-gradient-to-bl from-[#CC33D9] to-[#2F245C] hover:translate-y-[-8px] transition-transform duration-500 rounded-[16px]'>
                                    <img src={Livingroomimg} alt="Livingroomimg" className='rounded-[15px] hover:scale-[1.01] transition-transform duration-500' />
                                </div>
                                <p className='ff-poppins text-[28px] font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#FD749B] to-[#281AC8] pt-2'>Living Room</p>
                            </div>
                            <div data-aos="zoom-out-up">
                                <div className='bg-clip-padding overflow-hidden p-[8px] bg-gradient-to-bl from-[#CC33D9] to-[#2F245C] hover:translate-y-[-8px] transition-transform duration-500 rounded-[16px]'>
                                    <img src={Kitchenimg} alt="Kitchenimg" className='rounded-[15px] hover:scale-[1.01] transition-transform duration-500' />
                                </div>
                                <p className='ff-poppins text-[28px] font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#FD749B] to-[#281AC8] pt-2'>Kitchen</p>
                            </div>
                        </div>
                        <div className='lg:w-3/6 w-full flex flex-col items-center lg:gap-32 gap-10 lg:pt-0 pt-14 pb-6 sm:px-0 px-4'>
                            <div data-aos="zoom-out-up">
                                <div className="bg-clip-padding overflow-hidden p-[8px] bg-gradient-to-bl from-[#CC33D9] to-[#2F245C] hover:translate-y-[-8px] transition-transform duration-500 rounded-[16px]">
                                    <img src={Workroomimg} alt="Workroomimg" className='rounded-[15px] hover:scale-[1.01] transition-transform duration-500' />
                                </div>
                                <p className='ff-poppins text-[28px] font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#FD749B] to-[#281AC8] pt-2'>Office</p>
                            </div>
                            <div data-aos="zoom-out-up">
                                <div className='bg-clip-padding p-[8px] overflow-hidden bg-gradient-to-bl from-[#CC33D9] to-[#2F245C] hover:translate-y-[-8px] transition-transform duration-500 rounded-[16px]'>
                                    <img src={Washroomimg} alt="Washroomimg" className='rounded-[15px] hover:scale-[1.01] transition-transform duration-500' />
                                </div>
                                <p className='ff-poppins text-[28px] font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#FD749B] to-[#281AC8] pt-2'>Bath</p>
                            </div>
                            <div data-aos="zoom-out-up">
                                <div className='bg-clip-padding p-[8px] overflow-hidden bg-gradient-to-bl from-[#CC33D9] to-[#2F245C] hover:translate-y-[-8px] transition-transform duration-500 rounded-[16px]'>
                                    <img src={Bedroomimg} alt="Bedroomimg" className='rounded-[15px] hover:scale-[1.01] transition-transform duration-500' />
                                </div>
                                <p className='ff-poppins text-[28px] font-medium bg-clip-text text-transparent bg-gradient-to-b from-[#FD749B] to-[#281AC8] pt-2'>Bed Room</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;