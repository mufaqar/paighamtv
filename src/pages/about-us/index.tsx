
import React from 'react'

import { Helmet } from 'react-helmet';
import Image from 'next/image';


export default function About_us() {
    return (
        <>
            <Helmet>
                <title>About Us - Paigham TV</title>
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
                    <h2 className='font-metapro text-3xl md:text-5xl text-darkgray font-bold border-b-[3px] border-darkgray  pb-5'>About Us</h2>
                    <div className='pt-6'>

                        <p className='mb-5'> Paigham TV is a satellite TV channel the objectives of which are preaching the true teachings of the Holy Quran and Sunnah and promoting religious awareness world wide. The channel is spreading the authentic message of the Quran and Sunnah to the masses in interesting and efficient manner. The speeches and lectures of acclaimed and influential scholars are being transmitted for this mission. Talk shows, road shows, informative documentary programs, special programs for religious guidance of women, distinctive programs for religious education of children and much more the viewers want to watch is being broadcasted.Paigham TV is a missionary and educational channel. With the same ambition of promoting the education of the Quran and Sunnah, an educational network is being launched. This will give you an opportunity to learn the Holy Quran and Sunnah from the well known reciters and scholars of Paigham TV. The network will function under the high level research board consisting of world scholars and reciters graduated from world renowned Islamic Universities.</p>
                        <p className='mb-5'>Paigham TV is launching its online teaching program with an ambition to spread religious awareness and understanding of the Qur’an in the world. The latest technology shall be used to facilitate the education process. The unique advantage that Paigham TV enjoys is the patronage of the world’s most prestigious personality of the Kaaba Sheikh Abdul Rahman Sudais. This educational program will stress upon teaching the better accent and Rules of Tajweed e Quran as well as to enlighten the students with the highest values of Islam. In Shaa Allah. Students will be awarded with the certificates issued by the end of their courses paigham TV. </p>
                        <p className='mb-5'> Join hands with us for this Noble Cause, Be a part of Paigham TV Educational Network.</p>

                        <h3 className="text-[26px] text-[#302E2E] font-bold uppercase">Mission</h3>
                        <ul className="list-disc ml-8">
                            <li>To spread the teachings of Quran-o-Sunnah.</li>
                            <li>To promote peace and unity between Muslims.</li>
                            <li>To eliminate the Non-Islamic customs, ill-beliefs and misunderstandings about Islam.</li>
                            <li>To defend the ideological attacks on Islam.</li>
                            <li>To educate the Urdu-speaking community all over the world about Islam.</li>
                            <li>To aware the youth of Muslim Ummah about Islamic history and Personalities of Muslim Heroes.</li>
                            <li>To reincarnate the soul of National identity based on Islam and Two Nation Theory within our people.</li>
                        </ul>

                        <h3 className="text-[26px] text-[#302E2E] font-bold uppercase">Objectives</h3>



                        <p> To create the spirit of Islamization.</p>
                        <p>  To educate the people of Pakistan using the tools of electronic and social media.</p>
                        <p>  To discover our Islamic identity for which we need to create awareness, understanding and conscience in the masses.</p>
                        <p>   To awaken the nation by bringing home the message of fraternity, social justice and philanthropy to make them the proud bearers of their nationality and Muslim identity.
                        </p>

                        <h3 className="text-[26px] text-[#302E2E] font-bold uppercase">  Piaghm TV Frequency </h3>

                        <p> <span className='font-bold'>Satellite:</span> Pak Sat</p>
                        <p> <span className='font-bold'>Downlink Freq:</span>  4093</p>
                        <p> <span className='font-bold'>Symbol Rate:</span>  2400</p>
                        <p> <span className='font-bold'>Polarity: </span>  Vertical</p>
                        <Image src="/images/tv_banner.jpg" className='my-6' alt="" width="1000" height="666" />

                    </div>
                </div>

            </section>



        </>
    )
}





