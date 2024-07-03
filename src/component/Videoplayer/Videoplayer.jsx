import React, { useRef } from 'react'
import "./Videoplayer.css"
import video from "../../assets/movie.mp4"

function Videoplayer({playState,setPlayState}) {

  const player = useRef(null);

  const closePlayer = (event)=>{
    if(event.target === player.current){
      setPlayState(false);
    }
  }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer