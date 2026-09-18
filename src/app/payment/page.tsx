import React from 'react'
import { Input } from '../../../components/ui/input'
import { Label } from '@radix-ui/react-label'

export default function Payment() {
  return (
    <div className='w-1/2 mx-auto mt-19'>
     <div>

   <Label>City</Label>
        <Input type="text" />

     </div>
     <div>

   <Label>Phone</Label>
        <Input type="tel" />

     </div>
     <div>

   <Label>Details</Label>
        <Input type="text" />

     </div>
    </div>
  )
}
