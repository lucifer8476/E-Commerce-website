import React from 'react'

import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Product({items, cart, setCart}) {
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

<ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>





   <div className="container my-5">
    <div className="row">
  
   {
    items.map((product)=>{
        return (
        <>  
        
        <div key={product.id} className="col-md-4 my-4">
            <div className="card" style={{width:"18rem"}}>
            <Link to={`/product/${product.id}`}
                 style={{

                     display:'flex',
                     justifyContent:'center',
                     alignItems:'center'
                    }}>

                <img src={product.imgSrc} className="card-img-top" alt="..."/>

            </Link>

<div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <button className="btn  mx-4">₹ {product.price}</button>
    <button onClick={()=>addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
     className="btn btn-warning">Add To Cart</button>
</div>
</div>

</div>
        
        
        </>
        )
    })
   }
   
   </div>
   </div>
   </>
  )
}





