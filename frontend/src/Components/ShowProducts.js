import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import biryani from  './images/biryani.jpg'
import axios from 'axios'
import './static files/Navbar.css'
const ShowProducts = () => {
    
    const [products, setProducts] = useState([])
    const [cartButtonStatus, setcartButtonStatus] =useState(false)

    const getProducts = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/products/')
        setProducts(response.data)
    }
   const cartAddButtonHandler =()=> {
    setcartButtonStatus(true);
   }
   const cartRemoveButtonHandler =()=> {
    setcartButtonStatus(false);
   }

    useEffect(() => {
        getProducts();
    },[])
  return (
 
      <div> 
        <h1 style={{textAlign: "center", marginTop:"5px"}}>All Products</h1>
        <div className='products-card-info'>
            {
                products.map((product, index) => (
                    <div>
                         <div class="card mp-4 rounded shadow-x-lg products-card-info" style={{width:"28rem", height:"28rem"}}>
  
  {/* <img src={biryani} class="card-img-top" alt="..."/> */}
  <div class="card-body">
      <h2 class="card-title">{product.title}</h2>
      <p>{product.category} </p>   
      <p class="card-text">{product.detail} </p>
      <a to="/CheckOut" class="btn btn-primary">{product.price}</a>
      {!cartButtonStatus &&
        <Link to="/Products" type='button' onClick={cartAddButtonHandler} class="btn btn-primary ms-1">Add to Cart</Link>
      }
       {cartButtonStatus &&
        <Link to="/Products" type='button' onClick={cartRemoveButtonHandler} class="btn btn-warning ms-1">Remove From Cart</Link>
      }
        </div>
             
                                </div>
      
                        </div>
                ))
            }
        </div>
      </div>
  
  );
};

export default ShowProducts;
