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

import { SettingsContext } from '@/context/setting-context'
import React, { useContext } from 'react'

import { IScholorType } from '@/utils/types'
import { Helmet } from 'react-helmet';
import apolloClient from '@/config/client'
import { AllPosts, Categories } from '@/config/query'
import { GetStaticProps } from 'next'



const inter = Inter({ subsets: ['latin'] })

export default function Donate_us({ allposts, allCategories }: any) {
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


            {/* Categories section  */}
            <section className='container mx-auto mb-28 px-4'>
                {/* heading  */}
                <div className=' justify-between items-center mt-20 mb-10  '>
                    <h2 className='font-metapro text-3xl md:text-5xl text-darkgray font-bold border-b-[3px] border-darkgray  pb-5'>Donate Us</h2>
                    <div className='pt-6'>

                        <p> <strong>Contact Person:</strong> Abdul Qayyum</p>

                        <p> <strong>Call :</strong>   +92 333 4089688</p>

                        <p> <strong>Bank Name: </strong>   Dubai Islamic Bank</p>

                        <p> <strong> Account Title: </strong>   Zam Zam Welfare Trust</p>

                        <p> <strong>Branch Name: </strong>    Ravi Road Branch Lahore, Pakistan.</p>

                        <p> <strong>Branch Code: </strong>   0219</p>

                        <p><strong>Account Number: </strong>    0709217001</p>

                        <p><strong>IBAN #:</strong>   PK45DUIB0000000709217001</p>
                    </div>
                </div>

            </section>



        </>
    )
}





