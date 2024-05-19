import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';


export default function SearchItems({ cart, setCart}) {
  console.log(useParams());
  const {term} = useParams();
  const [filterData, SetFilterData] = useState([]);
  
  

  useEffect(() =>{
    const filteredData=()=>{
        const data = items.filter((a)=>a.title.toLowerCase().includes(term.toLocaleLowerCase()));
        // console.log(data)
        SetFilterData(data)
    }
    filteredData();
  },[term])
  return (
<>
    <Product items={filterData} cart={cart} setCart={setCart}  />

</> 
  )
}
