'use server'

import { getMyUserToken } from "@/utils/Utils"
import {  revalidateTag } from "next/cache"
import { revalidatePath } from "next/cache"

export  async function addproducttocart(productId:string) {
  
 const token = await getMyUserToken()
  
 
 if(token){
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
     method: 'POST',
     body: JSON.stringify({ productId }),
     headers: {
       'Content-Type': 'application/json',
      token: token as string
     },
   })


const finelresult = await res.json()
console.log('finelresult', finelresult)
if(finelresult.status === 'success'){
//  toast.success(finelresult.message , { position: 'top-right' })
revalidateTag('getcart','max-age=0') 


return finelresult.numOfCartItems
 }else{
  return false
//  toast.error(finelresult.message , { position: 'top-right' })
 }
  
}
}




export async function Removeproductfromcart(Id: string) {
  const token = await getMyUserToken()
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${Id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      token: token as string
    },
  })
    
  const finelresult = await res.json()
 
  if(finelresult.status === 'success'){
    revalidatePath('/cart') // 👈 تحديث بيانات المسار مباشرة
    return finelresult.numOfCartItems
  } else {
    return null
  }
}






export async function ChangeCount(Id: string, count: number) {
  const token = await getMyUserToken()
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${Id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      token: token as string
    },
    body: JSON.stringify({ count })
  })

  const finelresult = await res.json()

  if (finelresult.status === 'success') {
    revalidatePath('/cart')
    // حساب مجموع القطع من مصفوفة المنتجات العائدة من الـ API
    const totalQuantity = finelresult.data.products.reduce(
      (acc: number, item: any) => acc + item.count,
      0
    )
    return totalQuantity
  } else {
    return null
  }
}
