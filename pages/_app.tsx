import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';
import { Layout } from '../src/components/Layout'
import { SessionProvider } from "next-auth/react"
// import { Provider } from "../context/AppContext";

function MyApp({  Component, pageProps: { session, ...pageProps }}: AppProps) {

  useEffect(() => {
    const threeScript = document.createElement("script")
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js")
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    }
  }, [])
  
  
  return (
    <>
      <Head>
        <title>3D SHOP</title>
        <meta name="description" content="Find your perfect furniture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        {/* <Provider> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        {/* </Provider> */}
      </SessionProvider>
    </>
  )
}

export default MyApp;
