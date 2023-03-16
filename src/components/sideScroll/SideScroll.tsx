import React from 'react';
import { Flex, Text } from '@chakra-ui/react'; 
import { CardBeneficio, CardSkeleton } from '../cardBeneficioHome';
import styles from './SideScroll.module.scss';

import { IBeneficio } from '../../dtos/IBeneficio';
import { useBeneficiosController } from '../../controllers/BeneficiosController';

export function SideScroll({categoria, catId} : {categoria: string, catId: string}) {
  const { beneficios } = useBeneficiosController();

  let output = beneficios.filter((beneficio) => beneficio.categoria == catId);

  return ( 
    <>
        <Flex flexDirection="column">
          <Text fontSize={{ base: "inherit", md: "3xl", lg: "3xl"}} marginLeft={{ base: "4vw", md: "4vw", lg: "1vw"}} marginTop="1" color="#fff">{categoria}</Text>
            <div className={styles.sideScroll}>
              { output.length > 0 ? (
                  output.map((beneficio) => (
                    <CardBeneficio key={Number(beneficio.id)} {...beneficio} />
                  ))
                ) : (
                  <>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                  </>
                )
              }              
            </div>
        </Flex>
    </>
   ); 
}