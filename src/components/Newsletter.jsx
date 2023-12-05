import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Newsletter = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_31h180h', 'template_rxq3f9e', form.current, '1cJ95ExJ1P3ygeRiD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact' className='py-14'>
            <div data-aos="fade-up" className='container mx-auto px-3'>
                <h2 className='ff-poppins text-[28px] font-bold leading-[232.143%] text-center bg-clip-text text-transparent bg-gradient-to-b from-[#FD749B] to-[#281AC8]'>Subscribe our newsletter</h2>
                <div className='flex items-start justify-center pt-9'>
                    <p className='ff-poppins text-[16px] max-w-[378.42px] text-center leading-[250%]'>Subscribe to our newsletter for daily/weekly update of our products and services.</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className='flex justify-center items-center mt-9 gap-5'>
                    <div className='bg-clip-padding bg-gradient-to-b from-[#FD749B] to-[#281AC8] p-[1px] rounded-[100px] w-full max-w-[420px]'>
                        <input type="email" name="user_email" placeholder='EMAIL' className='py-3 rounded-[100px] pl-7 w-full outline-none pr-2' />
                    </div>
                    <button type="submit" value="Send" className='hover:animate-[pulse2_1.5s_ease-in-out_infinite] ff-poppins font-bold text-[14px] text-white py-4 px-10 rounded-[100px] bg-gradient-to-bl from-[#FD749B] to-[#281AC8]'>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;