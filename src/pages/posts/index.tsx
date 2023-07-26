import PageBanner from '@/components/pageBanner/PageBanner'
import apolloClient from '@/config/client'
import { AllPosts } from '@/config/query'
import { GetStaticProps } from 'next'
import React, { useContext } from 'react'
import Card from '@/components/video-section/card'
import { SettingsContext } from '@/context/setting-context'
import { IPost } from '@/utils/types'
import {Pagination} from '@/components/pagination/Pagination'


const Posts = ({ allposts }: any) => {
     const { setModelIsOpen, setVideoLink } = useContext(SettingsContext)
     const OpenVideo = (link: string) => {
          setModelIsOpen(true)
          setVideoLink(link)
     }

     return (
          <section>
               <PageBanner title="All Posts" image="/images/main-image.png" />
               <div className='grid grid-cols-2 container mx-auto my-20 px-4 lg:grid-cols-4 mt-10 gap-4'>
                    {
                         allposts?.map((item: IPost, idx: number) => (
                              <Card item={item} key={idx} OpenVideo={OpenVideo} />
                         ))
                    }
               </div>
               <Pagination/>
          </section>
     )
}

export default Posts



export const getStaticProps: GetStaticProps = async () => {
     const [postsResponse] = await Promise.all([
          apolloClient.query({ query: AllPosts }),
     ]);
     const allposts = postsResponse.data.posts.nodes;
     return {
          props: {
               allposts,
          },
     };
}