import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children }:React.PropsWithChildren<{}>) => {


  return (
    <div className='w-full h-full min-h-screen relative bg-zinc-50'>
      <Navbar />
      <main className='h-auto'>{children}</main>
      <footer className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-screen'>
        <Footer />
      </footer>
    </div>
  )
}