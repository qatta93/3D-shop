import React, { useEffect, useContext, useState } from 'react'
import { UserIcon } from '@heroicons/react/solid'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Context } from "../../context/AppContext";
import { getProducts, getUsers } from './helpers/crud';

export const Navbar = () => {
  const { data: session } = useSession();

  //@ts-ignore
  const { state } = useContext(Context);

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const userId = session && users.length > 0 && users.filter(user => session.user.email === user.email)[0].id;

  const userProductsLength = products.filter(item => item.userId === userId).length;
  
  const [ productsAmount, setProductsAmount ] = useState<number>(0)

  const initialProductsAmount = state.length > 0 && state.map(item => item.quantity).reduce((a, b) => a + b, 0)
  
  useEffect(() => {
    if(initialProductsAmount > 0){
      setProductsAmount(initialProductsAmount)
    }
  }, [state]);

  useEffect(() => {
    getUsers(setUsers);
    getProducts(setProducts);
  }, [])
  
  
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
            <Link href="/cart">
              <button className='flex'>
                <ShoppingCartIcon className="h-8 w-8 sm:mx-2"/>
                <p className='text-xl hidden sm:block'>SHOP</p>
                {productsAmount > 0 && <p className='text-xl ml-2'>({productsAmount})</p>}
              </button>
            </Link>
          </div>
        ) : (
          <div className='flex flex-row'>
            <button className='flex' onClick={() => signOut()}>
              <UserIcon className="h-8 w-8 mx-2"/>
              <p className='text-xl mr-4 hidden sm:block'>LOGOUT</p>
            </button>
            <Link href="/cart">
              <button className='flex'>
                <ShoppingCartIcon className="h-8 w-8 sm:mx-2"/>
                <p className='text-xl hidden sm:block'>SHOP</p>
                {/* read products in cart from localstorage and database */}
                {userProductsLength > 0 && <p className='text-xl ml-2'>({userProductsLength})</p>}
             </button>
            </Link>
          </div>
        )}
      </section>
      <section className='justify-end mb-2 flex text-xs text-gray text-zinc-500'>
        {session && 
          <>
          <p className='my-auto'><b>{session.user.email}</b> is signed in</p>
          <button className='flex' onClick={() => signOut()}>
          <p className='text-[18px] ml-2 p-1 sm:hidden font-medium shadow-xl shadow-slate-200 border-solid border-[1px] border-indigo-50'>LOGOUT</p>
          </button>
          </>
        }
      </section>
    </nav>
  )
}

export default Navbar;