import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsCartCheckFill } from "react-icons/bs";

export default function Navbar({setData, cart}) {
const location = useLocation();
const navigate = useNavigate();

const [searchTerm,setSearchTerm] = useState("")

  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    setData(element)
  }

  const filterByPrice = (price)=>{
    const element = items.filter((product)=>product.price <= price)
    setData(element)
  }

  const filterByPrice1 = (price)=>{
    const element = items.filter((product)=>product.price > price)
    setData(element)
  }

 const handleSubmit = (e)=>{
  e.preventDefault();
  navigate(`/search/${searchTerm}`)
  
 }

  return (
    <> 
    <header className='sticky-top'>
        <div className="nav-bar">
            <Link to="/" className="brand">E-cart</Link>


            <form onSubmit={handleSubmit} className="search-bar">
                <input  value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
                type="text" placeholder='Search Products' />
            </form>


            <Link to="/cart" className="cart">

            <button type="button" className="btn btn-primary position-relative" style={{width:"80px"}}>
                    <BsCartCheckFill/>
             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                     {cart.length}
             
             </span>
            </button>

            </Link>

           
<div className="btn-group">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" >
  <i className="fa-solid fa-filter fa-1x"></i> 
  </button>
  <ul className="dropdown-menu">
    <li><a onClick={()=>setData(items)} className="dropdown-item" href="#">No Filter</a></li>
    <li><a onClick={()=>filterByCategory('mobiles')} className="dropdown-item" href="#">Mobiles</a></li>
    <li><a onClick={()=>filterByCategory('laptops')} className="dropdown-item" href="#">Laptops</a></li>
    <li><a onClick={()=>filterByCategory('tablets')} className="dropdown-item" href="#">Tablets</a></li>
    <li><a onClick={()=>filterByPrice(19999)} className="dropdown-item" href="#">{"<="}19999</a></li>
    <li><a onClick={()=>filterByPrice(29999)} className="dropdown-item" href="#">{"<="}29999</a></li>
    <li><a onClick={()=>filterByPrice(49999)} className="dropdown-item" href="#">{"<="}49999</a></li>
    <li><a onClick={()=>filterByPrice1(49999)} className="dropdown-item" href="#">{">"}49999</a></li>
  </ul>
</div>
 
        </div>

          {/* {
            location.pathname == "/" &&(

           <div className="nav-bar-wrapper">
             
              <div onClick={()=>setData(items)} className="items">No Filter</div>
              <div onClick={()=>filterByCategory('mobiles')} className="items">Mobiles</div>
              <div onClick={()=>filterByCategory('laptops')} className="items">Laptops</div>
              <div onClick={()=>filterByCategory('tablets')} className="items">Tablets</div>
              <div onClick={()=>filterByPrice(19999)} className="items">{"<="}19999</div>
              <div onClick={()=>filterByPrice(29999)} className="items">{"<="}29999</div>
              <div onClick={()=>filterByPrice(49999)} className="items">{"<="}49999</div>
              <div onClick={()=>filterByPrice1(69999)} className="items">{">"}49999</div>
              

           </div>
        
            ) */}
          


              




    </header>
    
    
    </>
  )
}
