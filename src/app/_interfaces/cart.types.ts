import { Producttype } from "./Products";

export type ItemType = {
  count: number;
  _id: string;
  price: number;
  product: Producttype;
}

export type cartResponseType = {
    numOfCartItems : number,
      products : ItemType[],
       totalCartPrice : number} 
