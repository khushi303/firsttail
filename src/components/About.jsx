import React from 'react';
import Paintimg from '../assets/images/png/paintimg.png';

const About = () => {
    return (
        <div id='about' className='py-14'>
            <div className='container mx-auto px-3'>
                <div className='flex justify-between flex-wrap lg:items-start items-center lg:flex-row flex-col px-3 relative z-[3]'>
                    <div className='xl:w-5/12 lg:w-6/12 w-full px-3 lg:block flex items-center justify-center'>
                        <img data-aos="zoom-in" src={Paintimg} alt="paintimg" className='' />
                    </div>
                    <div data-aos="fade-left" className='xl:w-6/12 lg:w-6/12 w-full lg:pt-0 pt-8'>
                        <h3 className='ff-poppins text-[32px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-fuchsia-600'>Welcome to RP</h3>
                        <p className='ff-poppins text-base font-normal leading-[250%] max-w-[793px]'>A family-run business, with our own factory nestled in India, we are producing a complete range of traditional and modern paints. We formulate high performance paint, blended with the best ingredients. Our company includes interior and exterior paints, oil-based paints, floor paints and a special range of antimicrobial paints.</p>
                        <p className='ff-poppins text-base font-normal leading-[250%] max-w-[793px]'>With a color palette you can easily mix the colors together to expand the range. The numbers of creating different textures, finishes and shades are unlimited. </p>
                        <button className='hover:animate-[pulse2_1.5s_ease-in-out_infinite] mt-7 border-0 rounded-[100px] py-[15px] px-[60px] bg-gradient-to-b from-[#021A38] to-[#CC33D9] ff-poppins text-[16px] font-bold text-white'>MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About