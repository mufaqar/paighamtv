import Image from 'next/image'
import React from 'react'
import { getVideoCode } from '@/utils'
import { PiPlay } from 'react-icons/pi'


const Card = ({ item, OpenVideo }: any) => {
     return (
          <>

               <div className='bg-black'>
                    <div className='bg-red-300 relative group overflow-hidden'>
                         <Image src={item?.featuredImage?.node?.mediaItemUrl} alt="image" width={700} height={700} className='w-full object-cover transition-all duration-200 ease-in-out group-hover:scale-105' />
                         <div className='bg-gradient-to-t from-black via-black/50 absolute inset-0 p-3 md:p-6 flex flex-col justify-end font-metapro to-black/0'>

                              <button onClick={() => OpenVideo(getVideoCode(item?.postInfo?.tmVideoUrl))} className='bg-secondary opacity-75 hover:scale-105 p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                                   <PiPlay size={28} />
                              </button>
                         </div>

                    </div>
                    <h4 className='text-white md:text-lg font-medium md:px-2 text-center tracking-wide my-3'>{item.title}</h4>

               </div>


          </>
     )
}

export default Card