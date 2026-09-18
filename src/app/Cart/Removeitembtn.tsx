'use client'

import React, { useContext } from 'react'
import { Button } from '../../../components/ui/button'
import { Trash2 } from 'lucide-react'
import { Removeproductfromcart } from './cart.actions'
import { CartContext } from '../Cartcontext/Cartcontext'
import { toast } from 'sonner'
  
export default function RemoveItemBtn({ id }: { id: string }) {
  
  const {updateCartCount} =  useContext(CartContext) // Ensure you have the CartContext imported and used correctly
async function handleRemoveItem() {
 
    // Implement the logic to remove the item from the cart
const output = await Removeproductfromcart(id)

    if(output == null){
      toast.error('Failed to remove item from cart', { position: 'top-right' })
    }else{
      updateCartCount(output) // Update the cart count in the context
      toast.success('Item removed from cart', { position: 'top-right' })
    }
    await Removeproductfromcart(id)
 }   

 return (
 <Button
onClick={handleRemoveItem}
                  variant="ghost"
                  size="icon"
                  className="text-red-500 cursor-pointer hover:text-red-600 hover:bg-red-50 rounded-xl h-9 w-9 shrink-0 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
    </Button>)
}
