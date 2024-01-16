import React from "react"
import Heading from "../../common/Heading.jsx"
import "./photo.css"
import PhotoCard from "./PhotoCard.jsx"
import {useIconContext} from '../IconContext'
const Photo = () => {
    console.log("photo is called")
    const{selectedIcon} = useIconContext();

    return (
        <>
            <section className='recent padding'>
                <div className='container'>
                    <Heading title='Overview of the House' subtitle='Say Hi to Our New Home!' />
                    <PhotoCard selectedIcon={selectedIcon}/>
                </div>
            </section>
        </>
    )
}

export default Photo