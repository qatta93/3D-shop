import React from 'react'
import { UserIcon } from '@heroicons/react/solid'
import { ShoppingCartIcon } from '@heroicons/react/solid'

export const Navbar = () => {


  return (
    // <nav className='absolute flex flex-row justify-center top-0 right-0 px-6 py-4 text-black'>
    <nav className='flex flex-row px-6 py-4 text-zinc-600 justify-between border-b-[1px] border-zinc-600'>
      <img src="images/logo.png" alt="logo" className='h-8 w-auto'/>
      <div className='flex flex-row'>
        <UserIcon className="h-8 w-8 mx-6"/>
        {/* <p className='text-xl mr-4'>LOGIN</p> */}
        <ShoppingCartIcon className="h-8 w-8"/>
        {/* <p className='text-xl'>SHOP</p> */}
      </div>
    </nav>
  )
}
