import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Slider from "react-slick";
import { PiPlay } from 'react-icons/pi'

const Main = () => {
  const slider = React.useRef<Slider>(null);

  return (
    <main className='relative h-[calc(100vh-120px)]'>
      <Slider ref={slider} {...settings}>
        {
          [1, 2, 3].map((slide, idx) => {
            return (
              <div key={idx} className='relative w-full bg-[url("/images/main-image.png")] h-[calc(100vh-120px)] bg-cover bg-no-repeat'              >
                <div className='container mx-auto text-white font-metapro h-full lg:px-16 2xl:px-0 flex flex-col items-start justify-center'>
                  <h1 className='text-[60px] font-bold text'>Knowledge Program</h1>
                  <span className='tracking-widest'>EPISODE <sub>15</sub></span>
                  <p className='tracking-wider text-lg mt-4 max-w-[600px]'>Knowledge Programmed aims to contribute to a society's sustainable and inclusive development.</p>
                  <button className="inline-flex active:scale-105 hover:bg-primary hover:text-white mt-10 item-center space-x-2 bg-secondary text-darkgray font-anton px-8 py-3 uppercase tracking-widest text-lg">
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
            [1, 2, 3, 4,5,6].map((item, idx) => {
              return (
                <div key={idx} className=''>
                  <Image src="/images/slice.png" alt="image" width={600} height={600} className='' />
                </div>
              )
            })
          }

        </Slider>
      </section>
      <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-dark-gray active:scale-105 text-yellow text-xl p-[6px] px-5 " onClick={() => slider?.current?.slickPrev()}><Image src="/svg/left-slider-arrow.svg" alt="arrow" width={60} height={60} /></button>
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-dark-gray active:scale-105 text-yellow text-xl p-[6px] px-5 " onClick={() => slider?.current?.slickNext()}><Image src="/svg/right-slider-arrow.svg" alt="arrow" width={60} height={60} /></button>
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

};
