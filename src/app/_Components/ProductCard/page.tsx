 import React from 'react'
import { Producttype } from '../../_interfaces/Products'
import Link from 'next/link'

 export default function ProductCard({ product }: { product: Producttype }) {
  return (
    <div className=" p-4 rounded-lg hover:bg-gray-200 shadow-md hover:shadow-lg transition-shadow transition-all duration-600">
      <img src={product.imageCover} alt={product.title} className="w-full" />
      <h2>{product.title.split(' ', 3).join(' ')}</h2>
      <p>price: ${product.priceAfterDiscount ? 
        <>
        <span className='line-through text-red-700 me-2'>{product.price}</span>
         
        <span >{product.priceAfterDiscount}</span> 
        </>
        : <span>{product.price}</span>}</p>
        <p>{product.ratingsAverage} <i className='fa-solid fa-star text-yellow-400'></i></p>


      <Link href={`/productdetails/${product.id}`}>
        <button className="bg-green-500 cursor-pointer text-white px-4 py-2 my-2 rounded hover:bg-green-800 duration-500">view Details</button>
   </Link>
    </div>
  )
}