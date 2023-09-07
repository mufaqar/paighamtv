import React from 'react'

const Category_Banner = ({ item }: any) => {
    return (
        <section className="relative -mt-[65px] lg:-mt-[77px]">
            <div className='relative overflow-hidden'>
                {/* <iframe
                    src={`https://www.youtube.com/embed/trz2e249iAM?si=GVcn_cHRX1MYujav`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className='w-full aspect-[16/6]'
                /> */}
                <iframe
                    src={`https://www.facebook.com/plugins/video.php?href=${item?.postInfo?.tmVideoUrl}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className='w-full h-full aspect-[16/9]' />
                <div className='p-3 md:p-6 bg-black'>
                    <h2 className='text-start text-2xl md:text-2xl font-anton tracking-widest text-secondary uppercase'>
                        {item.title}
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Category_Banner