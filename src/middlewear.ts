import { getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import React from 'react'

export default async function middlewear(req:NextRequest) {

const jwt = await getToken({req})

console.log('jwt' , jwt)

if(jwt){
    return NextResponse.next()
} 



    return NextResponse.redirect(`${process.env.MY_DOMAIN}/login`)

 


}


export const config ={
matcher: ['/cart']
}   
