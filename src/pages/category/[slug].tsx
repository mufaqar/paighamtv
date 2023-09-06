import PageBanner from '@/components/pageBanner/PageBanner'
import Card from '@/components/video-section/card'
import apolloClient from '@/config/client'
import { PostsByCategory } from '@/config/query'
import { SettingsContext } from '@/context/setting-context'
import { IPost } from '@/utils/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

const Category = ({ posts }: any) => {
  const { name, categoryInfo, posts: { nodes } } = posts
  console.log("🚀 ~ file: [slug].tsx:13 ~ Category ~ posts:", categoryInfo.categoryBanner.mediaItemUrl);

  const { setModelIsOpen, setVideoLink } = useContext(SettingsContext)
  const OpenVideo = (link: string) => {
    setModelIsOpen(true)
    setVideoLink(link)
  }

  return (
    <>
      <PageBanner title={name} image={categoryInfo?.categoryBanner?.mediaItemUrl} />
      <div className='grid grid-cols-2 container mx-auto my-20 px-4 lg:grid-cols-4 gap-4'>
        {
          nodes?.map((item: IPost, idx: number) => (
            <Card item={item} key={idx} OpenVideo={OpenVideo} />
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
