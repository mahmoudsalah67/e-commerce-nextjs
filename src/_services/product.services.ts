import { Producttype } from "../app/_interfaces/Products";

 export async function getallproduct(): Promise<Producttype[]|null> {
  try{
const res = await  fetch("https://ecommerce.routemisr.com/api/v1/products",{cache:"force-cache"});
// const res = await  fetch("https://ecommerce.routemisr.com/api/v1/products" );
   const finaldata = await res.json();
   return finaldata.data;
   }catch(error){
    console.log(error);
    return null;
  } 
  
}
export async function getspecifiedproduct(id:string): Promise< Producttype | null> {
   
try{
 const ress = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
   const finaldataa = await ress.json();
   console.log('finaldata' , finaldataa)
   return finaldataa.data;

}catch(error){
console.log(error);
    return null;
}

}