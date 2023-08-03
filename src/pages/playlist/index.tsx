import PageBanner from '@/components/pageBanner/PageBanner'
import React from 'react'
import ScholarCard from '@/components/scholar-card/ScholarCard'
import apolloClient from '@/config/client'
import { AllPlaylist } from '@/config/query'
import { GetStaticProps } from 'next'

const Playlist = ({ allPlaylist }: any) => {
  return (
    <>
      <PageBanner title="Play List" image="/images/main-image.png" />

      <div className='grid container mx-auto my-20 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-4'>
        {
          allPlaylist.map((item: any, idx: number) => (
            <ScholarCard key={idx} item={item} />
          ))
        }
      </div>
    </>
  )
}

export default Playlist



export const getStaticProps: GetStaticProps = async () => {
  const [playLists] = await Promise.all([
    apolloClient.query({ query: AllPlaylist })
  ]);
  const allPlaylist = playLists.data.playLists.nodes
  return {
    props: {
      allPlaylist
    },
  };
}
