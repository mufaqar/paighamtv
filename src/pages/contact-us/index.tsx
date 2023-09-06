
import React from 'react'

import { Helmet } from 'react-helmet';

import Locations from '@/components/locations/locations';





export default function Contact_Us() {
    return (
        <>
            <Helmet>
                <title>Contact Us - Paigham TV</title>
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
                    <h2 className='font-metapro text-3xl md:text-5xl text-darkgray font-bold border-b-[3px] border-darkgray  pb-5'>Contact Us</h2>
                    <section className="px-2 pt-20 pb-9">
                        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
                            OUR LOCATIONS
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1200px] mx-auto mb-8">
                            <Locations
                                office="Main Office"
                                address="106 Ravi Rd, Forest Colony, Lahore, Punjab"
                                phone="0092-42-37722876 "
                                email="info.paigham@gmail.com"
                            />


                            <Locations
                                office="Channel Coordinator"
                                address="Asim Hafeez"
                                phone="+92 321 7165256 "
                                email=" asimmas27@gmail.com"
                            />


                            <Locations
                                office="Feedback and Program Info"
                                address="Fakhar ul Islam"
                                phone="+92 300 9470841 "
                                email=" fakhar41@gmail.com"
                            />

                            <Locations
                                office="Feedback and Program Info"
                                address="Fakhar ul Islam"
                                phone="+92 300 9470841 "
                                email=" fakhar41@gmail.com"
                            />


                            <Locations
                                office="Program Telecast Information"
                                address="Hafiz Junaid"
                                phone="+92 321 9445731"
                                email=""
                            />






                            <Locations
                                office="Marketing Department"
                                address="106 Ravi Rd, Forest Colony, Lahore, Punjab"
                                phone="+92 336 4417000"
                                email="marketing@paigham.tv"
                            />

                            <Locations
                                office=" Web & Social Media"
                                address="Farhan Ahmad"
                                phone="+92 314 6898007"
                                email="farhan@paigham.tv"
                            />























                        </div>
                    </section>







                    <div>


                    </div>
                </div>

            </section>



        </>
    )
}





