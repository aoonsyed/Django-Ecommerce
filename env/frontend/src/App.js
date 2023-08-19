// import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter , Routes, Route, Switch,Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import Card from './Components/Card'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import Login from './Components/Login'
import HomePage from "./Screens/HomePage";
import Products from "./Screens/Products";
import CheckOut from "./Screens/CheckOut";
import Register from "./Components/Register";
import OrderConfirm from "./Components/OrderConfirm";
function App() {
 return(
 <>
 <BrowserRouter>
      <switch>
      <Routes>
        <Route path="/Homepage" element={<HomePage />}></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="Register" element={<Register/>}></Route>
        <Route path="Products" element={<Products/>}></Route>
        <Route path="CheckOut" element={<CheckOut/>}></Route>
        <Route path="OrderConfirm" element={<OrderConfirm/>}></Route>
      </Routes>
      </switch>
    </BrowserRouter>




</>
 )
}

export default App;
