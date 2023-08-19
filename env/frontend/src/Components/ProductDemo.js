import React from 'react'
import logo11 from './images/logo11.jpg'
import { Link } from 'react-router-dom'
const ProductDemo = (props) => {
    return (
                <div className='col-12 col-md-3 col-mb-4'>
                    <img src={logo11} class='img-thumbnail' alt="" />
                    <h1 className='card-title'>{props.title}</h1>
                    <h3 className='card-title text-muted'>{props.price}</h3>
                    <h2 class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h2>
                    <p className='mt-3'>
                        <button title='Add to Cart' className='btn btn-success '><i className='fa-solid fa-cart-plus'></i></button>
                        <button title='Add to Wishlist' className='btn btn-danger ms-1'><i className='fa-solid fa-heart'></i></button>
                        <button title='Buy Now' className='btn btn-info  ms-1'><i className='fa-solid fa-bag-shopping'></i></button>
                    </p>
                </div>
    )
}

export default ProductDemo
