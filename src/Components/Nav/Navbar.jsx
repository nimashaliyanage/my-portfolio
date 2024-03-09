import React, { useState } from 'react'
import style from './Navbar.module.css'
import { getImgUrl } from '../../utils'

const Navbar = () => {
    const [menuopen, setmenuopen] = useState(false);
  return (
    <nav className={style.navbar}>
       <a className={style.title} href="/">Nimasha Liyange</a> 
       <div className={style.menu}>
        <img className={style.menubtn} 
        src={
            menuopen
            ? getImgUrl("nav/close.png")
            : getImgUrl("nav/menuicon.png")
        } 
        alt="menu-button" onClick={()=>setmenuopen(!menuopen)}/>
        <ul className={`${style.menuItems} ${menuopen && style.menuopen}`} 
        onClick={()=> setmenuopen(false)}>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#education">Education</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
       </div>
    </nav>
  )
}

export default Navbar
