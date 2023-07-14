import PageBanner from '@/components/pageBanner/PageBanner'
import React from 'react'
import { Scholars } from '../../../public/data'
import ScholarCard from '@/components/scholar-card/ScholarCard'

const Scholar = () => {
  return (
    <>
      <PageBanner title="Scholar" image="/images/main-image.png"/>
      <div className='grid container mx-auto my-20 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-4'>
          {
            Scholars.map((item:any, idx:number) => (
              <ScholarCard key={idx} item={item}/>
            ))
          }
        </div>
    </>
  )
}

export default Scholar