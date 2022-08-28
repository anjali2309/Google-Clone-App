import React from 'react'
import {Link} from 'react-router-dom'
import { Search } from './Search';

export const Navbar = ({darkTheme, setDarkTheme})=>{

    function changeTheme(e) {
        //console.log('entered');
        e.preventDefault();
        setDarkTheme(!darkTheme);
      }
    

    return (
        <div className="navbar">
            <div className="nav">
                <Link to="/">
                    <p className= "Name">Google🔍</p>
                </Link>

                <button type = "button" onClick = {changeTheme} className="theme">
                    {darkTheme? 'Light💡': 'Dark🌙'}
                </button>
            </div>
            <Search/>
        </div>
    )
}
