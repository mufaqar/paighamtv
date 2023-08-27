import Link from 'next/link'
import React from 'react'


const ChannelLinks = () => {
  return (
    <div className='flex flex-col absolute top-24 gap-1 right-0 my-5 mb-5 md:my-0 md:mb-0 items-start lg:items-center '>
      {
        navButons.map((item, idx) => (
          <Link href={item.link} key={idx} target='_blank' className='font-montserrat max-w-[220px] text-primary w-full font-normal  group uppercase bg-secondary shadow-lg hover:bg-primary hover:text-white'>
            <div className='px-2 py-2.5 flex items-center space-x-1.5 lg:space-x-1 justify-start '>
              <img src={item.icon} alt={item.name} className='w-[25px]' />
              <p className='text-[14px] pt-1 '>{item.name}</p>
              <img src={item.live} alt={item.name} className='w-[32px]' />
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default ChannelLinks

const navButons = [
  {
    name: 'TV Urdu',
    link: 'https://www.youtube.com/live/Z6wPPWr2nHM',
    icon: '/images/tv_icon.png',
    live: '/images/live.png'
  },
  {
    name: 'Quran TV',
    link: 'https://youtu.be/xJVVLnGS4cI',
    icon: '/images/tv_icon.png',
    live: '/images/live.png'
  },
  {
    name: 'TV UK',
    link: 'https://youtu.be/xJVVLnGS4cI',
    icon: '/images/tv_icon.png',
    live: '/images/live.png'
  },
  {
    name: 'TV Pashto',
    link: 'https://www.youtube.com/watch?v=AKfu9N3Mv9c',
    icon: '/images/pashto_icon.png',
    live: '/images/live.png'
  }
]