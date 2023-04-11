/* eslint-disable @next/next/no-sync-scripts */
import { Flex } from '@chakra-ui/react';
import { SideScroll } from '../components/sideScroll/SideScroll'
import styles from '../styles/Categorias.module.scss'
import { useBeneficiosController } from '../controllers/BeneficiosController'
import { useRouter } from 'next/router';
import { Footer } from "../components/cardBeneficioBeneficios/Footer";
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
          <SideScroll categoria="Alimentação" catId='1' />
          <SideScroll categoria="Mobilidade e Moradia" catId='2' />
          <SideScroll categoria="Saúde e Seguros" catId='3' />
          <SideScroll categoria="Educação" catId='4' />
          <SideScroll categoria="Estilo de Vida" catId='5' />
          <SideScroll categoria="Benefícios Corporativos" catId='6' />
        </Flex>
        <Footer />
        </div>
      </Flex>
    </>
  )
}
