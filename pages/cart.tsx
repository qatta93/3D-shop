import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCartItem } from '../src/components/ShoppingCartItem'
import { generateUUID } from 'three/src/math/MathUtils'

const Cart: NextPage = () => {

  const getLocalStorageProducts = typeof window !== 'undefined' && window.localStorage.getItem("state");
  const parseLocalStorageProducts = getLocalStorageProducts === undefined || getLocalStorageProducts === null ? 0 : JSON.parse(getLocalStorageProducts);

  // const totalPrice = parseLocalStorageProducts.map(product => product.price);
  // console.log(totalPrice)
  // console.log(parseLocalStorageProducts)

  return (
    <main>
      <section className='p-2'>
        <Link href="/" >
          <div className='flex'>
            <Image src="/images/arrow.png" alt="arrow" height={8} width={25}  className='cursor-pointer'/>
            <p className='cursor-pointer'>HOME</p>
          </div>
        </Link>
      </section>
      <h1 className='bg-emerald-200 py-4 text-center text-zinc-600 font-semibold uppercase text-lg'>CART</h1>
      <section className='py-12 h-full w-full flex flex-col xl:flex-row xl:flex-wrap justify-center items-center'>
        <section className="w-screen">
          <div className="flex justify-center content-center my-12">
            <Image src='/images/trolley.png' width={150} height={150}/>
          </div>
          <article className="w-full sm:w-[500px] md:w-[700px] md:px-16 bg-white border-solid border-2 border-indigo-60 mx-auto pt-12 sm:px-4">
            <p className="text-center mb-4 text-slate-400 text-xl">Your shopping cart:</p>
            <p className="border-b-2 border-indigo-60 leading-[2px] text-center mb-6"></p>
            <div className="flex flex-col pt-6">
              {parseLocalStorageProducts.length === undefined && <p className="text-center mb-4 text-slate-400 text-xl text-amber-700 font-medium pb-6">Your shopping cart is empty!</p>}
              {parseLocalStorageProducts.length > 0 && parseLocalStorageProducts.map(product => <ShoppingCartItem key={generateUUID()} product={product}/>)}
            </div>
            {parseLocalStorageProducts.length > 0 &&
              <div className='pt-12 text-center mb-4 text-slate-400 text-xl'>
                <h1 className='font-bold pb-6'>TOTAL:</h1>
                <p className='shadow-inner mx-auto text-teal-400 font-bold w-32 p-3 text-center border-solid border-[1px] border-indigo-50 '>1240$</p>
                <button className='text-white bg-teal-400 my-8 py-2 px-4 rounded-xl font-medium'>GO TO PAYMENT</button>
              </div>
            }
          </article>
        </section>
      </section>
    </main>
  )
}

export default Cart;
