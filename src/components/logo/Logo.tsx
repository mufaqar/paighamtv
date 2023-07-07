import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
      <Link href="#" className=''>
        <Image src="/images/logo.png" alt="logo" width={140} height={140} className='z-10 relative'/>
    </Link>
  )
}

export default Logo