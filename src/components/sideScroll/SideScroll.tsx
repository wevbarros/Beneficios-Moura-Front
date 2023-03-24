import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Text } from '@chakra-ui/react'; 
import { CardBeneficio, CardSkeleton } from '../cardBeneficioHome';
import styles from './SideScroll.module.scss';

import { useBeneficiosController } from '../../controllers/BeneficiosController';
import { useMediaQuery } from 'react-responsive';

import "swiper/css";

export function SideScroll({categoria, catId} : {categoria: string, catId: string}) {
  const { beneficios } = useBeneficiosController();

  let output = beneficios.filter((beneficio) => beneficio.categoria == catId);

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 767px)'
  });

  const isMediumScreen = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1023px)'
  });

  const isLargeScreen = useMediaQuery({
    query: '(min-width: 1024px)'
  });

  const isExtraLargeScreen = useMediaQuery({
    query: '(min-width: 1200px)'
  });

  let slidesPerSize = 1;
  let spaceBetween = 0;

  if (isSmallScreen) {
    slidesPerSize = 3;
    spaceBetween = 1;
  } else if (isMediumScreen) {
    slidesPerSize = 3;
    spaceBetween = 120;
  } else if (isExtraLargeScreen) {
    slidesPerSize = 4;
    spaceBetween = 0;
    //se output for menor que 4, repita o primeiro item no final
    if (output.length < 4) {
      output = output.concat(output);
    }

  } else if (isLargeScreen) {
    slidesPerSize = 3;
    spaceBetween = 120;
  }

  return ( 
    <>
        <Flex flexDirection="column">
          <Text fontSize={{ base: "inherit", md: "3xl", lg: "3xl"}} marginLeft={{ base: "4vw", md: "4vw", lg: "1vw"}} marginTop="1" color="#fff">{categoria}</Text>
            <div className={styles.sideScroll}>
            <Swiper
              slidesPerView={slidesPerSize}
              spaceBetween={spaceBetween}
              slidesPerGroup={1}
            >
              { output.length > 0 ? (
                  output.map((beneficio) => (
                    <SwiperSlide key={Number(beneficio.id)}>
                      <CardBeneficio key={Number(beneficio.id)} {...beneficio} />
                    </SwiperSlide>
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
              </Swiper>       
            </div>
        </Flex>
    </>
   ); 
}
