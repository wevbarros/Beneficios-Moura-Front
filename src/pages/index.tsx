/* eslint-disable @next/next/no-sync-scripts */
import { Flex } from '@chakra-ui/react';
import CaptionCarousel from '../components/Carousel'
import { SideScroll } from '../components/sideScroll/SideScroll'
import styles from '../styles/Categorias.module.scss'
import { useBeneficiosController } from '../controllers/BeneficiosController'
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
          <SideScroll categoria="Alimentação" catId='1' />
          <SideScroll categoria="Mobilidade e Moradia" catId='2' />
          <SideScroll categoria="Saúde e Seguros" catId='3' />
          <SideScroll categoria="Educação" catId='4' />
          <SideScroll categoria="Estilo de Vida" catId='5' />
          <SideScroll categoria="Benefícios Corporativos" catId='6' />
        </Flex>
    </>
  )
}
