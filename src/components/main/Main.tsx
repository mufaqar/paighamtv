import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import Slider from "react-slick";
import { PiPlay } from 'react-icons/pi'
import VideoModelBox from '../model-box/VideoModelBox';
import { SettingsContext } from '@/context/setting-context';

const Main = () => {
  const slider = React.useRef<Slider>(null);
  const {modalIsOpen, setModelIsOpen, setVideoLink} = useContext(SettingsContext)
  const OpenVideo = (link:string) =>{
    setModelIsOpen(true)
    setVideoLink(link)
  }
  return (
    <main className='relative h-[calc(100vh-120px)]'>
      <Slider ref={slider} {...settings}>
        {
          [1, 2, 3].map((slide, idx) => {
            return (
              <div key={idx} className='relative w-full bg-[url("/images/main-image.png")] p-2 h-[calc(100vh-120px)] bg-cover bg-no-repeat'              >
                <div className='container mx-auto text-white font-metapro h-full lg:px-16 2xl:px-0 flex flex-col items-center md:items-start justify-center'>
                  <h1 className='text-4xl  text-center md:text-left md:text-[60px] font-bold text mb-4'>Knowledge Program</h1>
                  <span className='tracking-widest'>EPISODE 15</span>
                  <p className='tracking-wider px-10 text-center md:text-left md:px-0 text-lg mt-4 max-w-[600px]'>Knowledge Programmed aims to contribute to a society's sustainable and inclusive development.</p>
                  <button onClick={()=>OpenVideo('ZMZcA5-09As')} className="inline-flex active:scale-105 hover:bg-primary hover:text-white mt-10 item-center space-x-2 bg-secondary text-darkgray font-anton px-8 py-3 uppercase tracking-widest text-lg">
                    <PiPlay size={25} className="mt-[1px]" />
                    <span>Watch Now</span>
                  </button>
                </div>
              </div>
            )
          })
        }
      </Slider>
      <section className='sliceslider w-[600px] 2xl:w-[800px] absolute bottom-5 2xl:bottom-10 right-0'>
        <Slider {...SliderSlice}>
          {
            imageSlide.map((item, idx) => {
              return (
                <button onClick={()=>OpenVideo('ZMZcA5-09As')} key={idx} className=''>
                  <Image src={item} alt="image" width={600} height={600} className='' />
                </button>
              )
            })
          }

        </Slider>
      </section>
      <button className="absolute top-1/2 left-1 md:left-2 transform -translate-y-1/2 bg-dark-gray active:scale-105 text-yellow text-xl p-[6px] px-1.5 md:px-5 " onClick={() => slider?.current?.slickPrev()}><Image src="/svg/left-slider-arrow.svg" alt="arrow" width={60} height={60} className='w-7 md:w-16' /></button>
      <button className="absolute top-1/2 right-1 md:right-2 transform -translate-y-1/2 bg-dark-gray active:scale-105 text-yellow text-xl p-[6px] px-1.5 md:px-5 " onClick={() => slider?.current?.slickNext()}><Image src="/svg/right-slider-arrow.svg" alt="arrow" width={60} height={60} className='w-7 md:w-16' /></button>
      { modalIsOpen && <VideoModelBox setModelIsOpen={setModelIsOpen} />}
    </main>
  )
}

export default Main

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // autoplay: true,
};
const SliderSlice = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 6000,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: true,
};


const imageSlide = [
  "/images/sli1.png","/images/sli2.png","/images/sli3.png","/images/sli1.png","/images/sli2.png","/images/sli3.png"
]