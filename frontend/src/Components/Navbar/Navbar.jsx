import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import shopping_bag from '../Assets/shopping_bag.jpg'

const Navbar = () => {

const [menu,setMenu]= useState("shop")



  return (
    <div   className='navbar'>
   <div className='nav-logo'>
    <img src='{logo}' alt=''></img>
    <p style={{textAlign:'center'}}>Luxe</p>
    </div>
    <ul  className='nav-menu'>
      <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu('skincare')}}><Link style={{textDecoration: 'none'}} to='/skincare'>SkinCare</Link>{menu==='skincare'?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu('makeup')}}><Link style={{textDecoration: 'none'}} to='/makeup'>MakeUp</Link>{menu==='makeup'?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu('haircare')}}><Link style={{textDecoration: 'none'}}to='/haircare'>HairCare</Link>{menu==='haircare'?<hr/>:<></>}</li>
      
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={shopping_bag} alt='Bag' height='50px' width='60px'></img></Link>
        <div className='nav-cart-count'>0 </div>

      </div>


   </div>
     

  
  )    
}
export default Navbar