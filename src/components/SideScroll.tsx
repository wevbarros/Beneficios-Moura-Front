import React from 'react'; 
import { Box, Flex, Heading, Text } from '@chakra-ui/react'; 
import CardCategoria from './CardCategoria';
import styles from './SideScroll.module.css';

export default function SideScroll() { 
  return ( 
    <>
      <Flex flexDirection="column">
        <Text marginLeft={{ base: "4vw", md: "4vw", lg: "1vw"}} marginTop="1" color="#fff">Alimentação</Text>
        <Flex className={`${styles.sideScroll}`}>
          <CardCategoria title="Cartão 1" category="alimentacao" />
          <CardCategoria title="Cartão 2" category="alimentacao" />
          <CardCategoria title="Cartão 3" category="alimentacao" />
          <CardCategoria title="Cartão 4" category="alimentacao" />
          <CardCategoria title="Cartão 5" category="alimentacao" />
        </Flex>
      </Flex>
    </>
   ); 
}; 
