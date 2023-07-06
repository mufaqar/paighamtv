import React from 'react'

const Header = () => {
  return (
    <header>
        {/* top bar with smooth scrolling  */}
        <div className="overflow-x-hidden bg-yellow-500">
          <div className="py-2 animate-marquee whitespace-nowrap flex">
            {
              [1,2,3,4,5,6,7,8,9,10].map((item,idx)=>{
                return(
                  <div className='flex items-center'>
                    <div className='p-[3px] px-3 bg-blue-700'/>
                    <span className="mx-2 text-md uppercase font-bold" key={idx}>Marquee Item {item}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
    </header>
  )
}

export default Header