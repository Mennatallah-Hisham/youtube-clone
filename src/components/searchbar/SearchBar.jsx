import style from "./SearchBar.module.css";
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {IconButton} from'@mui/material';
import {Search }from"@mui/icons-material";


const SearchBar = () => {
  const [searchTerm,setSearchTerm]=useState("");
  const navigate =useNavigate();

  const inputChangeHandler =(e)=>{
  
    setSearchTerm(e.target.value);

  }
  const searchHandler=(e)=>{
    e.preventDefault();
    if(searchTerm.trim().length===0){return}
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");

  }

  return (
    <div>
        <form onSubmit={searchHandler} className={style.form}>
            <input type="text" placeholder="search..." aria-label='search'
            onChange={inputChangeHandler}/>
           <IconButton type="submit" sx={{color:'gray'}}>
            <Search/>
           </IconButton>
        </form>
    </div>
  )
}

export default SearchBar;