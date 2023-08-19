import React from 'react'
// import { Outlet, Link } from "react-router-dom";
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'
// import Ratings from '../Components/Ratings'
const HomePage = () => {
  return (
    <div>
<Navbar/>
<Carousel/>

<Card/> 
<AboutUs/>
{/* <Ratings/> */}
<Footer/>   
    </div>
  )
}

export default HomePage

  