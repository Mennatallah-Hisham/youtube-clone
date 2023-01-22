import React from 'react'
import  {ChannelCard} from "../../components";
import style from "./ChannelHeader.module.css";


const ChannelHeader = (props) => {

  return (
  
      <React.Fragment>
      <div className={style.header}>
       
       </div>
     

       <ChannelCard 
       img={props.channel?.snippet?.thumbnails?.high?.url}
       title={props.channel?.snippet?.title}
       subscribers={props.channel?.statistics?.subscriberCount}
       />
      </React.Fragment>
       
        
 


  
  )
}

export default ChannelHeader;