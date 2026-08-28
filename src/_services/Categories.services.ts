import { categorytype } from "../app/_interfaces/Products";

export async function getallcategories(): Promise<null | categorytype[]> {
  try{
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories");
    const finaldata = await res.json();
     return finaldata.data;
  }catch(error){
    console.log(error);
    return null;
  }
}