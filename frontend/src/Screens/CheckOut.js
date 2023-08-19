import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import burger from '../Components/images/burger.jpg'
import '../Components/static files/Navbar.css'
import { Link } from 'react-router-dom'
const CheckOut = (props) => {
  return (
    <div>
        <Navbar/>
      <div className='container mt-4'>
        <h2 className='mb-4'>All Items</h2>
        <div className='row'>
            <div div className='col md-8 col-12'>
        <div className='tabel-responsive'>
            <table className='table table-bordered'>
                <thead>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src= {burger} className='thumbnail' width={50} alt ="..."/>
                            <p> Fast Food</p>
                        </td>
                        <td>
                            Rs. 899
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src= {burger} className='thumbnail' width={50} alt ="..."/>
                            <p> Fast Food</p>
                        </td>
                        <td>
                            Rs. 800
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>
                            <img src= {burger} className='thumbnail' width={50} alt ="..."/>
                            <p> Fast Food</p>
                        </td>
                        <td>
                            Rs. 999
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>3</td>
                        <td>
                            <img src= {burger} className='thumbnail' width={50} alt ="..."/>
                            <p> Fast Food</p>
                        </td>
                        <td>
                            Rs. 2099
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>4</td>
                        <td>
                            <img src= {burger} className='thumbnail' width={50} alt ="..."/>
                            <p> Fast Food</p>
                        </td>
                        <td>
                            Rs. 1899
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Total</th>
                        <th>Rs. 6696</th>
                    </tr>
                    <tr>
                        <td colSpan='4' align='right'>
                            
                            <Link  to='/Home' className='btn btn-secondary btn-sm' >Continue Shopping</Link>
                            
                             
                            <Link  to ='/OrderConfirm'className='btn btn-success ms-3 btn-sm'>Proceed</Link>
                            
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
</div>
</div>
      </div>
      <Footer/>
    </div>
  )
}

export default CheckOut
