import Link from 'next/link'
import React from 'react'
import Button from '../button'

export const MobileMenu = ({setOpenMenu}) => {
  // check the login route
  const pages = ['home', 'products', 'login', 'cart']
  return (
    <section className='flex items-center h-[calc(100%-3px)] w-full bg-white'>
      <div className='flex flex-col mx-auto'>
        {pages.map((label:string) => (
        <Link href={label === 'home'? '/' : `/${label}`} key={label}>
          <Button
            variant={'primary'}
            className={'w-[270px] mx-auto my-[14px] uppercase'}
            size={'xs'}
            onClick={() => setOpenMenu((current:boolean) => !current)}>
            {label}
          </Button>
        </Link>
        ))}
      </div>
    </section>
  )
}
