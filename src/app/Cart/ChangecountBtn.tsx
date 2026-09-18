'use client'

import React, { useContext } from 'react'
import { Button } from '../../../components/ui/button'
import { ChangeCount } from './cart.actions'
import { CartContext } from '@/app/Cartcontext/Cartcontext'

export default function ChangecountBtn({
  isincremnt = false,
  id,
  newCount,
}: {
  isincremnt?: boolean
  id: string
  newCount: number
}) {
  const { updateCartCount } = useContext(CartContext)

  async function handlechangecount() {
    const resCount = await ChangeCount(id, newCount)

    if (resCount !== null && resCount !== undefined) {
      updateCartCount(resCount)
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handlechangecount}
      className="h-7 w-7 cursor-pointer rounded-lg p-0 text-slate-600 hover:text-slate-900 hover:bg-white shadow-xs"
    >
      {isincremnt ? '+' : '-'}
    </Button>
  )
}