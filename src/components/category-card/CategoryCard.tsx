import Image from 'next/image'
import React, { useContext } from 'react'
//import DefaultImage from '../../../public/images/Islamic.png'
import Link from 'next/link'
import Card from '@/components/video-section/card';
import { PiPlay } from 'react-icons/pi';
import { SettingsContext } from '@/context/setting-context';
import { useRouter } from 'next/router';

const CategoryCard = ({ items }: any) => {
  const {setVideoLink} = useContext(SettingsContext)
  const router = useRouter()
  return (
    <>
      <div className='flex justify-between items-center text-primary'>
        <h4 className='font-bold md:text-4xl '>{items?.name}</h4>
        <Link href={`/category/${items?.slug}`} className='font-semibold hover:underline md:text-2xl'> View All </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-10'>
        {
          items?.posts?.nodes?.slice(0,4)?.reverse().map((item: any, idx: number) => {
            return (
              <>
                <div className='bg-black' key={idx}>
                  <div className='bg-red-300 relative group overflow-hidden '>
                    <Image src={item?.featuredImage?.node?.mediaItemUrl} alt="image" width={700} height={400} className=' w-full object-cover transition-all h-[220px] duration-200 ease-in-out group-hover:scale-105' />
                    <div className=' bg-gradient-to-t from-black via-black/50 absolute inset-0 p-3 md:p-6 flex flex-col justify-end font-metapro to-black/0'>
                      {
                      <button onClick={()=> {
                        setVideoLink(item.postInfo?.tmVideoUrl)
                        router.push(`/category/${items?.slug}`)
                      }} className='bg-secondary opacity-75 hover:scale-105 p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                        <PiPlay size={28} />
                      </button>
                    }
                    </div>
                  </div>
                  <h4 className='text-white md:text-lg font-medium md:px-2 text-center tracking-wide my-3 line-clamp-2'>{item?.title}</h4>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}
export default CategoryCard