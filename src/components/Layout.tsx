import React, { useState } from 'react';
import { Navbar } from './navigation/Navbar';
import { Footer } from './Footer';
import { MobileMenu } from './navigation/MobileMenu';

export const Layout = ({ children }:React.PropsWithChildren<{}>) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='w-full h-full min-h-screen'>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <main className='h-[calc(100vh-120px)] sm:h-[calc(100vh-150px)] bg-primary-light'>{openMenu ? <MobileMenu setOpenMenu={setOpenMenu}/> : children}</main>
      <Footer />
    </div>
  )
}