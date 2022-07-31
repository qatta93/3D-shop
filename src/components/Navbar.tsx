import React from 'react'
import { UserIcon } from '@heroicons/react/solid'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react';

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className='flex flex-row px-6 py-4 text-zinc-600 justify-between border-b-[1px] border-zinc-600 bg-white'>
      <Link href="/"><img src="images/logo.png" alt="logo" className='h-8 w-auto cursor-pointer'/></Link>
      <div className='flex flex-row'>
        <div>
          {!session ? (
            <button className='flex' onClick={() => signIn()}>
              <UserIcon className="h-8 w-8 mx-2"/>
              <p className='text-xl mr-4 hidden md:block'>LOGIN</p>
            </button>
          ) : (
            <button onClick={() => signOut()}>
              <UserIcon className="h-8 w-8 mx-2"/>
              <p className='text-xl mr-4 hidden md:block'>LOGOUT</p>
            </button>
          )}
          {session && <p>{session.user.email} is signed in</p>}
        </div>
        <ShoppingCartIcon className="h-8 w-8 sm:mx-2"/>
        <p className='text-xl hidden md:block'>SHOP</p>
      </div>
    </nav>
  )
}
