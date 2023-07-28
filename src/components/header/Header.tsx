import React, { useContext, useState } from 'react'
import { headerSlider } from '../../../public/data'
import { HiMenu } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import Logo from '../logo/Logo';
import Link from 'next/link';
import { RiMenu5Fill } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { Socials } from '../footer';
import { SettingsContext } from '@/context/setting-context';
import SearchModelBox from '../model-box/searchModelBox';
import { useRouter } from 'next/router';
import VideoModelBox from '../model-box/VideoModelBox';


const Header = () => {
  const [isMobileNav, setIsMobileNav] = useState(false)
  const [leftSidebar, setLeftSideBar] = useState(false)
  const router = useRouter();
  const { SearchModalIsOpen, setSearchModalIsOpen, modalIsOpen, setModelIsOpen } = useContext(SettingsContext)
  const OpenSearch = () => {
    setSearchModalIsOpen(true)
  }

  const NavController = (path: any) => {
    router.push(path)
    setIsMobileNav(!isMobileNav)
  }

  return (
    <>
      {/* top bar with smooth scrolling  */}
      <div className="overflow-x-hidden bg-gradient-to-l from-orange to-secondary">
        <div className="py-2 animate-marquee whitespace-nowrap flex">
          {
            headerSlider.map((item, idx) => {
              return (
                <div className='flex items-center' key={idx}>
                  <div className='p-[2.5px] px-3 bg-blue' />
                  <span className="mx-2 text-sm md:text-base  font-anton font-semibold text-[#050007] tracking-[2.4px]">{item}</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <header className="sticky top-0 z-[50]">
        {/* main nav  */}
        <nav className='bg-gradient-to-l flex justify-between items-center py-4 px-6 from-blue via-blue to-[#0F275E]'>
          <div className='text-pure flex items-center space-x-4'>
            <HiMenu size={28} onClick={() => setLeftSideBar(true)} />
            <div className='absolute top-2 left-10'>
              <Logo />
            </div>
            <i className='pl-[105px] md:pl-32'><FiSearch size={24} onClick={() => OpenSearch()} /></i>
          </div>
          <button className='lg:hidden w-[33px] flex justify-center items-center h-[33px]' onClick={() => setIsMobileNav(!isMobileNav)}>
            {
              isMobileNav ? <RxCross1 size={28} className='text-white' /> : <RiMenu5Fill size={32} className='text-white' />
            }
          </button>
          <div className={`lg:flex items-center lg:space-x-3 ${isMobileNav ? 'block absolute top-[65px] p-6 pt-16 pb-10 left-0 right-0 z-[1] bg-primary' : 'hidden'}`}>
            <ul className='lg:flex items-center lg:space-x-8 space-y-4 lg:space-y-0'>
              {
                navList.map((item, idx) => (
                  <li key={idx} className='font-metapro hover:text-secondary tracking-wide font-semibold capitalize text-lg text-pure' onClick={() => NavController(item.link)}>{item.name}</li>
                ))
              }
            </ul>
            <div className='flex flex-col lg:flex-row my-5 mb-5 md:my-0 md:mb-0 items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-1.5'>
              {
                navButons.map((item, idx) => (
                  <Link href={item.link} key={idx} target='_blank' className='font-anton tracking-widest w-[200px] lg:w-auto font-normal group uppercase bg-white'>
                    <div className='px-2 py-2.5 flex items-center space-x-1.5 lg:space-x-1 justify-center'>
                      <img src={item.icon} alt={item.name} className='w-[25px]' />
                      <p className='text-[14px] pt-1 group-hover:text-secondary'>{item.name}</p>

                    </div>
                  </Link>
                ))
              }
            </div>
            <Link href="/donate-us" className='uppercase text-base w-[200px] lg:w-auto hover:bg-orange inline-block text-center active:scale:105 hover:border-orange text-pure border px-5 py-[9.5px] font-anton tracking-widest border-pure'>Donate us</Link>
          </div>
        </nav>
      </header>

      <LeftSideBar leftSidebar={leftSidebar} setLeftSideBar={setLeftSideBar} />
      {SearchModalIsOpen && <SearchModelBox setSearchModalIsOpen={setSearchModalIsOpen} />}
      {modalIsOpen && <VideoModelBox setModelIsOpen={setModelIsOpen} />}
    </>
  )
}

export default Header


const LeftSideBar = ({ setLeftSideBar, leftSidebar }: any) => {
  return (
    <section className={`bg-primary text-white fixed max-w-[350px] w-full z-50 top-0 transition-all duration-300 ease-in-out h-full ${leftSidebar ? 'left-0' : '-left-full'}`}>
      <div className=' h-full w-full flex flex-col items-center relative p-8'>
        <Logo />
        <p className='mt-4 text-center font-metapro mb-6'>Paigham TV is an Islamic educational channel television network. Its launched in Urdu language TV channel in 2011 and Pashto Channel was launched in 2014</p>
        <Socials />
        <Link href="/donate-us" className='mt-10 border border-secondary text-secondary hover:bg-secondary hover:text-black font-anton tracking-widest p-3 px-10'>Donate Us</Link>
        <img src="/images/bg-side.png" className='absolute bottom-0 opacity-20 left-0' alt="" />
        <RxCross1 className='absolute left-10 text-2xl hover:text-secondary cursor-pointer' onClick={() => setLeftSideBar(false)} />
        <iframe className="mt-8" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13592.604137323078!2d74.300666!3d31.602321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c7c0a71319d%3A0x4217b592e2f4ea1c!2sSuccess%20Designers!5e0!3m2!1sen!2sus!4v1689244313056!5m2!1sen!2sus" width="280" height="200" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}


const navList = [
  {
    name: 'Scholars',
    link: '/scholars'
  },
  {
    name: 'Playlist',
    link: '/playlist'
  },
  {
    name: 'Series',
    link: '/series'
  },
  {
    name: 'Program Scheduling',
    link: '/program-scheduling'
  }
]
const navButons = [
  {
    name: 'Paigham',
    link: 'https://www.youtube.com/live/Z6wPPWr2nHM',
    icon: '/images/tv_icon.png'
  },
  {
    name: 'Quran',
    link: 'https://youtu.be/xJVVLnGS4cI',
    icon: '/images/tv_icon.png'
  },
  {
    name: 'UK TV',
    link: 'https://youtu.be/xJVVLnGS4cI',
    icon: '/images/tv_icon.png'
  },
  {
    name: 'Pashto',
    link: 'https://www.youtube.com/watch?v=AKfu9N3Mv9c',
    icon: '/images/pashto_icon.png'
  }
]