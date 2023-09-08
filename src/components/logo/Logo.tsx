import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
      <Link href="/" className=''>
        <Image src="/images/logomain.png" alt="logo" width={440} height={440} className='z-10 -mt-6 w-40 md:w-[150px] lg:w-[300px] relative'/>
    </Link>
  )
}

export default Logo