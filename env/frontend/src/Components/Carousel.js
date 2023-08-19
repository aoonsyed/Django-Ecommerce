import React from 'react'
import logo11 from './images/logo11.jpg'
import logo from './images/logo.jpg'
import go1 from './images/go1.jpg'
import './static files/Navbar.css'

const Carousel = () => {
  return (
   
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"  class ="active" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"class ="active" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="100">
      <img src={logo11} class="d-block" width={1600} height={900} alt="..."></img>
  
    </div>
    <div class="carousel-item" data-bs-interval="200">
      <img src={logo} class="d-block" height={900} width={1600} alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={go1} class="d-block w-90" width={1600} height={900} alt="..."></img>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Carousel
