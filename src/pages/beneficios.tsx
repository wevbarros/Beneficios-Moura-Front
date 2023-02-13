/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import CardChakra from '../components/CardChakra'
import FooterChakra from '../components/FooterChakra'
import { api } from '../services/api';
import { useEffect, useState } from 'react';
import { IBeneficio } from '../dtos/IBeneficio';
import CardSkeleton from '../components/CardSkeleton'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Beneficios() {
  const { isReady } = useRouter();
  const [beneficios, setBeneficios] = useState<IBeneficio[]>([]);

  async function getBeneficios() {
    try {
      const response = await api.get('/beneficios');
      setBeneficios(response.data);      
    } catch (error) {
      console.log(error);
    }
  }
    useEffect(() => {
      getBeneficios();
    }, []);
    
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
        <div className="container min-vh-100">

          {beneficios.length > 0 ? (
            beneficios.map((beneficio) => (
              <CardChakra
              key={Number(beneficio.id)}
                title={String(beneficio?.title)}
                description={String(beneficio?.description)}
                id={Number(beneficio?.id)}
              />
            ))
          ) : (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          )}


        </div>
        <FooterChakra />
      </main>
    </>
  )
}