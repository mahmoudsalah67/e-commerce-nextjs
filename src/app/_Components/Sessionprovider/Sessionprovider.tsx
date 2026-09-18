'use client'
import { CartContextProvider } from '@/app/Cartcontext/Cartcontext'
 import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

function Sessionprovider({children}: {children: ReactNode}) {
  return (
    <SessionProvider>

      
      {children}
 
    </SessionProvider>
  )
}

export default Sessionprovider