import './App.css';
import Header from './components/Header';
import About from './components/About';
import Interior from './components/Interior';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import SatisfiedClient from './components/SatisfiedClient';
import Gallery from './components/Gallery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import BackToTop from './assets/images/png/swipe-up.png';
import { Loader } from './components/IconSvg';

function App() {

  // --------------back to top-----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  //------------aos--------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2000
      }
    );
    Aos.refresh()
  });
  // -------------------pre loader----------
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3500);
  }, []);
  return (
    <div className='overflow-x-hidden'>
      {screenLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <About />
          <Interior />
          <Gallery />
          <SatisfiedClient />
          <Newsletter />
          <Footer />
          <div className={backToTop ? " fixed bottom-4 end-4 rounded-[50%] w-12 h-12 bg-gradient-to-tr from-[#CC33D9] to-[#2F245C] cursor-pointer flex justify-center items-center z-10" : "hidden"} onClick={() => top()}>
            <img src={BackToTop} alt='BackToTop' />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
