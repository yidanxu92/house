import React from "react"
import Banner from "./banner/Banner"
import Room from "./room/Room"
import Photo from "./photo/Photo"
import { IconProvider } from './IconContext'

const Home = () => {
    return (
        <IconProvider>
            <>
                <Banner />
                <Room />
                <Photo />

            </>

        </IconProvider>
    )
}


export default Home

