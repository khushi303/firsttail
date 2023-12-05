import React from 'react';
import { useState } from 'react';
import Pagelogo from '../assets/images/webp/pagelogo.webp';
import Drawingimg from '../assets/images/png/drawingroomimg.png';
import Poolhouse from '../assets/images/png/poolhouse.png';
import Whitelayer1 from '../assets/images/png/whitelayer1.png';

const Header = () => {
    const [show, setshow] = useState(true);
    if (show === false) {
        document.body.classList.add("max-lg:overflow-hidden")

    } else {
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    return (
        <div className='bg-gradient-to-b from-slate-900 to-fuchsia-600 relative'>
            <nav className='flex justify-between items-center lg:pe-11'>
                <div className=''>
                    <img src={Pagelogo} alt="" className='lg:h-[168px] md:h-[120px] h-[80px]' />
                </div>
                <ul className={`${show ? 'flex flex-row gap-[48px] max-lg:fixed max-lg:justify-center transition-all max-lg:left-[-100%] max-lg:items-center max-lg:top-0 max-lg:w-full max-lg:flex-col duration-300 ease-linear max-lg:min-h-screen' : "flex ease-linear z-[4] max-lg:fixed gap-[30px] transition-all duration-300 max-lg:justify-center max-lg:left-[0] max-lg:items-center max-lg:top-0 max-lg:w-full max-lg:flex-col bg-gradient-to-b from-slate-900 to-fuchsia-600 max-lg:min-h-screen"}`}>
                    <li><a href="#home" onClick={() => setshow(!show)} className='ff-poppins text-[21px] font-bold text-white after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-[#CC33D9] after:start-2/4 after:rounded-sm hover:after:w-[22px] hover:after:left-[35%] after:transition-all after:duration-500'>Home</a></li>
                    <li><a href="#about" onClick={() => setshow(!show)} className='ff-poppins text-[21px] font-bold text-white after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-[#CC33D9] after:start-2/4 after:rounded-sm hover:after:w-[22px] hover:after:left-[35%] after:transition-all after:duration-500'>About Us</a></li>
                    <li><a href="#Gallery" onClick={() => setshow(!show)} className='ff-poppins text-[21px] font-bold text-white after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-[#CC33D9] after:start-2/4 after:rounded-sm hover:after:w-[22px] hover:after:left-[35%] after:transition-all after:duration-500'>Gallery</a></li>
                    <li><a href="#contact" onClick={() => setshow(!show)} className='ff-poppins text-[21px] font-bold text-white after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-[#CC33D9] after:start-2/4 after:rounded-sm hover:after:w-[22px] hover:after:left-[35%] after:transition-all after:duration-500'>Contact Us</a></li>
                </ul>
                <div onClick={() => setshow(!show)} className="w-[30px] h-[25px] relative sm:p-0 me-[10px] transition-all lg:hidden z-[4] flex flex-col justify-between items-center">
                    <span className={`${show ? 'bg-white h-[4px] w-full duration-300 ease-linear transition-all' : "bg-white transition-all duration-300 ease-linear h-[4px] w-full rotate-[50deg] translate-y-[19px]"}`}></span>
                    <span className={`${show ? 'bg-white h-[4px] w-full duration-300 ease-linear transition-all' : "duration-300 ease-linear transition-all hidden"}`}></span>
                    <span className={`${show ? 'bg-white h-[4px] w-full duration-300 ease-linear transition-all' : "bg-white transition-all duration-300 ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"}`}></span>
                </div>
            </nav>
            <div id='home' className='container mx-auto flex justify-center items-center pt-[80px] md:pt-[90px] lg:pt-[100px] xl:pt-[150px] xl:pb-[400px] lg:pb-[440px] md:pb-[420px] sm:pb-[340px] pb-[380px]'>
                <div className='px-3'>
                    <h2 data-aos="fade-up" className='ff-poppins sm:text-[48px] text-[40px] font-semibold max-w-[506px] text-white'>We Make Your Home
                        More Beautiful</h2>
                    <p data-aos="fade-up" className='ff-poppins sm:text-[21px] text-[18px] font-normal max-w-[419px] text-white pt-3'>From choosing the right paint to getting an expert touch - leave it on us.</p>
                </div>
            </div>
            <div data-aos="fade-up-left" className='absolute xl:bottom-[8%] lg:bottom-[5%] md:bottom-[5%] bottom-[5%] end-0 xl:max-w-[430px] lg:max-w-[350px] md:max-w-[250px] max-w-[180px]'>
                <img src={Drawingimg} alt="Drawingimg" className='w-full' />
            </div>
            <div data-aos="fade-up-right" className='absolute xl:bottom-[11%] lg:bottom-[9%] md:bottom-[9%] bottom-[9%] start-0 xl:max-w-[410px] lg:max-w-[320px] md:max-w-[250px] max-w-[180px]'>
                <img src={Poolhouse} alt="Poolhouse" className='w-full' />
            </div>
            <div className='absolute start-0 end-0 xl:bottom-[-8%] lg:bottom-[-5%] md:bottom-[-5%] sm:bottom-[-3%] bottom-[-2%]'>
                <img src={Whitelayer1} alt="Whitelayer1" className='w-full' />
            </div>
        </div>
    )
}

export default Header;