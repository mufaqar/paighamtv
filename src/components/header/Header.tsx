import React, { useContext, useEffect, useState } from 'react'
import { HiMenu } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import Logo from '../logo/Logo';
import Link from 'next/link';
import { RiMenu5Fill } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { SettingsContext } from '@/context/setting-context';
import SearchModelBox from '../model-box/searchModelBox';
import { useRouter } from 'next/router';
import VideoModelBox from '../model-box/VideoModelBox';
import { LeftSideBar } from './leftSideBar';
import { Socials } from '../footer';
import TopBar from './topBar';
import useWindowScroll from '@/hooks/useWindowScroll'
import useWindowScreen from '@/hooks/useWindowScreen'

const Header = () => {
  const [isMobileNav, setIsMobileNav] = useState(false)
  const [leftSidebar, setLeftSideBar] = useState(false)
  const { isScrolled } = useWindowScroll()
  const { dimensions } = useWindowScreen()

  const router = useRouter();
  const { SearchModalIsOpen, setSearchModalIsOpen, modalIsOpen, setModelIsOpen } = useContext(SettingsContext)
  const OpenSearch = () => {
    setSearchModalIsOpen(true)
  }

  const NavController = (path: any) => {
    router.push(path)
    if (dimensions?.width < 1024) {
      setIsMobileNav(!isMobileNav)
    }
  }


  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-[50]">
        {/* main nav   */}
        <nav className={`flex justify-between items-center py-4 px-6 z-50 ${isScrolled && 'bg-gradient-to-l  from-blue via-blue to-[#0F275E]'}`}>
          <div className='text-pure flex items-center space-x-4'>
            <div className='absolute top-2 left-4'>
              <Logo />
            </div>
          </div>
          <div className='text-white flex items-center gap-4 z-10'>
            <button className='lg:hidden w-[33px] flex justify-center items-center h-[33px]' onClick={() => setIsMobileNav(!isMobileNav)}>
              {
                isMobileNav ? <RxCross1 size={30} className='text-white' /> : <RiMenu5Fill size={32} className='text-white' />
              }
            </button>
            <i className='lg:hidden'><FiSearch size={24} onClick={() => OpenSearch()} /></i>
          </div>
          <div className={`lg:flex items-center lg:space-x-3 ${isMobileNav ? 'block absolute top-[0px] p-6 pt-36 md:pt-40 pb-10 left-0 right-0 z-[1] bg-primary' : 'hidden'}`}>
            <ul className='lg:flex items-center text-white lg:space-x-8 space-y-4 lg:space-y-0'>
              {
                navList.map((item, idx) => (
                  <li key={idx} className='font-metapro hover:text-secondary cursor-pointer tracking-wide font-semibold capitalize text-lg text-pure' onClick={() => NavController(item.link)}>{item.name}</li>
                ))
              }
              <li className="hidden cursor-pointer md:block"><HiMenu size={28} onClick={() => setLeftSideBar(true)} /></li>
              <li className="hidden cursor-pointer md:block pr-4"><i className=''><FiSearch size={24} onClick={() => OpenSearch()} /></i></li>
            </ul>
            <Link href="/donate-us" className='uppercase mt-5 lg:mt-0 text-base w-[200px] lg:w-auto hover:bg-orange inline-block text-center active:scale:105 hover:border-orange text-pure border px-5 py-[9.5px] font-anton tracking-widest border-pure'>Donate us</Link>
            <div className='text-white mt-5 lg:mt-0'>
              <Socials />
            </div>
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

const navList = [
  {
    name: 'Scholars',
    link: '/scholars'
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
