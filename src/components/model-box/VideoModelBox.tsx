import React from 'react'
import VideoPlayer from '../video-player/VideoPlayer';
import {MdOutlineClose} from 'react-icons/md'

const VideoModelBox = ({ setModelIsOpen }: any) => {

  function closeModal() {
    setModelIsOpen(false);
  }
  return (
    <>
    <div className='bg-black/60 fixed inset-0 z-50'>
      <div className='relative w-full h-full'>
        <button className="absolute top-6 right-6" onClick={closeModal}><MdOutlineClose size={35} color="white"/></button>
        <div className='max-w-[850px] mx-auto h-full flex px-4 flex-col justify-center'><VideoPlayer/></div>
      </div>
    </div>
    </>
  )
}

export default VideoModelBox