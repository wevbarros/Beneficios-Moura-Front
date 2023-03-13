/* eslint-disable @next/next/no-sync-scripts */
import { Flex } from '@chakra-ui/react';
import CaptionCarousel from '../components/Carousel'
import SideScroll from '../components/SideScroll'
import styles from '../styles/Categorias.module.scss'
import { useBeneficiosController } from '../controllers/BeneficiosController'
import { useEffect } from 'react'
import { useRouter } from 'next/router';

export default function Beneficios() {
  const { isReady } = useRouter();
  const { beneficios } = useBeneficiosController()
  
  return (
    <>
        <Flex>
          <CaptionCarousel />
        </Flex>
        <Flex display={'flex'} flexDirection="column" className={styles.gradienteAzul}>
          <SideScroll />
          <SideScroll />
          <SideScroll />
          <SideScroll />
        </Flex>
    </>
  )
}
