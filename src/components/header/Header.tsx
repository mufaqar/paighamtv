import React from 'react'
import { headerSlider } from '../../../public/data'
import { HiMenu } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import Logo from '../logo/Logo';
import Link from 'next/link';

const Header = () => {
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
                  <span className="mx-2 text-base uppercase font-anton font-semibold text-[#050007] tracking-[2.4px]">Marquee Item {item}</span>
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
            <i className='pl-32'><FiSearch size={24} /></i>
          </div>
          <div className='flex items-center space-x-4'>
            <ul className='flex items-center space-x-8'>
              {
                navList.map((item, idx) => (
                  <li key={idx} className='font-metapro hover:text-secondary tracking-wide font-semibold capitalize text-lg text-pure'><Link href={item.link}>{item.name}</Link></li>
                ))
              }
            </ul>
            <div className='flex items-center space-x-3'>
              {
                navButons.map((item, idx) => (
                  <Link href={item.link} key={idx} className='font-anton tracking-widest font-normal group uppercase bg-white'>
                    <div className='px-2 py-2.5 flex items-center space-x-1'>
                      <img src='/svg/tv.svg' alt="img" className='w-6'/>
                      <p className='text-base pt-1 group-hover:text-secondary'>{item.name}</p>
                    </div>
                  </Link>
                ))
              }
            </div>
            <Link href="#" className='uppercase text-base hover:bg-orange active:scale:105 hover:border-orange text-pure border px-5 py-[11px] font-anton tracking-widest border-pure'>Donate us</Link>
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