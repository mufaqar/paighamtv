import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/main/Main'
import Link from 'next/link'
import { HiOutlineArrowRight } from 'react-icons/hi'
import CategoryCard from '@/components/category-card/CategoryCard'
import ScholarCard from '@/components/scholar-card/ScholarCard'
import DonateNow from '@/components/donateNow/DonateNow'
import VideoSection from '@/components/video-section/VideoSection'
import { useState } from 'react'
import { PiPlay } from 'react-icons/pi'
import VideoPlayer from '@/components/video-player/VideoPlayer'
import { getVideoCode } from '../utils'
import { SettingsContext } from '@/context/setting-context'
import React, { useContext } from 'react'
import { Scholars, VideosData, category } from '../../public/data'
import { IScholorType } from '@/utils/types'
import { Helmet } from 'react-helmet';
import apolloClient from '@/config/client'
import { AllPosts, Categories } from '@/config/query'
import { GetStaticProps } from 'next'



const inter = Inter({ subsets: ['latin'] })

export default function Home({ allposts, allCategories }: any) {
  return (
    <>
      <Helmet>
        <title>Home - Paigham TV</title>
        <meta name="description" content="Paigham TV is an Islamic educational channel television network. It launched its Urdu language TV channel in 2011. The production of this channel is based on the teachings of Quran o Sunnah. A team of Islamic scholars monitors the material presented on its programs. Each program of Paigham TV is previewed according to authentic references of Quran o Hadees." />
        <link rel="canonical" href="https://paigham.tv/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - Paigham TV" />
        <meta property="og:description" content="Paigham TV is an Islamic educational channel television network. It launched its Urdu language TV channel in 2011. The production of this channel is based on the teachings of Quran o Sunnah. A team of Islamic scholars monitors the material presented on its programs. Each program of Paigham TV is previewed according to authentic references of Quran o Hadees." />
        <meta property="og:url" content="https://paigham.tv/" />
        <meta property="og:site_name" content="Paigham TV" />
        <meta property="article:publisher" content="https://web.facebook.com/paighamtv" />
        <meta property="article:modified_time" content="2023-05-14T04:41:56+00:00" />
        <meta property="og:image" content="https://paigham.tv/wp-content/uploads/2018/09/paigham-tv-logo-img.jpg" />
        <meta property="og:image:width" content="960" />
        <meta property="og:image:height" content="960" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@paighamtv" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="2 minutes" />
      </Helmet>
      <Main />
      <TabsSection />
      <PaighamChannelPresents />
      {/* Categories section  */}
      <section className='container mx-auto mb-28 px-4'>
        {/* heading  */}
        <div className='flex justify-between items-center mt-20 mb-10 border-b-[3px] border-darkgray pb-5'>
          <h2 className='font-metapro text-3xl md:text-5xl text-darkgray font-bold'>Categories</h2>
          <Link href="#" className='uppercase flex hover:text-orange items-center space-x-2 font-metapro text-xl tracking-widest font-semibold'>
            <span>View All</span>
            <HiOutlineArrowRight />
          </Link>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {
            category.map((item, idx) => (
              <CategoryCard key={idx} item={item} />
            ))
          }
        </div>
      </section>
      {/* videos section  */}
      <VideoSection allposts={allposts} allCategories={allCategories}/>
      {/* Scholar section  */}
      <section className='container mx-auto mb-28 px-4'>
        {/* heading  */}
        <div className='flex justify-between items-center mt-20 mb-10 border-b-[3px] border-darkgray pb-5'>
          <h2 className='font-metapro text-3xl md:text-5xl text-darkgray font-bold'>Scholar</h2>
          <Link href="#" className='uppercase flex hover:text-orange items-center space-x-2 font-metapro text-xl tracking-widest font-semibold'>
            <span>View All</span>
            <HiOutlineArrowRight />
          </Link>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {
            Scholars.map((item: IScholorType, idx: number) => (
              <ScholarCard key={idx} item={item} />
            ))
          }
        </div>
      </section>
      {/* donate now section  */}
      <DonateNow />
    </>
  )
}



