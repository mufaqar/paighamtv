import React, { useState } from 'react'
import { headerSlider } from '../../../public/data'
import { HiMenu } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import Logo from '../logo/Logo';
import Link from 'next/link';
import {RiMenu5Fill} from 'react-icons/ri'
import {RxCross1} from 'react-icons/rx'

const Header = () => {
  const [isMobileNav, setIsMobileNav] = useState(false)

  return (
    <header>
      {/* top bar with smooth scrolling  */}
      <div className="overflow-x-hidden bg-gradient-to-l from-orange to-secondary">
        <div className="py-2 animate-marquee whitespace-nowrap flex">
          {
            headerSlider.map((item, idx) => {
              return (
                <div className='flex items-center' key={idx}>
                  <div className='p-[2.5px] px-3 bg-blue' />
                  <span className="mx-2 text-sm md:text-base uppercase font-anton font-semibold text-[#050007] tracking-[2.4px]">Marquee Item {item}</span>
                </div>
              )
            })
          }
        </div>
        {/* main nav  */}
        <nav className='bg-gradient-to-l flex justify-between items-center py-4 px-6 from-blue via-blue to-[#0F275E]'>
          <div className='text-pure flex items-center space-x-4'>
            <HiMenu size={28} />
            <div className='absolute top-12 left-10'>
              <Logo />
            </div>
            <i className='pl-[105px] md:pl-32'><FiSearch size={24} /></i>
          </div>
          <button className='lg:hidden w-[33px] flex justify-center items-center h-[33px]' onClick={()=>setIsMobileNav(!isMobileNav)}>
            {
              isMobileNav ? <RxCross1 size={28} className='text-white'/> : <RiMenu5Fill size={32} className='text-white'/>
            }            
          </button>
          <div className={`lg:flex items-center lg:space-x-4 ${isMobileNav ? 'block absolute top-[100px] p-6 pt-16 pb-10 left-0 right-0 z-[1] bg-primary' : 'hidden'}`}>
            <ul className='lg:flex items-center lg:space-x-8 space-y-4 lg:space-y-0'>
              {
                navList.map((item, idx) => (
                  <li key={idx} className='font-metapro hover:text-secondary tracking-wide font-semibold capitalize text-lg text-pure'><Link href={item.link}>{item.name}</Link></li>
                ))
              }
            </ul>
            <div className='flex flex-col lg:flex-row my-5 mb-5 items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-3'>
              {
                navButons.map((item, idx) => (
                  <Link href={item.link} key={idx} className='font-anton tracking-widest w-[200px] lg:w-auto font-normal group uppercase bg-white'>
                    <div className='px-2 py-2.5 flex items-center space-x-2 lg:space-x-1.5 justify-center'>
                      <img src='/svg/tv.svg' alt="img" className='w-6'/>
                      <p className='text-base pt-1 group-hover:text-secondary'>{item.name}</p>
                    </div>
                  </Link>
                ))
              }
            </div>
            <Link href="#" className='uppercase text-base w-[200px] lg:w-auto hover:bg-orange inline-block text-center active:scale:105 hover:border-orange text-pure border px-5 py-[11px] font-anton tracking-widest border-pure'>Donate us</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header



const navList = [
  {
    name: 'Scholar',
    link: '#'
  },
  {
    name: 'Playlist',
    link: '#'
  },
  {
    name: 'Series',
    link: '#'
  },
  {
    name: 'Program Scheduling',
    link: '#'
  }
]
const navButons = [
  {
    name: 'Pashto Tv',
    link: '#'
  },
  {
    name: 'Sindhi tv',
    link: '#'
  },
  {
    name: 'pagham tv 2',
    link: '#'
  },
  {
    name: 'pagham tv 3',
    link: '#'
  }
]