import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';
import { Layout } from '../src/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const threeScript = document.createElement("script")
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js")
    console.log(document.getElementsByTagName("head")[0].appendChild(threeScript))
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js" integrity="sha512-DkPsH9LzNzZaZjCszwKrooKwgjArJDiEjA5tTgr3YX4E6TYv93ICS8T41yFHJnnSmGpnf0Mvb5NhScYbwvhn2w==" crossOrigin="anonymous"></script>
	      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TimelineMax.min.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