// Tabs section 
const TabsSection = () => {
  const [activeCategory, setActiveCategory] = useState('news-videos')
  const HandleVideosCategoryTabs = (slug: any) => {
    setActiveCategory(slug)
  }
  const { modalIsOpen, setModelIsOpen, setVideoLink } = useContext(SettingsContext)
  const OpenVideo = (link: string) => {
    setModelIsOpen(true)
    setVideoLink(link)
  }
  return (
    <section className="container mx-auto pt-20 px-4">
      {/* top header  */}
      <div className='flex justify-between item-center border-b-2 border-gray-500'>
        <ul className='flex justify-between space-x-2 overflow-x-scroll xl:overflow-x-hidden font-metapro font-medium '>
          {
            tabData.map((item, idx) => (
              <li key={idx} className={`${activeCategory === item.slug && 'bg-secondary px-4 py-2 text-primary '} flex-1 flex justify-center min-w-[140px] cursor-pointer  items-center`} onClick={() => HandleVideosCategoryTabs(item.slug)}>{item.name}</li>
            ))
          }
        </ul>
        <Link href="#" className='uppercase hidden md:flex  hover:text-orange items-center space-x-2 font-metapro text-xl tracking-widest font-semibold'>
          <span>View All</span>
          <HiOutlineArrowRight />
        </Link>
      </div>
      {/* articles  */}
      <div className='grid grid-cols-2 lg:grid-cols-4 mt-10 gap-4'>
        {
          VideosData.slice(0, 4).map((item, idx) => (
            <div className='bg-red-300 relative group overflow-hidden' key={idx}>
              <Image src={item.image} alt="image" width={700} height={700} className='w-full object-cover transition-all duration-200 ease-in-out group-hover:scale-105' />
              <div className='bg-gradient-to-t from-black via-black/50 absolute inset-0 p-3 md:p-6 flex flex-col justify-end font-metapro to-black/0'>
                <button onClick={() => OpenVideo(getVideoCode(item.videolink))} className='bg-secondary opacity-75 hover:scale-105 p-2 pl-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                  <PiPlay size={50} />
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

// Paigham Channel Presents
const PaighamChannelPresents = () => {
  const { setVideoLink } = useContext<any>(SettingsContext)

  const handleLink = (link: string) => {
    setVideoLink(link)
  }

  return (
    <section className='bg-primary mt-20'>
      <div className='container font-metapro mx-auto px-4 text-white py-16'>
        <h2 className=' text-3xl text-center md:text-5xl font-bold'>Paigham Channel Presents</h2>
        <div className='md:flex mt-10 md:space-x-10'>
          <div className='md:w-[60%]'>
            <VideoPlayer />
          </div>
          <div className="md:w-[40%] mt-5 md:mt-0">
            {/* top headings  */}
            <div className='font-semibold flex justify-between text-xl tracking-widest item-center'>
              <h5>TODAY'S GUIDE</h5>
              <h5 className='text-secondary'>FULL GUIDE</h5>
            </div>
            <ul className='mt-5 '>
              {
                PaighamChannelPresentsData.map((item, idx) => (
                  <li key={idx} className='flex justify-between space-x-6 md:space-x-16 border-t-[1px] border-gray-500 py-5'>
                    <time className='font-medium text-xl'>11:23</time>
                    <button onClick={() => handleLink(getVideoCode(item.videoLink))}>
                      <h6 className='text-secondary text-xl font-medium text-left -tracking-wide'>{item.name}</h6>
                      <p className='text-left text-lg mt-2'>{item.shortInfo}</p>
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const [postsResponse, categories ] = await Promise.all([
    apolloClient.query({ query: AllPosts }),
    apolloClient.query({ query: Categories }),
  ]);

  const allposts = postsResponse.data.posts.nodes;
  const allCategories = categories.data.categories.nodes
  return {
    props: {
      allposts,
      allCategories
    },
  };
}




const tabData = [
  {
    name: 'News Videos',
    slug: 'news-videos'
  },
  {
    name: 'Latest Videos',
    slug: 'latest-videos'
  },
  {
    name: 'Top Trending Videos',
    slug: 'top-trending-videos'
  },
]

const PaighamChannelPresentsData = [
  {
    name: 'Al Aqsa Live',
    shortInfo: 'Hear the Friday Sermon from Al Aqsa every Friday with the English translation.',
    videoLink: 'https://www.youtube.com/watch?v=ZMZcA5-09As'
  },
  {
    name: 'Al Aqsa Live 2',
    shortInfo: 'Hear the Friday Sermon from Al Aqsa every Friday with the English translation.',
    videoLink: 'https://www.youtube.com/watch?v=xjGJ5wYs8AQ'
  },
  {
    name: 'Al Aqsa Live 3',
    shortInfo: 'Hear the Friday Sermon from Al Aqsa every Friday with the English translation.',
    videoLink: 'https://www.youtube.com/watch?v=EfZDFrZfJow'
  },

]