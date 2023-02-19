import React from 'react'; 
import { Box, Flex, Heading, Text } from '@chakra-ui/react'; 
import CardCategoria from './CardCategoria';
import styles from './SideScroll.module.css';

export default function SideScroll({ id, title, category }: { id: string, title: string, category: string}) {

  return ( 
    <>
      <Flex flexDirection="column">
        <Text fontSize={{ base: "inherit", md: "3xl", lg: "3xl"}} marginLeft={{ base: "4vw", md: "4vw", lg: "1vw"}} marginTop="1" color="#fff">{category}</Text>
        <Flex marginLeft={{ base: "4vw", md: "4vw", lg: "1vw"}} className={`${styles.sideScroll}`}>
            <CardCategoria title={title} category={category} url='https://www.eusemfronteiras.com.br/wp-content/uploads/2017/04/54033405_m-810x540.jpg' />
            <CardCategoria title={title} category={category} url='https://www.tribunapr.com.br/wp-content/uploads/2020/08/16145536/jovem-feliz-freepik-ArthurHidden-1.jpg' />
            <CardCategoria title={title} category={category} url='https://sociedadedospsicologos.files.wordpress.com/2021/06/natureza.jpg?w=1024' />
            <CardCategoria title={title} category={category} url='https://cdn.folhape.com.br/upload/dn_arquivo/2022/03/image-2022-03-21t105334701.jpg' />
            <CardCategoria title={title} category={category} url='https://wallpapercave.com/wp/y0CeSA8.png' />
        </Flex>
      </Flex>
    </>
   ); 
}; 
