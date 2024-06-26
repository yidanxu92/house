import React from "react"
import Navbar from "../common/navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import Furniture from "../furniture/furniturePage"
import {LightboxProvider} from '../LightboxContext'
import { UserSelectionProvider } from "../UserSelectionContext"


const Page = () =>{
    console.log("Page is called!")
    return(
        <>
            <Router>
                <UserSelectionProvider>
                <LightboxProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/house' element={<Home />} />
                        <Route path='/furniture' element={<Furniture />} />
                    </Routes>
                </LightboxProvider>
                </UserSelectionProvider>    

            </Router>

        </>
    )
}

export default Page