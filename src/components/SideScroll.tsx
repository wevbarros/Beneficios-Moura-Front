import React, { useState, useRef, useEffect} from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react'; 
import CardBeneficio from './cardBeneficioHome';
import styles from './SideScroll.module.scss';

export default function SideScroll({ id, title, category }: { id: string, title: string, category: string}) {

  return ( 
    <>
      <Flex flexDirection="column">
        <Text fontSize={{ base: "inherit", md: "3xl", lg: "3xl"}} marginLeft={{ base: "4vw", md: "4vw", lg: "1vw"}} marginTop="1" color="#fff">{category}</Text>
          <div className={styles.sideScroll}>
              <CardBeneficio title={title} category={category} url='https://images.freeimages.com/images/large-previews/4b2/walking-on-the-mountain-1-1566594.jpg' />
              <CardBeneficio title={title} category={category} url='https://images.freeimages.com/images/large-previews/d41/bear-combat-2-1332988.jpg' />
              <CardBeneficio title={title} category={category} url='https://images.freeimages.com/images/large-previews/31a/traverse-1234278.jpg' />
              <CardBeneficio title={title} category={category} url='https://images.freeimages.com/images/large-previews/218/my-dog-cutter-1499799.jpg' />
              <CardBeneficio title={title} category={category} url='https://image.shutterstock.com/image-photo/mother-tying-daughters-shoelaces-she-260nw-1326683405.jpg' />
          </div>
      </Flex>
    </>
   ); 
};