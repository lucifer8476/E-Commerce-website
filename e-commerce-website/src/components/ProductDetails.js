import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetails({cart, setCart}) {
    const {id} = useParams()

    const [product,setProduct] = useState({})
    const [relatedProduct,setRelatedProduct] = useState([])

    useEffect(() =>{
        const filterProduct = items.filter((product)=>product.id == id)
        // console.log(filterProduct)
        setProduct(filterProduct[0]);
        const relatedProduct = items.filter((p)=>p.category === product.category)
        // console.log("relatedProducts=", relatedProduct)
        setRelatedProduct(relatedProduct)
    },[id, product.category])

    const addToCart = (id,price,title,description,imgSrc) =>{
        const obj= {
            id,price,title,description,imgSrc
        }
        setCart([...cart,obj])
        

        toast.success('Item added to cart', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });


    }

  return (
   <>
   <div className="container con">
    
    <div className="img">
        <img src={product.imgSrc} alt="" />
    </div>
    
    <div className='text-center'>
    <h2 className="card-title">{product.title}</h2>
    <p className="card-text">{product.description}</p>
    <button className="btn btn-primary mx-4">₹ {product.price}</button>
    <button className="btn btn-warning" onClick={()=>addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}>Add To Cart</button>
    </div>
   </div>

<h1 className='text-center'>Related Products</h1>   
   <Product items={relatedProduct} cart={cart} setCart={setCart} />
   
   </>
  )
}
