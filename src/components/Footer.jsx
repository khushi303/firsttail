import React from 'react';
import { Goggle } from './IconSvg';
import { Facebook } from './IconSvg';
import { Tweet } from './IconSvg';
import { Insta } from './IconSvg';

const Footer = () => {
    return (
        <div className='bg-gradient-to-b from-[#CC33D9] to-[#021A38] lg:pl-20'>
            <div className='container mx-auto'>
                <div className='flex md:flex-row md:px-0 px-5 flex-col flex-wrap md:py-20 py-14'>
                    <div className='md:w-5/12 w-full flex items-end md:px-4'>
                        <div>
                            <p className='ff-poppins text-base font-bold text-white pb-2'>RP</p>
                            <p className='ff-poppins text-[14px] font-normal text-white max-w-[369px]'>Painting with RP means never painting your house again! Our special paint coating comes with a 20 years warranty.</p>
                            <div className='flex gap-4 items-center pt-5'>
                                <Goggle />
                                <Facebook />
                                <Tweet />
                                <Insta />
                            </div>
                        </div>
                    </div>
                    <div className='md:w-7/12 w-full sm:gap-32 lg:px-4 flex sm:justify-start justify-between lg:pt-0 pt-8'>
                        <ul className=''>
                            <li className='ff-poppins text-lg font-normal leading-[166.667%] text-white pb-5'>Links</li>
                            <li><a href="" className='ff-poppins text-[12px] font-normal leading-[166.667%] text-[#CACACA] hover:text-[#fff] transition-colors duration-500 pb-3'>Home</a></li>
                            <li><a href="" className='ff-poppins text-[12px] font-normal leading-[166.667%] text-[#CACACA] hover:text-[#fff] transition-colors duration-500 pb-3'>About Us</a></li>
                            <li><a href="" className='ff-poppins text-[12px] font-normal leading-[166.667%] text-[#CACACA] hover:text-[#fff] transition-colors duration-500 pb-3'>Gallery</a></li>
                            <li><a href="" className='ff-poppins text-[12px] font-normal leading-[166.667%] text-[#CACACA] hover:text-[#fff] transition-colors duration-500'>Contact Us</a></li>
                        </ul>
                        <ul className=''>
                            <li className='ff-poppins text-lg font-normal leading-[166.667%] text-[#fff] pb-4'>Contact Us</li>
                            <li><a href="" className='ff-poppins text-[12px] font-normal leading-[166.667%] text-[#CACACA] hover:text-[#fff] transition-colors duration-500 pb-3'>+91 1234567890	</a></li>
                            <li><a href="" className='ff-poppins text-[12px] font-normal leading-[166.667%] text-[#CACACA] hover:text-[#fff] transition-colors duration-500 pb-3'>XYZ@gmail.com</a></li>
                            <li><a href="" className='ff-poppins text-[12px] font-normal leading-[166.667%] text-[#CACACA] hover:text-[#fff] transition-colors duration-500'>Address</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer