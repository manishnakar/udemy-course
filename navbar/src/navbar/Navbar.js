import React, {useState} from 'react'
import {Menulist} from './Menulist'
import './navbar.css'
import {NavLink} from 'react-router-dom'


function Navbar() {

    const [clicked, setClicked] = useState(false);

    const onHambergerClick = () => {
            setClicked(!clicked);
        }

    const menuList = Menulist.map(({url, title}, index) => {
            return (
                <li key={index} onClick={onHambergerClick}>
                    <NavLink exact to={url} activeClassName="active">
                        {title}
                    </NavLink>
                </li>
            )
        })    

    return (
        <nav>
            <div className="logo">
                VPN<font>Lab</font>
            </div>
            <div className="menu-icon" onClick={onHambergerClick}>
                {clicked 
                ? <i className="fa fa-times"></i> 
                : <i className="fa fa-bars"></i>    
            }
                
            </div>
            <ul className={ clicked ? "menu-list" : "menu-list close"}>
                    {menuList}
            </ul>
        </nav>
    )
}

export default Navbar
