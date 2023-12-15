import React from 'react'
import RoomCard from './RoomCard'
import "./room.css"
import Heading from "../../common/Heading.jsx"
import {useIconContext} from '../IconContext'


const Feature = () =>{
    const { selectIcon } = useIconContext();
    const handleIconClick = (image) => {
        selectIcon(image);
    }

    return(
        <>
            <section className='featured background'>
                <div className='container'>
                    <Heading title='Choose The Room' subtitle='All Types of Rooms in the house'/>
                    <RoomCard clickIcon={handleIconClick}/>
                </div>
            </section>
        </>
    )
}


export default Feature