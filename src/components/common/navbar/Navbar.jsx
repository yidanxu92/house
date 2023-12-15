import React, { useState } from "react"
import "./navbar.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"


const Navbar = () => {
    const [navList,setNavList] = useState(false)


    return(
        <>
            <header>
                <div className='container flex'>
                    <div className='logo'>
                        <img src='./images/home_icon.jpeg' alt='logo' />
                    </div>
                    <div className='nav'>
                        <ul className = {navList ? 'small' : 'flex'}>
                            {nav.map((list,index)=>(
                                <li key={index}>
                                    <Link to={list.path}>{list.text}</Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </header>
        </>

    )

}


export default Navbar