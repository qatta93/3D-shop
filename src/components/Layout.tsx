import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children }:React.PropsWithChildren<{}>) => {


  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}