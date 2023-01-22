import style from "./VideoDetails.module.css";
import {fetchApi} from "../../utils/fetchApi";
import { useParams, Link } from 'react-router-dom';
import { useState,useEffect  } from 'react';
import ReactPlayer from 'react-player';
import Videos from "../Feed/Videos";

const VideoDetails = () => {
  const {id} = useParams();
  const [videos,setVideos]=useState([]);
  const [videoDetails,setVideoDetails]=useState(null);
  useEffect(()=>{
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetails(data.items[0]));
    
   fetchApi(`search?part=snippet&relatedTovideoId=${id}&type=video`).then((data)=>setVideos(data.items));
  },[id]);



  if(!videoDetails?.snippet) return "loading...";
  const {snippet:{title,channelId,channelTitle},statistics:{likeCount,viewCount}} =videoDetails;





  return (
 

  
    <main className="container">
      <section className={style.videoCard}>
      <ReactPlayer
       url={`https://www.youtube.com/watch?v=${id}`} 
       controls
       width='80%'
       height='80vh'/>

      <div className={style.fRow}>
        <div>
        <p className={style.bold}>{title}</p>
        <Link to={`/channel/${channelId}`}>

<p className={style.channel}>{channelTitle}</p>
</Link>

        </div>
  
      <p>
        <span className={style.bold}>
        {likeCount}
          </span>
      likes</p>

<p>
<span className={style.bold}>
{viewCount}
          </span>
views</p>
      <div>

      </div>

      </div>
     


      </section>


      <Videos videos={videos}/>

    </main>
 
  

  )
}

export default VideoDetails;