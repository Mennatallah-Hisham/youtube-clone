import React from 'react';

import Videos from '../Feed/Videos';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { fetchApi } from '../../utils/fetchApi';
const SearchFeed = () => {
  const [videos,setVideos]=useState([]);


const {searchTerm}=useParams();
  
  useEffect(()=>{
    fetchApi(`search?part=snippet&q=${searchTerm}`).then((response)=>{setVideos(response.items)
  });
   
  },[searchTerm]);
  return (
    <main>
  
      <section className="container">
        
<h1>search results for  {searchTerm} </h1>

<Videos videos={videos}/>
      </section>

      

    </main>
  )


}

export default SearchFeed