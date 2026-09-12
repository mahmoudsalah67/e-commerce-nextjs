'use server'

import { getMyUserToken } from "@/src/utils/Utils"
 



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
return true
 }else{
  return false
//  toast.error(finelresult.message , { position: 'top-right' })
 }
  
}
}