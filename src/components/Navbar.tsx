import React from 'react'
import { UserIcon } from '@heroicons/react/solid'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image'

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className='px-6 pt-4 text-zinc-600 border-b-[1px] border-zinc-600 bg-white'>
      <section className='flex flex-row justify-between pb-4'>
        <Link href="/">
          <Image src="/images/logo.png" alt="logo"  height={40} width={160} className='cursor-pointer'/>
        </Link>
        <div className='flex flex-row'>
          <div>
            {!session ? (
              <button className='flex' onClick={() => signIn()}>
                <UserIcon className="h-8 w-8 mx-2"/>
                <p className='text-xl mr-4  md:block'>LOGIN</p>
              </button>
            ) : (
              <button className='flex' onClick={() => signOut()}>
                <UserIcon className="h-8 w-8 mx-2"/>
                <p className='text-xl mr-4 hidden md:block'>LOGOUT</p>
              </button>
            )}
          </div>
          <ShoppingCartIcon className="h-8 w-8 sm:mx-2"/>
          <p className='text-xl hidden md:block'>SHOP</p>
        </div>
      </section>
      <section className='justify-end mb-2 hidden md:flex'>
        {session && <p><b>{session.user.email}</b> is signed in</p>}
      </section>
    </nav>
  )
}
