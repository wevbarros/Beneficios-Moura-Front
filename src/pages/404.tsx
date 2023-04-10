// pages/404.js
import React from 'react';
import Image from 'next/image';
import { Flex, Text, Box, Button } from '@chakra-ui/react';
import styles from '../styles/404.module.scss'
import Link from 'next/link';

export default function Custom404() {
  return (
      <Flex className={styles.bgColor} justify={'center'} alignItems={'center'} flexDirection={'column'}>
        <Image src='/images/404.png' alt='404' width={500} height={500} />
        <Flex flexDirection={'column'} textAlign={'center'}>
          <Text color={'#fff'}>
            Ops! Página não encontrada.
          </Text>
          <Button width={'28'} marginTop={'4'} marginX={'auto'} colorScheme={'blue'}>
            <Link href="/"> Go home</Link>
          </Button>
        </Flex>
      </Flex>
  )
}




