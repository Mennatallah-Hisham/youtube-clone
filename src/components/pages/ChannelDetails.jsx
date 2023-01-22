
import{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import{Videos , ChannelHeader} from '../../components';
import { fetchApi } from '../../utils/fetchApi';

const ChannelDetails = () => {
  const {id}=useParams();
  const [channel,setChannel]=useState(null);
  const [videos,setVideos] =useState([]);
  useEffect(()=>{
    fetchApi(`channels?part=snippet&id=${id}`).then(repsonse=>setChannel(repsonse?.items[0]));
    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then(repsonse=>setVideos(repsonse?.items));

  },[])
  return (
    <section className='container'>
      <ChannelHeader channel={channel}/>

<Videos videos={videos}/>


    </section>
  )
}

export default ChannelDetails