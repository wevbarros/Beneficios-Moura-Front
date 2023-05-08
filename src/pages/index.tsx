/* eslint-disable @next/next/no-sync-scripts */
import { Flex } from '@chakra-ui/react';
import { SideScroll } from '../components/sideScroll/SideScroll'
import styles from '../styles/Categorias.module.scss'
import { useBeneficiosController } from '../controllers/BeneficiosController'
import { useRouter } from 'next/router';
import { Carousel } from '../components/Carousel/Carousel';
import 'animate.css';

export default function Beneficios() {

  return (
    <>
      <Flex>
        <Carousel />
      </Flex>

      <Flex display={'flex'} flexDirection="column" className={styles.gradienteAzul} >
        <div className='animate__animated animate__fadeInLeftBig'>
          <SideScroll categoria="Para Você Estar Lado a Lado" catId='1' />
          <SideScroll categoria="Para Você Ficar Bem" catId='2' />
          <SideScroll categoria="Para Você Economizar" catId='3' />
          <SideScroll categoria="Para Você Ficar Saudável" catId='4' />
        </div>
      </Flex>
    </>
  )
}
