import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

const SearchModelBox = ({ setSearchModalIsOpen }: any) => {
     function closeModal() {
          setSearchModalIsOpen(false);
     }
     const [SetctedCategory, setCategory] = useState('Ramadan')
     const [openCategory, setOpenCategory] = useState(false)

     return (
          <div className='bg-black/90 fixed inset-0 z-50'>
               <div className='relative w-full h-full'>
                    <button className="absolute top-6 right-6" onClick={closeModal}><MdOutlineClose size={35} color="white" /></button>
                    <div className='max-w-[850px] mx-auto h-full flex px-4 flex-col pt-32 '>
                         <div className='bg-white md:flex item-center space-x-3 rounded-full p-1'>
                              <div className='relative p-3 font-metapro text-lg text-gray-600'>
                                   <button className='flex items-center space-x-4 w-[150px] justify-between' onClick={()=>setOpenCategory(!openCategory)}>
                                        {SetctedCategory}
                                        {openCategory ? <SlArrowUp/> : <SlArrowDown/>}
                                   </button>
                                   {openCategory && <SelectFilter/>}
                              </div>
                              <div className='flex item-center w-full'>
                              <input type="text" placeholder="Search here..." className='bg-transparent  font-metapro text-lg p-3 px-6 outline-none w-full' />
                              <button className="bg-secondary text-2xl px-3.5 hover:bg-black hover:text-secondary rounded-full"><FiSearch /></button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default SearchModelBox


const SelectFilter = () => {
     return (
          <button className='bg-transparent outline-none p-4 w-[160px] max-h-[200px] overflow-y-scroll absolute top-16 left-0 right-0 bg-white'>
               <option value="Ramadan">Ramadan</option>
               <option value="Islamic">Islamic</option>
               <option value="Sisters">Sisters</option>
               <option value="Quran">Quran</option>
          </button>
     )
}