import React, { useEffect, useState } from 'react'
import './static files/Login.css'
import food from './images/food.avif'
import axios from 'axios'; 
const baseUrl = "http://localhost:8000/api/login/";

const Login = () => {
  const [userLoginData, setuserLoginData] = useState({
    email:'',
    password:''
  });
const [errorMsg, seterrorMsg] = useState("")


const submitForm =(event)=>{
  event.preventDefault();
  // console.log('submit', event.target)
  const form = event.target;
  const UserFormData = new FormData(form);
  console.log('user form data', UserFormData)
  try{
    axios.post(baseUrl, UserFormData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response)=>{
      if(response.status == 200){
        console.log('in api success response')
        localStorage.setItem('UserLoginStatus', true)
        localStorage.setItem('userId', response.data.user_id);
        window.location.href = '/Products';

      }
      else{
        seterrorMsg('Invalid email Password')
      }
    });
  }catch(error){
    console.log('error', error);
  }
}
const UserLoginStatus = localStorage.getItem('UserLoginStatus');
if (UserLoginStatus == 'true'){
  window.location.href = '/homepage';
}


 
  return (
    <div>
      <section class="vh-100" id='style'>
      <nav class="navbar navbar-light bg-light" id='nav'>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img
        src={food}
        class="me-2"
        height="20"
        alt="MDB Logo"
        loading="lazy"
      />
      <small>Foodles</small>
    </a>
  </div>
</nav>
  <div class="container py-5 h-100 ">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong bg-light text-dark bg-opacity-50" id='card'>
          <div class="card-body p-5 text-center ">

            <h1 class="mb-4" id='cl'>Sign in</h1>
            <form onSubmit={submitForm} method='POST'>
            <div class="form-outline mb-4" id='bd'>
              <input type="text" id="typeEmailX-4" class="form-control form-control-xl" name='email' value={userLoginData.email}
              onChange={(e) =>
                setuserLoginData({ ...userLoginData, email: e.target.value })
              }
              />
              <label class="form-label" for="typeEmailX-4">Email</label>
            </div>

            <div class="form-outline mb-6">
              <input type="password" id="typePasswordX-5" class="form-control form-control-xl" name='password' value={userLoginData.password}
              onChange={(e) =>
                setuserLoginData({ ...userLoginData, password: e.target.value })
              }
              />
              <label class="form-label" for="typePasswordX-4">Password</label>
            </div>
            <button class="btn btn-danger btn-lg btn-block"  id='but' type="submit">Login</button>
            </form>


            <div class="form-check d-flex justify-content-start mb-6">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            
            <div>
            <hr class="my-4"/>
<div>
<button class="btn btn-lg btn-block btn-danger mb-4" id='but' type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
</div>
           <div>
            <button class="btn btn-lg btn-block btn-danger mb-2" id='but'type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
    </div>
  )
}

export default Login
