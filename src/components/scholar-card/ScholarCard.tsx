import Image from 'next/image'
import React from 'react'

const ScholarCard = () => {
  return (
    <div className='bg-red-300 relative group overflow-hidden'>
      <Image src="/images/img.png" alt="image" width={700} height={700} className='w-full object-cover transition-all duration-200 ease-in-out group-hover:scale-105'/>
      <div className='bg-gradient-to-t from-black absolute inset-0 p-6 flex flex-col justify-end font-metapro to-black/0'>
          <h4 className='text-white text-xl font-medium tracking-wide'>Adeel Ahmed Azad</h4>
      </div>
    </div>
  )
}

export default ScholarCard