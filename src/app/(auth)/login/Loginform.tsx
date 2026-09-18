"use client"
import React from 'react'

 
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Loginschema } from './Loginschema'
import { Logindata } from './typelogin'
// import { handleLogin} from './Login.server.action'
 import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Form,  FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../components/ui/form'
import { Input } from '../../../../components/ui/input'
import { Button } from '../../../../components/ui/button'
    


function Loginfrom() {

const router = useRouter()


     const form  = useForm( 
        {
        resolver:zodResolver(Loginschema)
        }
     )
   const {control , handleSubmit} = form

async function mysubmit(data:Logindata){
// console.log('data',data);


// signIn('credentials', {email: data.email, password: data.password} )
const res = await signIn('credentials', {...data , redirect: false} )

// console.log('res',res);

if(res?.ok){
   toast.success('Login successful', {
   duration: 2000,
  position: 'top-right',
});
// router.push('/')
window.location.href = '/' // Refresh the page to reflect the login state

}
else{
    toast.error('Login failed', {
       duration: 2000,
      position: 'top-right',
    });
}





//   const Output = await handleLogin(data  )
//    if(Output === true){
//  toast.success('Login successful', {
//    duration: 2000,
//   position: 'top-right',
// });

// router.push('/')
//    }else{
//     toast.error(Output, {
//        duration: 2000,
//       position: 'top-right',
//     });
//   }
}

   return (
       
    <Form {...form}>





          <form onSubmit={handleSubmit(mysubmit)}>
            

             <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                   
                    <Input {...field}  className="border border-gray-300 " type='email'/>
                  </FormControl>
                
                  <FormMessage />
                </FormItem>
              )}
            />


             <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                   
                    <Input {...field}  className="border border-gray-300 " type="password" />
                  </FormControl>
                
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* زر الإرسال */}
            <Button type="submit" className=" mt-4">Login</Button>
          </form>
    </Form>
  )
}

export default Loginfrom