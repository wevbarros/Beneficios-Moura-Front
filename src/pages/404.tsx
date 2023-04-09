// pages/404.js
import React from 'react';
import Image from 'next/image';
import { Flex, Text, Box } from '@chakra-ui/react';

export default function Custom404() {
  return (
      <Flex  marginTop={'72'} justify={'center'} alignItems={'center'} flexDirection={'column'}>
        <Image src='/images/404.png' alt='404' width={500} height={500} />
        <Text>
          Ops! Página não encontrada.
        </Text>
      </Flex>
  )
}




