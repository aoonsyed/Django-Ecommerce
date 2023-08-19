import React from 'react'
import './static files/Card.css'
import bg from './images/bg.jpg'
import chz from './images/chz.png'
import mcd from './images/mcd.png'
import kfc from './images/kfc.png'

const AboutUs = () => {
  return (
    
      <div class="container pt-5 my-5 z-depth-1">
  <h3 class="title"> Our Clients </h3>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="p-4">
          <div
            class="avatar w-100 white d-flex justify-content-center align-items-center"
          >
            <img
              src={bg}
              class="img-fluid rounded-circle z-depth-1"
            />
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="p-4">
          <div
            class="avatar w-100 white d-flex justify-content-center align-items-center"
          >
            <img
              src={mcd}
              class="img-fluid rounded-circle z-depth-1"
            />
          </div>
          
        </div>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="p-4">
          <div
            class="avatar w-100 white d-flex justify-content-center align-items-center"
          >
            <img
              src={chz}
              class="img-fluid rounded-circle z-depth-1"
            />
          </div>
          
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="p-4">
          <div
            class="avatar w-100 white d-flex justify-content-center align-items-center"
          >
            <img
              src={kfc}
              class="img-fluid rounded-circle z-depth-1"
            />
          </div>
          
        </div>
      </div>
    </div>
  
</div>
    
  )
}

export default AboutUs
