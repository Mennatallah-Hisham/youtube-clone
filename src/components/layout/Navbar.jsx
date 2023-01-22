import React from 'react'
import {Link} from 'react-router-dom';
import { logo } from '../../utils/constants';
import {SearchBar} from "../../components";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className='container'>
<nav className={style.nav}>
<Link to="/">
  <img src={logo} alt="youtube logo" className={style.logo}/>
</Link>
<SearchBar/>


   </nav>
    </div>
   
  )
}

export default Navbar;