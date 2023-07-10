import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/main/Main'
import Link from 'next/link'
import { HiOutlineArrowRight } from 'react-icons/hi'
import CategoryCard from '@/components/category-card/CategoryCard'
import ScholarCard from '@/components/scholar-card/ScholarCard'
import DonateNow from '@/components/donateNow/DonateNow'
import VideoSection from '@/components/video-section/VideoSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Main/>
      {/* Categories section  */}
      <section className='container mx-auto mb-28 px-4'>
        {/* heading  */}
        <div className='flex justify-between items-center mt-20 mb-10 border-b-[3px] border-darkgray pb-5'>
          <h2 className='font-metapro text-5xl text-darkgray font-bold'>Categories</h2>
          <Link href="#" className='uppercase flex hover:text-orange items-center space-x-2 font-metapro text-xl tracking-widest font-semibold'>
            <span>View All</span>
            <HiOutlineArrowRight/>
          </Link>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {
            [1,2,3,4].map((item,idx)=>(
              <CategoryCard key={idx}/>
            ))
          }
        </div>
      </section>
      {/* videos section  */}
      <VideoSection/>
      {/* Scholar section  */}
      <section className='container mx-auto mb-28 px-4'>
        {/* heading  */}
        <div className='flex justify-between items-center mt-20 mb-10 border-b-[3px] border-darkgray pb-5'>
          <h2 className='font-metapro text-5xl text-darkgray font-bold'>Scholar</h2>
          <Link href="#" className='uppercase flex hover:text-orange items-center space-x-2 font-metapro text-xl tracking-widest font-semibold'>
            <span>View All</span>
            <HiOutlineArrowRight/>
          </Link>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {
            [1,2,3,4].map((item,idx)=>(
              <ScholarCard key={idx}/>
            ))
          }
        </div>
      </section>
      {/* donate now section  */}
      <DonateNow/>
    </>
  )
}
