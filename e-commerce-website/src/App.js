import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import SearchItems from './components/SearchItems';
import Cart from './components/Cart';
import { items } from './components/Data';


function App() {
const [data, setData] = useState([...items])
const [cart, setCart] = useState([])
  return (
    <> 
  

    <BrowserRouter>
    <div style={{height:"100vh",width:"100vw"}}>
    <Navbar cart={cart} setData={setData}/>
    <Routes>
      <Route path='/' element={<Product cart={cart} setCart={setCart} items={data} />}/>
      <Route path='/product/:id' element={<ProductDetails setCart={setCart} cart={cart}/>}/>
      <Route path='/search/:term' element={<SearchItems setCart={setCart} cart={cart}/>}/>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
    </Routes>
    </div>
    
    </BrowserRouter>
    </>
  );
}

export default App;
