import React from 'react'
import { headerSlider } from '../../../public/data'

const TopBar = () => {
     return (
          <>
               {/* top bar with smooth scrolling  */}
               <div className="overflow-x-hidden bg-gradient-to-l from-orange to-secondary">
                    <div className="py-2 animate-marquee whitespace-nowrap flex">
                         {
                              headerSlider.map((item, idx) => {
                                   return (
                                        <div className='flex items-center' key={idx}>
                                             <div className='p-[2.5px] px-3 bg-blue' />
                                             <span className="mx-2 text-sm md:text-base  font-anton font-semibold text-[#050007] tracking-[2.4px]">{item}</span>
                                        </div>
                                   )
                              })
                         }
                    </div>
               </div>
          </>
     )
}

export default TopBar