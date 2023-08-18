import { SettingsContext } from '@/context/setting-context';
import React, { useContext, useState } from 'react'
import FacebookPlayer from 'react-facebook-player';


const FacebookVideoPlayer = () => {
     const [state, setState] = useState({ player: null });
     const onReady = (player) => {
          setState({
               player: player,
          });
     }
     const { videoLink } = useContext(SettingsContext)
     console.log("🚀 ~ file: FacebookPlayer.jsx:14 ~ FacebookVideoPlayer ~ videoLink:", videoLink)

     // playVideo = () => {
     //   const { player } = this.state;
     //   if (player) player.play();
     // }
     // pauseVideo = () => {
     //   const { player } = this.state;
     //   if (player) player.pause();
     // }
     
     return (
          <div>
               <FacebookPlayer
                    videoId={videoLink.link}
                    appId="1731606113949263"
                    onReady={onReady}
               />
          </div>
     )
}

export default FacebookVideoPlayer