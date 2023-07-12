import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { PiPlay } from 'react-icons/pi'

const VideoSection = () => {
     const [activeCategory, setActiveCategory] = useState(0)
     const HandleVideosCategoryTabs = (id: number) => {
          setActiveCategory(id)
     }

     return (
          <section className="bg-primary py-20">
               <div className='container mx-auto px-4'>
                    {/* heading  */}
                    <div className='flex justify-between text-white items-center mb-5 pb-5'>
                         <h2 className='font-metapro text-3xl md:text-5xl font-bold'>VIDEOS</h2>
                         <Link href="#" className='uppercase flex hover:text-orange items-center space-x-2 font-metapro text-xl tracking-widest font-semibold'>
                              <span>View All</span>
                              <HiOutlineArrowRight />
                         </Link>
                    </div>
                    <ul className='flex justify-between  text-white overflow-x-scroll xl:overflow-x-hidden font-metapro font-medium border-b-[1px] border-gray-500'>
                         {
                              videoCategory.map((item, idx) => (
                                   <li key={idx} className={`${activeCategory === idx && 'bg-secondary px-4 py-2 text-primary '} flex-1 flex justify-center min-w-[140px] cursor-pointer items-center`} onClick={() => HandleVideosCategoryTabs(idx)}>{item}</li>
                              ))
                         }
                    </ul>
                    <div className='grid grid-cols-2 lg:grid-cols-4 mt-10 gap-4'>
                         {
                              [1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
                                   <div className='bg-red-300 relative group overflow-hidden' key={idx}>
                                        <Image src="/images/img.png" alt="image" width={700} height={700} className='w-full object-cover transition-all duration-200 ease-in-out group-hover:scale-105' />
                                        <div className='bg-gradient-to-t from-black via-black/50 absolute inset-0 p-3 md:p-6 flex flex-col justify-end font-metapro to-black/0'>
                                             <h4 className='text-white md:text-xl font-medium md:px-4 text-center tracking-wide'>Tabdeeli Ki Pehli Lehar Sabit Ho Gi</h4>
                                             <button className='bg-secondary opacity-75 hover:scale-105 p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                                             <PiPlay size={28}/>
                                        </button>
                                        </div>
                                   </div>
                              ))
                         }
                    </div>
               </div>
          </section>
     )
}

export default VideoSection



const videoCategory = [
     "All", "Dua o Azkar", "Tafseer Ul Quran", "Research Talk", "Paigham e Pakistan", "Time Line", "Jiyo Pak Zindagi",
     "Mehakte Phool", "Jadu aur Jinnat", "Ahkam o Masail"
]