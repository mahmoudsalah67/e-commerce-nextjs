 
import Link from 'next/link'
import React from 'react'
import logo from '../../../assets/images/freshcart-logo.svg'
import Image from 'next/image'
export default function Navbar() {
  return (
    
<nav className=" shadow-2xl bg-gray-300 fixed w-full z-20 top-0  ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image src={logo} alt="fresh cart" className="h-8" />
     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h14" /></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium  flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
        
        <li>
          <Link href="/" className="block hover:text-green-600  py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Home</Link>
        </li>
        <li>
          <Link href="/Category" className="block hover:text-green-600  py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Category</Link>
        </li>
        <li>
          <Link href="/Brands" className="block hover:text-green-600   py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Brands</Link>
        </li>
        <li>
          <Link href="/Cart" className="block hover:text-green-600   py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Cart</Link>
        </li>
        <li>
          <Link href="/login" className="block hover:text-green-600  py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Login</Link>
        </li>
        <li>
          <Link href="/register" className="block hover:text-green-600  py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Register</Link>
        </li>
        <li>
          <span  className="block hover:text-green-600  cursor-pointer py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Logout</span>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}
