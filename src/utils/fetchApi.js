import axios from "axios";
const BASE_URL='https://youtube-v31.p.rapidapi.com';

const KEY='6b8ae83235msh4d98446b74048aep1fda73jsn1b46b2daec26';

const options = {
 
    params: {
maxResults:'50'},
    headers: {
      'X-RapidAPI-Key': '6b8ae83235msh4d98446b74048aep1fda73jsn1b46b2daec26',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  }

  export const fetchApi =async(url)=>{

  const response =await axios.get(`${BASE_URL}/${url}`,options);
  
  return response.data;
  }