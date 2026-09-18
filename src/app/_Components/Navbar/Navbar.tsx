'use client'

import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import logo from '../../../assets/images/freshcart-logo.svg'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { getCart } from '@/_services/cart.services'
import { CartContext } from '@/app/Cartcontext/Cartcontext'
import { ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { data } = useSession()
  const { cartCount, updateCartCount } = useContext(CartContext)

  useEffect(() => {
    if (data) {
      getCart().then((res) => {
        if (res?.numOfCartItems !== undefined) {
          updateCartCount(res.numOfCartItems)
        }
      })
    }
  }, [data])

  function handlelogout() {
    signOut({ callbackUrl: '/login', redirect: true })
  }

  return (
    <nav className="shadow-sm bg-white/95 backdrop-blur-md fixed w-full z-50 top-0 border-b border-slate-100 transition-all">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} alt="fresh cart" className="h-8 w-auto" priority />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center cursor-pointer p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Nav Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row items-center p-4 md:p-0 mt-4 border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-slate-700 font-semibold hover:text-green-600 transition-colors md:p-0"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/Category"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-slate-700 font-semibold hover:text-green-600 transition-colors md:p-0"
              >
                Category
              </Link>
            </li>

            {!data && (
              <>
                <li>
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-3 text-slate-700 font-semibold hover:text-green-600 transition-colors md:p-0"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-3 text-slate-700 font-semibold hover:text-green-600 transition-colors md:p-0"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}

            {data && (
              <>
                {/* Cart Icon with Badge */}
                <li>
                  <Link
                    href="/Cart"
                    onClick={() => setIsOpen(false)}
                    className="relative flex items-center justify-center p-2 text-slate-700 hover:text-green-600 transition-colors group"
                    aria-label="Shopping Cart"
                  >
                    <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />

                    {/* Badge */}
                    <span className="absolute -top-1 -right-1.5 bg-green-600 text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-in zoom-in duration-200">
                      {cartCount}
                    </span>
                  </Link>
                </li>

                {/* Logout Button */}
                <li>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      handlelogout()
                    }}
                    className="block py-2 px-4 text-xs font-bold text-red-600 hover:text-white border border-red-200 hover:bg-red-600 rounded-lg transition-all md:ml-2"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}