import React, { useState } from 'react';
import { Navbar } from './navigation/Navbar';
import { Footer } from './Footer';
import { MobileMenu } from './MobileMenu';

export const Layout = ({ children }:React.PropsWithChildren<{}>) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='w-full h-full min-h-screen relative bg-zinc-50'>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <main className='h-full'>{openMenu ? <MobileMenu/> : children}</main>
      <footer className='absolute -bottom-20 xl:-bottom-0 left-1/2 transform -translate-x-1/2 w-screen'>
        <Footer />
      </footer>
    </div>
  )
}