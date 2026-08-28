// 'use server'

// import { cookies } from "next/headers";
// import { Logindata } from "./typelogin";


// export async function handleLogin(data: Logindata)  {
 


//   try{
//     const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin',{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify(data),

// })

// const result = await res.json()
// console.log('result',result);

// // if(result.statusMsg === 'fail'){
// //     return false
// // } else{
// //     return true
// // }

// // return result

// if(result.message === 'success'){

//    const cookie = await cookies();
//    cookie.set('user-name' , result.token,{
//     httpOnly:true,
//     sameSite:'strict',
//     maxAge: 60 * 60 * 24 * 7, // 1 week
//    });
//     return true
// }else{
//     return result.message
// }

// } catch (error) {
//     console.error('Error:', error);
// }
// }