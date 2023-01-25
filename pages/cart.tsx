import { NextPage } from 'next'
import React from 'react'
import { Navigation } from '@/components/Navigation'; 
import { ShoppingCart } from '@/components/ShoppingCart';


const Cart: NextPage = () => {

  return (
    <main>
      <Navigation/>
      <h1 className='bg-emerald-200 py-4 text-center text-zinc-600 font-semibold uppercase text-lg'>CART</h1>
      <ShoppingCart/>
    </main>
  )
}

export default Cart;
