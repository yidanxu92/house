import React from "react"
import Heading from "../../common/Heading"
import "./banner.css"


const Banner = () => {
    console.log("Banner is called!")
    return(
        <>
            <section className='banner'>
                <div className='container'>
                    <Heading title='Welcome Home' subtitle = 'Click to see interior designs'></Heading>
                </div>
            </section>

        </>
    )
}

export default Banner