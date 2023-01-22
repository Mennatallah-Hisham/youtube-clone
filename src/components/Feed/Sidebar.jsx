import style from "./Sidebar.module.css";
import {categories} from "../../utils/constants";
const Sidebar = (props) => {

  return (
   <aside>
    <ul className={style.categoryList}>
       {categories.map((cat)=>{return<li key={cat.name}>
        <button className={style.categoryBtn}
        onClick={()=>{props.onSelectCategory(cat.name)}}
        >
        <span className={style.catIcon}>{cat.icon}</span>
        <span>{cat.name}</span>
        </button>
       </li>
       })}
    </ul>
    </aside>
  )
}

export default Sidebar;