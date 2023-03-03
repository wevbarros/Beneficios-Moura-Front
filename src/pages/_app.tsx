import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/hideScrollbar.scss'
import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script';
import NavBar from '../components/NavBar';

import type { AppProps } from 'next/app'
import Head from 'next/head';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"/>
    <ChakraProvider>
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}
