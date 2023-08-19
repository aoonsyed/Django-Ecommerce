import React from 'react'
import './static files/Navbar.css'
import {  Link } from "react-router-dom";
import Login from './Login';
import Register from './Register';
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" id='navigationBar'>
  <div class="container-fluid">
    <a class="navbar-brand" href="Home">FoodPanda</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Products">Products</Link>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Restaurants</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link " aria-disabled="true" to="/Login">Login</Link>
         
        </li>
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/Register">Register</Link>
         
        </li>
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/CheckOut">My Cart {4}</Link>
         
        </li>
      </ul>
      <form class="d-flex" role="search">
        
        
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        </form>
        <button type="button" class="btn " >Search</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
