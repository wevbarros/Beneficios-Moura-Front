import React from 'react'; 
import { Box, Flex, Heading, Text } from '@chakra-ui/react'; 
import CardCategoria from './CardCategoria';
import styles from './SideScroll.module.css';

export default function SideScroll() { 
  return ( 
    <>
      <Flex flexDirection="column" bgColor={'#227cf6'}>
        <Text marginTop="1" color="#fff">Alimentação</Text>
        <Flex marginTop="-1" flexDirection="row" height="27vh" bgColor={'#227cf6'}>
          <CardCategoria title="Alimentação" category="alimentacao" />
          <CardCategoria title="Alimentação" category="alimentacao" />
          <CardCategoria title="Alimentação" category="alimentacao" />
          <CardCategoria title="Alimentação" category="alimentacao" />
          <CardCategoria title="Alimentação" category="alimentacao" />
        </Flex>
      </Flex>
    </>
   ); 
}; 
