'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { addproducttocart } from '../../Cart/cart.actions'
import { toast } from 'sonner'
 
export default   function AddProductbtn({ id }: { id: string }) {

async function  handleAddToCart() {
 const isAdded = await addproducttocart( id)

if(isAdded){
  toast.success('Product added to cart successfully', { position: 'top-right' })
}else{
  toast.error('Failed to add product to cart', { position: 'top-right' })
}
}

  return (
    <div>   <Button onClick={handleAddToCart} className=' cursor-pointer px-4 py-2 my-2 rounded  '>add to cart</Button>
</div>
  )
}
