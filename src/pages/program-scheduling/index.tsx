
import PageBanner from '@/components/pageBanner/PageBanner';

//import { Helmet } from 'react-helmet';
import apolloClient from '@/config/client'
import { programsScheduling } from '@/config/query'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { SettingsContext } from '@/context/setting-context'
import React, { useContext } from 'react'
import VideoPlayer from '@/components/video-player/VideoPlayer'
import { getVideoCode } from '../../utils'



const PaighamChannelPresents = ({ programs }: any) => {
    const { setVideoLink } = useContext<any>(SettingsContext)

    const handleLink = (link: string) => {
        setVideoLink(link)
    }

    return (
        <section className='bg-white'>
            <div className='container font-metapro mx-auto px-4 text-primary py-16'>
                <h2 className=' text-3xl text-center md:text-5xl font-bold'>Paigham Channel Presents</h2>
                <div className='md:flex mt-10 md:space-x-10'>
                    <div className='md:w-[60%]'>
                        <VideoPlayer />
                    </div>
                    <div className="md:w-[40%] mt-5 md:mt-0">
                        {/* top headings  */}
                        <div className='font-semibold flex justify-between text-xl tracking-widest item-center'>
                            <h5>TODAY'S GUIDE</h5>
                            <Link href="/program-scheduling"><h5 className='text-primary'>FULL GUIDE</h5></Link>
                        </div>
                        <ul className='mt-5 '>
                            {
                                programs.map((item: any, idx: number) => (
                                    <li key={idx} className='flex justify-between space-x-6 md:space-x-16 border-t-[1px] border-gray-300 py-5'>
                                        <time className='font-medium text-xl'>{item?.programInfo?.programTime || `0000`}</time>
                                        <button onClick={() => handleLink(getVideoCode(item?.programInfo?.videoUrl))}>
                                            <h6 className='text-primary text-xl font-medium text-left -tracking-wide'>{item.title}</h6>
                                            <div className='text-left text-lg mt-2' dangerouslySetInnerHTML={{ __html: item?.excerpt }} />
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





export default function Program_Scheduling({ allProgramsScheduling }: any) {
    console.log("🚀 ~ file: index.tsx:26 ~ Home ~ allProgramsScheduling:", allProgramsScheduling)


    return (
        <>
            {/* <Helmet>
                <title>Program Scheduling - Paigham TV</title>
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
            </Helmet> */}

            <PageBanner title="Program Scheduling" image="/images/main-image.png" />
            {/* Categories section  */}

            <PaighamChannelPresents programs={allProgramsScheduling} />








        </>
    )
}



export const getStaticProps: GetStaticProps = async () => {
    const [programs] = await Promise.all([

        apolloClient.query({ query: programsScheduling }),
    ]);
    // const allposts = postsResponse.data.posts.nodes;
    //  const allCategories = categories.data.categories.nodes
    const allProgramsScheduling = programs.data.programsScheduling.nodes
    return {
        props: {

            allProgramsScheduling
        },
    };
}








