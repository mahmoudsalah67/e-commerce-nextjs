"use client"
import React from 'react'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from './Registerschema'
import { RegisterData } from './typeregister'
import { handleregister } from './server.action'
 import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
    


function Registerfrom() {

const router = useRouter()


     const form  = useForm( 
        {
        resolver:zodResolver(schema)
        }
     )
   const {control , handleSubmit} = form

async function mysubmit(data:RegisterData){
// console.log('data',data);

  const Output = await handleregister(data  )
   if(Output === true){
 toast.success('Registeration successful', {
   duration: 2000,
  position: 'top-right',

  
});
router.push('/auth/login')
   }else{
    toast.error(Output, {
      description: 'Please check your information and try again.',
      duration: 2000,
      position: 'top-right',
    });
  }
}

   return (
       
    <Form {...form}>





          <form onSubmit={handleSubmit(mysubmit)}>
            
             <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel >Username</FormLabel>
                  <FormControl>
                   
                    <Input {...field} className="border border-gray-300 " type='text' />
                  </FormControl>
                
                  <FormMessage />
                </FormItem>
              )}
            />

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


             <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                   
                    <Input {...field}  className="border border-gray-300 " type="password" />
                  </FormControl>
                
                  <FormMessage />
                </FormItem>
              )}
            />




             <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                   
                    <Input {...field}  className="border border-gray-300 " type="tel" />
                  </FormControl>
                
                  <FormMessage />
                </FormItem>
              )}
            />  

            {/* زر الإرسال */}
            <Button type="submit" className=" mt-4">Submit</Button>
          </form>
    </Form>
  )
}

export default Registerfrom