export type Producttype = {
  id: string;
  title: string;
  imageCover: string;
  price: number;
  description: string;
  brand: brandtype;
  category:categorytype;
  ratingsAverage: number;
  priceAfterDiscount?: number;
}
export type categorytype = {
    
    _id: string;
    name: string;
    slug: string;
    image: string;
}
export type brandtype = {
    id: string;
    name: string;
    slug: string;
    image: string;
}

