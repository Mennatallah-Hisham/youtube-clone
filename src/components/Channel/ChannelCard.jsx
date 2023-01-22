import React from 'react'
import style from "./ChannelCard.module.css";
const ChannelCard = (props) => {

  return (
    <div className={style.channelCard}>
        <img src={props.img} alt={props.title}/>
        <h1>{props.title}</h1>
        <p>{props.subscribers}</p>
    </div>
  )
}

export default ChannelCard