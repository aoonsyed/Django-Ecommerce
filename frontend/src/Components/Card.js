import React from 'react'
import './static files/Card.css'
import pizza from './images/pizza.jpg'
import burger from './images/burger.jpg'
import karahi from './images/karahi.jpg'
import logo11 from './images/logo11.jpg'
import b2 from './images/b2.jpg'
import biryani from './images/biryani.jpg'

// import Footer from './Components/Footer'

const Card = () => {
  return (
    <div>
      <div class="container">

<h3 class="title"> Featured Cuisines </h3>

<div class="products-container">
   <div class="product" data-name="p-1">
      <img src={b2} alt=""/>
      <h3>English Cuisines</h3>
      </div>

   <div class="product" data-name="p-2">
      <img src={biryani} alt=""/>
      <h3>Desi Cuisines</h3>
      </div>
   <div class="product" data-name="p-3">
      <img src={pizza} alt=""/>
      <h3>Italian Cuisines</h3>
      </div>
    
   <div class="product" data-name="p-4">
      <img src={burger} alt=""/>
      <h3>Fast Food</h3>
      </div>
 
   <div class="product" data-name="p-5">
      <img src={logo11} alt=""/>
      <h3>Fast Food</h3>
      </div>
     
   <div class="product" data-name="p-6">
      <img src={karahi} alt=""/>
      <h3>Desi Food</h3>
   </div>

</div>
</div>


<div div class="products-preview">

<div class="preview" data-target="p-1">
   <i class="fas fa-times"></i>
   <img src="images/1.png" alt=""/>
   <h3>organic strawberries</h3>
   <div class="stars">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
      <span>( 250 )</span>
   </div>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
   <div class="price">$2.00</div>
   <div class="buttons">
      <a href="#" class="buy">buy now</a>
      <a href="#" class="cart">add to cart</a>
   </div>
</div>

<div class="preview" data-target="p-2">
   <i class="fas fa-times"></i>
   <img src="images/2.png" alt=""/>
   <h3>organic onions</h3>
   <div class="stars">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
      <span>( 250 )</span>
   </div>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
   <div class="price">$2.00</div>
   <div class="buttons">
      <a href="#" class="buy">buy now</a>
      <a href="#" class="cart">add to cart</a>
   </div>
</div>

<div class="preview" data-target="p-3">
   <i class="fas fa-times"></i>
   <img src="images/3.png" alt=""/>
   <h3>organic tomatoes</h3>
   <div class="stars">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
      <span>( 250 )</span>
   </div>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
   <div class="price">$2.00</div>
   <div class="buttons">
      <a href="#" class="buy">buy now</a>
      <a href="#" class="cart">add to cart</a>
   </div>
</div>

<div class="preview" data-target="p-4">
   <i class="fas fa-times"></i>
   <img src="images/4.png" alt=""/>
   <h3>organic brinjal</h3>
   <div class="stars">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
      <span>( 250 )</span>
   </div>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
   <div class="price">$2.00</div>
   <div class="buttons">
      <a href="#" class="buy">buy now</a>
      <a href="#" class="cart">add to cart</a>
   </div>
</div>

<div class="preview" data-target="p-5">
   <i class="fas fa-times"></i>
   <img src="images/5.png" alt=""/>
   <h3>organic broccoli</h3>
   <div class="stars">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
      <span>( 250 )</span>
   </div>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
   <div class="price">$2.00</div>
   <div class="buttons">
      <a href="#" class="buy">buy now</a>
      <a href="#" class="cart">add to cart</a>
   </div>
</div>

<div div class="preview" data-target="p-6">
   <i class="fas fa-times"></i>
   <img src="images/6.png" alt=""/>
   <h3>organic potatoes</h3>
   <div class="stars">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
      <span>( 250 )</span>
   </div>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
   <div class="price">$2.00</div>
   <div class="buttons">
      <a href="#" class="buy">buy now</a>
      <a href="#" class="cart">add to cart</a>
   </div>
</div>
</div>
</div>
  )
}

export default Card
