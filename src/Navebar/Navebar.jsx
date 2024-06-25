import React from "react";
import { createBrowserRouter,BrowserRouter,Routes,Route,RouterProvider,router} from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import './Nav.css'
import Nav from "./Nav";
import Home from "./home/Home";

import Error from './Error';
const Navebar = () => {
    const router=createBrowserRouter([
        {
            path:'/',
            element:<><Nav/><Home/></>
        },
        {
            path:'/about',
            element:<><Nav/><About/></>
        },
        {
            path:'/contact',
            element:<><Nav/><Contact/></>
        },
        {
            path:'*',
            element:<><Nav/><Error/></>
        },
    ])
    return (
        <>
        {/* <Nav/> */}
    {/* <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/all-posts" element={<About/>}/>
                <Route path="/create-post" element={<Contact/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
      */}
      <RouterProvider router={router}/>
     
        </>
    )
}
export default Navebar