import React, { useContext, useEffect, useState } from 'react'
import { ShoppingCartItem } from './ShoppingCartItem'
import { generateUUID } from 'three/src/math/MathUtils'
import { Context } from "../../context/AppContext";
import furniture from "../../public/api/furnitureDetails.json"
import { useSession } from 'next-auth/react';
import { getProducts, getUsers } from '@/components/helpers/crud'
import { User, ProductInState, ProductInDatabase, FurnitureDetailsProps } from '@/components/types/index'
import Image from 'next/image'

export const ShoppingCart = () => {
  const { data: session } = useSession();

  //@ts-ignore
  const { state } = useContext(Context);
  const [users, setUsers] = useState<User[]>([]);
  const [products, setProducts] = useState<ProductInState[]>([]);	  
  const [productsDatabase, setProductsDatabase] = useState<ProductInDatabase[]>([])
  const [price, setPrice] = useState<number>(0)
  const [priceUser, setPriceUser] = useState<number>(0)

  const userId = session && users.length > 0 && users.filter((user:User) => session.user.email === user.email)[0].id;
  const getUserProducts = productsDatabase.filter((item:ProductInDatabase) => item.userId === userId)

  const productsQuantityPrice = state.length > 0 && state.map((item:ProductInState) => {
    const itemPrice = furniture.filter((product:FurnitureDetailsProps) => product.id === item.products)[0].price.slice(0, -1);
    return Number(itemPrice) * item.quantity;
  });

  const totalPrice = productsQuantityPrice.length > 0 && productsQuantityPrice.reduce((a:number, b:number) => a + b, 0);

  const userProductsQuantityPrice = getUserProducts.length > 0 && getUserProducts.map(item => {
    const itemPrice = furniture.filter((product:FurnitureDetailsProps) => product.id === item.products)[0].price.slice(0, -1);
    return Number(itemPrice) * item.quantity;
  });

  const totalUserPrice = userProductsQuantityPrice.length > 0 && userProductsQuantityPrice.reduce((a:number, b:number) => a + b, 0);

  useEffect(() => {
    setProducts(state)
    setPrice(totalPrice)
  }, [state])

  useEffect(() => {
    getProducts(setProductsDatabase)
    getUsers(setUsers);
    setPriceUser(totalUserPrice)
  }, [])

  return (
    <section className='py-12 h-full w-full flex flex-col xl:flex-row xl:flex-wrap justify-center items-center'>
      <section className="w-screen">
        <div className="flex justify-center content-center my-12">
          <Image src='/images/trolley.png' width={150} height={150}/>
        </div>
        <article className="w-full md:mb-12 lg:mb-20 sm:w-[500px] md:w-[700px] md:px-16 bg-white border-solid border-2 border-indigo-60 mx-auto pt-12 sm:px-4">
          <p className="text-center md:mb-4 text-slate-400 text-xl">Your shopping cart:</p>
          <p className="border-b-2 border-indigo-60 leading-[2px] text-center mb-6"></p>
          <div className="flex flex-col pt-6">
            {state.length === 0 && <p className="text-center mb-4 text-xl text-amber-700 font-medium pb-6">Your shopping cart is empty!</p>}
            {!session && products.length > 0 && products.map((product:ProductInState) => <ShoppingCartItem key={generateUUID()} product={product}/>)}
            {session && getUserProducts.length > 0 && getUserProducts.map((product:ProductInDatabase) => <ShoppingCartItem key={generateUUID()} product={product}/>)}
          </div>
          {state.length !== 0 &&
            <div className='pt-12 text-center mb-4 text-slate-400 text-xl'>
              <h1 className='font-bold pb-6'>TOTAL:</h1>
              <p className='shadow-inner mx-auto text-teal-400 font-bold w-32 p-3 text-center border-solid border-[1px] border-indigo-50 '>{session ? priceUser : price}$</p>
              <button className='text-white bg-teal-400 my-8 py-2 px-4 rounded-xl font-medium'>GO TO PAYMENT</button>
            </div>
          }
        </article>
      </section>
    </section>
  )
}
