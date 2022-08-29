import { NextPage } from 'next'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCartItem } from '../src/components/ShoppingCartItem'
import { generateUUID } from 'three/src/math/MathUtils'
import { Context } from "../context/AppContext";
import furniture from "../public/api/furnitureDetails.json"
import { getProducts, getUsers } from '@/components/helpers/crud'
import { useSession } from 'next-auth/react';


const Cart: NextPage = () => {
  const { data: session } = useSession();

  //@ts-ignore
  const { state } = useContext(Context);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([])
  const [productsDatabase, setProductsDatabase] = useState([])
  const [price, setPrice] = useState(0)

  const userId = session && users.length > 0 && users.filter(user => session.user.email === user.email)[0].id;
  const getUserProducts = productsDatabase.filter(item => item.userId === userId)

  const allProducts = products.concat(getUserProducts);
  console.log(allProducts)


  const productsQuantityPrice = state.length > 0 && state.map(item => {
    const itemPrice = furniture.filter(product => product.id === item.products)[0].price.slice(0, -1);
    return Number(itemPrice) * item.quantity;
  });

  const totalPrice = productsQuantityPrice.length > 0 && productsQuantityPrice.reduce((a:number, b:number) => a + b, 0);

  useEffect(() => {
    getProducts(setProductsDatabase)
    getUsers(setUsers);
    setPrice(totalPrice)
    setProducts(state)
  }, [state])

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
          <article className="w-full md:mb-12 lg:mb-20 sm:w-[500px] md:w-[700px] md:px-16 bg-white border-solid border-2 border-indigo-60 mx-auto pt-12 sm:px-4">
            <p className="text-center md:mb-4 text-slate-400 text-xl">Your shopping cart:</p>
            <p className="border-b-2 border-indigo-60 leading-[2px] text-center mb-6"></p>
            <div className="flex flex-col pt-6">
              {state.length === 0 && <p className="text-center mb-4 text-slate-400 text-xl text-amber-700 font-medium pb-6">Your shopping cart is empty!</p>}
              {products.length > 0 && products.map(product => <ShoppingCartItem key={generateUUID()} product={product}/>)}
              {getUserProducts.length > 0 && getUserProducts.map(product => <ShoppingCartItem key={generateUUID()} product={product}/>)}
            </div>
            {state.length !== 0 &&
              <div className='pt-12 text-center mb-4 text-slate-400 text-xl'>
                <h1 className='font-bold pb-6'>TOTAL:</h1>
                <p className='shadow-inner mx-auto text-teal-400 font-bold w-32 p-3 text-center border-solid border-[1px] border-indigo-50 '>{price} $</p>
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
