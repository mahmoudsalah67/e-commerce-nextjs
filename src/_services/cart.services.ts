'use server'
import { cartResponseType, ItemType } from "@/app/_interfaces/cart.types"
import { getMyUserToken } from "@/utils/Utils"



export async function getCart(): Promise<cartResponseType> {
    const token = await getMyUserToken()

 const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
      headers: {
        token: token as string,
      },
   
      next: {tags: ['getcart']}
     })

    const finell = await res.json()
    const { numOfCartItems, data: { products, totalCartPrice } } = finell

    return { numOfCartItems, products, totalCartPrice }

}