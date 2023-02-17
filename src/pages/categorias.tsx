/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import NavBar from '../components/NavBar'
import FooterChakra from '../components/FooterChakra'
import CardCategoria from '../components/CardCategoria'
import { Flex } from '@chakra-ui/react';
import CaptionCarousel from '../components/Carousel'
import SideScroll from '../components/SideScroll'
import styles from '../styles/Categorias.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Beneficios() {
    
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <Flex>
          <CaptionCarousel />
        </Flex>
        <Flex display={'flex'} flexDirection="column" className={styles.gradienteAzul}>
          <SideScroll />
          <SideScroll />
          <SideScroll />
          <SideScroll />
        </Flex>
      </main>
    </>
  )
}