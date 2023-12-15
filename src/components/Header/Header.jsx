import React from "react"
import Heading from "../common/Heading.jsx"
import "./headermenu.css"
import { list } from '../data/Data'
import HeaderMenu from "./HeaderMenu.jsx"



const Header = ({setSortType})=>{
    return (
        <>
            <section className='header'>
                <div className='container'>
                    <Heading title=' Property Listed' subtitle='Here are the houses we have in mind'></Heading>
                    <div className='flex'>
                        <div className='box'>
                            <span>{list.length}</span><span>results</span>
                        </div>
                        <HeaderMenu setSortType={setSortType}/>
                    </div>
                </div>
            </section>
        </>
    )

}


export default Header