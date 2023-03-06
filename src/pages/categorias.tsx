/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import NavBar from '../components/NavBar'
import { Flex } from '@chakra-ui/react'
import { Categorias } from '../components/categorias'

export default function Beneficios() {
  
  return (
    <>
      <main>
        <Categorias />
      </main>
    </>
  )
}
