
import PageBanner from '@/components/pageBanner/PageBanner';
import React from 'react'
import { Helmet } from 'react-helmet';

import { category } from '../../../public/data'
import CategoryCard from '@/components/category-card/CategoryCard'
import { GetStaticProps } from 'next'
import apolloClient from '@/config/client'

import { Categories } from '@/config/query'








export default function Series({ allCategories }: any) {
    //   console.log(" ~ allCategories:", allCategories)
    return (
        <>
            <Helmet>
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
            </Helmet>

            <PageBanner title="Series" image="/images/main-image.png" />
            <section className='container mx-auto mb-28 px-4 mt-20'>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        allCategories.map((item: any, idx: any) => (
                            <CategoryCard key={idx} item={item} />
                        ))
                    }
                </div>
            </section>




        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const [categories] = await Promise.all([
        apolloClient.query({ query: Categories }),
    ]);
    const allCategories = categories.data.categories.nodes
    return {
        props: {
            allCategories
        },
    };
}

