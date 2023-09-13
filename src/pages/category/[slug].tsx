import Category_Banner from '@/components/pageBanner/categoryBanner'
import VideoPlayer from '@/components/video-player/VideoPlayer'
import Card from '@/components/video-section/card'
import apolloClient from '@/config/client'
import { PostsByCategory } from '@/config/query'
import { SettingsContext } from '@/context/setting-context'
import { IPost } from '@/utils/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

const Category = ({ posts }: any) => {
  const { name, categoryInfo, posts: { nodes } } = posts
  const { setModelIsOpen, videoLink, setVideoLink } = useContext(SettingsContext)
  const OpenVideo = (link: string) => {
    setModelIsOpen(true)
    setVideoLink(link)
  }

  // useEffect(()=>{
  //   const type  = nodes[0]?.postInfo?.tmVideoUrl.includes('facebook') && 'facebook'
  //   const d = {
  //     link: nodes[0]?.postInfo?.tmVideoUrl,
  //     type
  //   }
  //   setVideoLink(d)
  // },[])
  
  return (
    <>
      {
        nodes?.slice(0,1).map((item: IPost, idx: number) => (
          <Category_Banner key={idx} />
        ))
      }
      <div className='grid grid-cols-2 container mx-auto my-20 px-4 lg:grid-cols-4 gap-4'>
        {
          nodes?.slice(1).map((item: IPost, idx: number) => (
            <Card item={item} key={idx} OpenVideo={OpenVideo} slug/>
          ))
        }
      </div>
    </>
  )
}

export default Category


export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug
  const response = await apolloClient.query({
    query: PostsByCategory,
    variables: {
      slug
    },
  });
  const posts = response.data.category;

  return {
    props: {
      posts,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any = [];
  return {
    paths,
    fallback: 'blocking',
  };
}
