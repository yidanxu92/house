import React from "react"
import Navbar from "../common/navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import Furniture from "../furniture/furniturePage"


const Page = () =>{
    console.log("Page is called!")
    return(
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/furniture' element={<Furniture />} />

                </Routes>
            </Router>

        </>
    )
}

export default Page