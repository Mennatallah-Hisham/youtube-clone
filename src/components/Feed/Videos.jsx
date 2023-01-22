import VideoCard from "./VideoCard";
import style from './Videos.module.css';
import React from 'react';

const Videos = (props) => {
  if (props.videos.length===0) return <p>no videos</p>
  return (
    <div className={style.videos}>
      {props.videos.map(video=>{
        return<VideoCard
        key={video.id.videoId}
        id={video.id.videoId}
        title={video.snippet.title}
        channel={video.snippet.channelTitle}
        channelId={video.snippet.channelId}
        img={video.snippet.thumbnails?.medium?.url}
        />
      })} 

    </div>
  )
}

export default Videos