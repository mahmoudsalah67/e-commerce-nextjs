'use client';

import { createContext, ReactNode, useState } from "react";


export const CartContext = createContext({cartCount: 0 , updateCartCount: (x: number) => {}});


export function CartContextProvider({children}: {children : ReactNode}){


    const [cartCount,setCartcount] = useState(0);

    function updateCartCount(newCount: number){
        setCartcount(newCount)
    }

    return <CartContext.Provider value={{cartCount , updateCartCount}}>
        {children}
    </CartContext.Provider> 

}