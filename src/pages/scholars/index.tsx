import PageBanner from '@/components/pageBanner/PageBanner'
import React from 'react'
import { GetStaticProps } from 'next'
import apolloClient from '@/config/client'
import ScholarCard from '@/components/scholar-card/ScholarCard'
import { AllScholars } from '@/config/query'

const Scholar = ({ allScholars }: any) => {
  return (
    <>
      <PageBanner title="Scholar" image="/images/main-image.png" />
      <div className='grid container mx-auto my-20 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-4 '>
        {
          allScholars.map((item: any, idx: number) => (
            <ScholarCard key={idx} item={item} />
          ))
        }
      </div>
    </>
  )
}

export default Scholar



export const getStaticProps: GetStaticProps = async () => {
  const [scholars] = await Promise.all([
    apolloClient.query({ query: AllScholars })
  ]);
  const allScholars = scholars.data.scholars.nodes
  return {
    props: {
      allScholars
    },
  };
}
