import React from 'react';
import style from './VideoCard.module.css';
import {Link} from "react-router-dom";

const VideoCard = (props) => {
   
  return (
   
    <article className={style.videoCard}>
     

     <Link to={`/video/${props.id}`}>
        <img src={props.img} alt={props.title}/>
        </Link>
        <div>
        <Link to={`/video/${props.id}`}>

        <h2 className={style.title}> {props.title}</h2>
        </Link>
        <Link to={`/channel/${props.channelId}`}>

        <p > {props.channel}</p>
        </Link>

        </div>
      

        </article>
    
  )
}

export default VideoCard;