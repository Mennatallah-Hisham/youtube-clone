import {useState,useEffect} from 'react';
import Sidebar from '../Feed/Sidebar';
import { fetchApi } from '../../utils/fetchApi';

import style from "./Feed.module.css";
import {Videos} from "../../components";


export const Feed = () => {
  const [videos,setVideos]=useState([]);
  const [category,setCategory]=useState("New");

 const changeCategory=(newCategory)=>{
setCategory(newCategory);

  }


  
  useEffect(()=>{
    fetchApi(`search?part=snippet&q=${category}`).then((response)=>{setVideos(response.items)
  });
   
  },[category]);
  return (
    <main className={style.feedGrid}>
      <Sidebar onSelectCategory={changeCategory}/>
      <section className={style.feed}>
<h1> <span> {category} </span> videos</h1>
<Videos videos={videos}/>
      </section>

      

    </main>
  )
}

export default Feed;
