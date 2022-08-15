import React, { useEffect, useContext, useState } from 'react'
import { UserIcon } from '@heroicons/react/solid'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Context } from "../../context/AppContext";

export const Navbar = () => {
  const { data: session } = useSession();
  //@ts-ignore
  const { state, dispatch } = useContext(Context);
  
  const getLocalStorageProducts = typeof window !== 'undefined' && window.localStorage.getItem("state");
  const initialProductsAmount = getLocalStorageProducts === undefined || getLocalStorageProducts === null ? 0 : JSON.parse(getLocalStorageProducts).length;
  console.log(getLocalStorageProducts === undefined || getLocalStorageProducts === null ? 0 : JSON.parse(getLocalStorageProducts))

  const [ productsAmount, setProductsAmount ] = useState<number>(initialProductsAmount)
  
  useEffect(() => {
    if(state.length === 1){
      return setProductsAmount(1)
    }
    setProductsAmount(initialProductsAmount)
  }, [state]);

  console.log(productsAmount)
  
  return (
    <nav className='px-6 pt-4 text-zinc-600 border-b-[1px] border-zinc-600 bg-white'>
      <section className='flex flex-row justify-between pb-4'>
        <Link href="/">
          <Image src="/images/logo.png" alt="logo"  height={40} width={160} className='cursor-pointer'/>
        </Link>
        {!session ? (
          <div className='flex flex-row'>
            <button className='flex' onClick={() => signIn()}>
              <UserIcon className="h-8 w-8 mx-2"/>
              <p className='text-xl mr-4 hidden sm:block'>LOGIN</p>
            </button>
            <ShoppingCartIcon className="h-8 w-8 sm:mx-2"/>
            <p className='text-xl hidden sm:block'>SHOP</p>
            {initialProductsAmount > 0 && <p className='text-xl ml-2'>({initialProductsAmount})</p>}
          </div>
        ) : (
          <div className='flex flex-row'>
            <button className='flex' onClick={() => signOut()}>
              <UserIcon className="h-8 w-8 mx-2"/>
              <p className='text-xl mr-4 hidden sm:block'>LOGOUT</p>
            </button>
            <ShoppingCartIcon className="h-8 w-8 sm:mx-2"/>
            <p className='text-xl hidden sm:block'>SHOP</p>
          </div>
        )}
      </section>
      <section className='justify-end mb-2 hidden sm:flex'>
        {session && <p><b>{session.user.email}</b> is signed in</p>}
      </section>
    </nav>
  )
}
