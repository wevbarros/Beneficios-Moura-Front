/* eslint-disable @next/next/no-sync-scripts */
import { Flex } from '@chakra-ui/react';
import CaptionCarousel from '../components/Carousel'
import SideScroll from '../components/SideScroll'
import styles from '../styles/Categorias.module.scss'
import { useBeneficiosController } from '../controllers/BeneficiosController'

export default function Beneficios() {
  const { beneficios } = useBeneficiosController()
  
  return (
    <>
      <main>
        <Flex>
          <CaptionCarousel />
        </Flex>
        <Flex display={'flex'} flexDirection="column" className={styles.gradienteAzul}>
          <SideScroll title='Vale Refeição' category='Alimentação' id='1' />
          <SideScroll title='Auxílio Leite' category='Mobilidade e Moradia' id='2'/>
          <SideScroll title='Cesta Básica' category='Saúde e Seguros' id='3'/>
          <SideScroll title='Ultragaz' category='Educação' id='5'/>
        </Flex>
      </main>
    </>
  )
}
