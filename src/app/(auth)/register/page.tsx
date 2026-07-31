import { Button } from '@/components/ui/button'
import {  Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React from 'react'

export default function  Register() {
  return (
    <div className='mt-19 px-30'>Register:
    
    
    
    <Form >



          <form >
            
            {/* الهيكل اللي أنت عايزه بالظبط (Anatomy) */}
            <FormField
              control={}
              name="exampleField"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                   
                    <input type="text" placeholder="shawn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* زر الإرسال */}
            <Button type="submit" className="w-full mt-4">Submit</Button>
          </form>
    </Form>
         
    </div>
  )
}
